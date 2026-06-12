---
name: refactor-nextjs-routes
description: Rename Next.js App Router routes by updating folder structure and all URL references across the codebase
source: auto-skill
extracted_at: '2026-06-11T10:37:09.169Z'
---

# Refactor Next.js App Router Routes

When renaming a route in Next.js App Router (e.g., `/webinar` → `/events`), follow this systematic approach:

## Step 1: Rename App Directory Folders

Rename the route folder in `src/app`:

```bash
mv src/app/webinar src/app/events
mv src/app/api/webinar src/app/api/events
```

Also rename any nested API route folders:

```bash
mv src/app/api/admin/webinars src/app/api/admin/events
```

## Step 2: Find All URL References

Search for all occurrences of the old route path:

```bash
grep -r "/webinar" src/
```

This will reveal:
- Navigation component links
- Internal page links
- API fetch calls
- Admin dashboard references
- Redirect URLs

## Step 3: Update All References

Update each file systematically:

### Navigation/Menu Components
```tsx
// Before
<Link href="/webinar" className="...">Events</Link>

// After
<Link href="/events" className="...">Events</Link>
```

### Page Links (dynamic routes)
```tsx
// Before
href={`/webinar/${webinar.id}`}
href={`/webinar?page=${page}`}

// After
href={`/events/${webinar.id}`}
href={`/events?page=${page}`}
```

### API Fetch Calls
```tsx
// Before
fetch("/api/webinar/register")
fetch("/api/admin/webinars")

// After
fetch("/api/events/register")
fetch("/api/admin/events")
```

### Admin Dashboard Links
```tsx
// Before
<a href="/webinar" target="_blank">View Public Page</a>

// After
<a href="/events" target="_blank">View Public Page</a>
```

## Step 4: Build and Verify

Run the build to catch any missed references:

```bash
npm run build
```

Next.js will show all compiled routes. Verify the new routes appear:
```
├ ƒ /events
├ ƒ /events/[id]
├ ƒ /api/events/register
├ ƒ /api/admin/events
```

## Step 5: Restart Application

Restart the production server:

```bash
pm2 restart konten-web
```

## Key Principle

**Route renaming in App Router requires two changes:**
1. Rename the folder structure (which defines the route)
2. Update ALL hardcoded URL strings across the codebase

Use `grep` to find every reference before making changes. A missed reference will cause broken links or 404 errors.
