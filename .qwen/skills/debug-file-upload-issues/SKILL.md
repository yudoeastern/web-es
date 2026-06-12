---
name: debug-file-upload-issues
description: Debug file upload failures in Next.js + PM2 production deployments by checking auth cookies, FormData field names, and adding diagnostic logging
source: auto-skill
extracted_at: '2026-06-12T08:15:00.000Z'
---

# Debug File Upload Issues in Next.js + PM2

When file uploads fail in production (Next.js + PM2 + Nginx), follow this diagnostic approach:

## Step 1: Verify Authentication Cookie Name

Check the auth library for the expected cookie name:

```typescript
// src/lib/auth.ts
export function getAuthToken(request: NextRequest): string | null {
  return request.cookies.get("es_admin_token")?.value ?? null; // ← Note exact cookie name
}
```

**Common issue:** Frontend sets `auth_token` but backend expects `es_admin_token` — results in 401 Unauthorized.

## Step 2: Check FormData Field Name

Ensure the frontend sends the file with the correct field name:

```typescript
// Frontend
const formData = new FormData();
formData.append("file", file); // ← Must match backend expectation

// Backend
const file = formData.get("file") as File; // ← Must match frontend
```

**Common issue:** Mismatched field names cause "No file provided" errors.

## Step 3: Test Upload Endpoint Directly with curl

Bypass the frontend to isolate the issue:

```bash
# Test with valid auth token
curl -X POST https://domain.com/api/admin/upload \
  -H "Cookie: es_admin_token=VALID_TOKEN" \
  -F "file=@/path/to/test.jpg"
```

Expected responses:
- `{"error":"Unauthorized"}` → Auth issue (wrong/missing cookie)
- `{"error":"No file provided"}` → FormData field name mismatch
- `{"success":true,"path":"..."}` → Upload works, issue is frontend

## Step 4: Add Diagnostic Logging to Upload Route

Add detailed console logs to capture the upload flow:

```typescript
export async function POST(request: NextRequest) {
  console.log("[UPLOAD] Content-Type:", request.headers.get("content-type"));
  
  const formData = await request.formData();
  const file = formData.get("file") as File;
  
  console.log("[UPLOAD] File:", file ? {
    name: file.name,
    type: file.type,
    size: file.size
  } : "null");
  
  // ... rest of upload logic
  
  console.log("[UPLOAD] Success:", filename);
  // or
  console.error("[UPLOAD] Error:", error);
}
```

## Step 5: Check PM2 Logs

After reproducing the issue, check production logs:

```bash
pm2 logs konten-web --lines 50 --nostream | grep -E "\[UPLOAD\]|error"
```

Look for:
- `[UPLOAD] Unauthorized` → Token expired or wrong cookie name
- `[UPLOAD] No file in formData` → Field name mismatch
- `[UPLOAD] Invalid file type` → MIME type validation failing
- `[UPLOAD] File too large` → Size limit exceeded

## Step 6: Verify Directory Permissions

Ensure the upload directory exists and is writable:

```bash
ls -la /root/apps/web/public/events/
# Should be writable by the PM2 process user (usually root)
```

## Key Checks Summary

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| 401 Unauthorized | Wrong cookie name or expired token | Check `getAuthToken()` cookie name, refresh login |
| "No file provided" | FormData field name mismatch | Ensure `formData.append("file", ...)` matches backend |
| Upload succeeds but image not visible | Nginx static file conflict | Remove `location /events/` block from Nginx config |
| Silent failure in browser | Frontend not handling error response | Check `res.ok` and display error message |

## Production-Specific Notes

- PM2 environment variables must include `ADMIN_SECRET` for JWT validation
- Nginx must proxy `/api/*` routes to Next.js (not serve static files)
- Upload size limits may be enforced by both Next.js AND Nginx (`client_max_body_size`)
