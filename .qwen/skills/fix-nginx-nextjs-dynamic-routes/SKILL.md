---
name: fix-nginx-nextjs-dynamic-routes
description: Debug and fix nginx configuration that blocks Next.js dynamic routes by serving static files instead
source: auto-skill
extracted_at: '2026-06-11T10:43:49.606Z'
---

# Fix Nginx Configuration Blocking Next.js Dynamic Routes

## Problem Symptom

Next.js dynamic routes (e.g., `/events/[id]`) return 404 errors in production despite:
- Working correctly in development (`localhost:3000`)
- Building successfully with no errors
- Static routes working fine

## Root Cause

Nginx `location` blocks with `alias` directive can intercept requests meant for Next.js dynamic routes. Example problematic config:

```nginx
location /events/ {
    alias /root/apps/web/public/events/;
    autoindex off;
    # ...
}
```

This config tells nginx: "For ANY request starting with `/events/`, serve files from `/public/events/`". 

So `/events/14` tries to load `/public/events/14` as a static file instead of proxying to Next.js, which would handle the dynamic route `[id]`.

## Diagnosis

1. **Test Next.js directly** (bypass nginx):
   ```bash
   curl -I http://localhost:3000/events/14
   ```
   If this returns `200 OK`, Next.js is working correctly.

2. **Test via nginx** (production URL):
   ```bash
   curl -I https://www.easternstack.com/events/14
   ```
   If this returns `404` while direct test returns `200`, nginx is the problem.

3. **Check nginx config** for location blocks that match the route:
   ```bash
   cat /root/apps/web/nginx.conf
   ```
   Look for `location /events/` or similar patterns.

## Solution

### Option 1: Remove the location block (recommended)

If the location block was meant to serve static images but isn't needed (Next.js handles `/public` automatically):

```nginx
# Before
server {
    location /events/ {
        alias /root/apps/web/public/events/;
        # ...
    }
    location / {
        proxy_pass http://localhost:3000;
    }
}

# After
server {
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

### Option 2: Make location block more specific

If you need to serve specific static files, use exact file extensions:

```nginx
# Only serve image files, not dynamic routes
location ~ ^/events/.*\.(jpg|jpeg|png|gif|webp)$ {
    alias /root/apps/web/public/events/;
    expires 30d;
}
```

### Option 3: Use try_files to fallback to Next.js

```nginx
location /events/ {
    try_files $uri $uri/ @nextjs;
}

location @nextjs {
    proxy_pass http://localhost:3000;
    # ... proxy settings
}
```

## Apply Changes

After editing nginx config:

```bash
# Test configuration syntax
nginx -t

# Reload nginx (no downtime)
nginx -s reload
```

## Key Principle

**Next.js App Router handles `/public` directory automatically through the proxy.** You rarely need explicit nginx `location` blocks for static assets unless you have special caching or access control requirements.

When adding nginx location blocks, always verify they don't accidentally intercept dynamic route patterns like `/[id]`, `/[slug]`, etc.

## Prevention

Before adding nginx location blocks:
1. Check if Next.js already handles this via `public/` directory
2. Test the pattern against dynamic routes (e.g., `/events/1`, `/products/abc`)
3. Use specific file extension matching instead of path prefixes when possible
