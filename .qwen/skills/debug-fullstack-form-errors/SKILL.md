---
name: debug-fullstack-form-errors
description: Debug form submission failures by checking enum/schema alignment between frontend, API validation, and database
source: auto-skill
extracted_at: '2026-06-11T09:57:41.976Z'
---

# Debug Full-Stack Form Submission Errors

When a form submission (create/update) fails silently or returns validation errors, follow this diagnostic approach:

## Step 1: Check Frontend Form State

Read the frontend component to identify all form field values and their allowed options:

```tsx
// Example: Check useState initial values and select options
const [formData, setFormData] = useState({
  status: "upcoming" as "upcoming" | "past" | "full_book", // ← Note all allowed values
});
```

## Step 2: Verify API Validation Schema

Check the backend API route's validation schema (e.g., Zod schema):

```typescript
// /api/admin/webinars/route.ts
const webinarSchema = z.object({
  status: z.enum(["upcoming", "past", "full_book"]), // ← Must match frontend
});
```

**Common issue:** Frontend uses values not defined in the validation schema, causing silent failures on POST/PUT.

## Step 3: Verify Database Schema

Check the database schema definition:

```typescript
// /src/db/schema.ts
status: text("status", { enum: ["upcoming", "past", "full_book"] }) // ← Must match API schema
```

**Common issue:** SQLite with Drizzle uses TypeScript-level enum constraints. The database column is TEXT, but TypeScript validation will fail if schemas don't align.

## Step 4: Run Build to Catch Type Errors

```bash
npm run build
```

TypeScript/Drizzle will surface mismatches between schema definitions and database operations.

## Key Principle

**Enum values must be consistent across three layers:**
1. Frontend form state/types
2. API validation schema (Zod)
3. Database schema (Drizzle)

A mismatch in any layer causes validation errors or type errors that prevent successful form submission.
