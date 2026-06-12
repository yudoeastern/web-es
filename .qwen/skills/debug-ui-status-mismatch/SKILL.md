---
name: debug-ui-status-mismatch
description: Debug UI not displaying expected status by querying database directly to find data inconsistencies
source: auto-skill
extracted_at: '2026-06-11T10:18:12.830Z'
---

# Debug UI Status Mismatch

When a status/badge/label is not displaying correctly in the UI despite code appearing correct, follow this diagnostic approach:

## Step 1: Verify Code Logic

First confirm the UI code handles the expected status values:

```tsx
// Check if all status values are handled
{webinar.status === "fully_booked" && (
  <span>FULLY BOOKED</span>
)}
```

## Step 2: Query Database Directly

If code looks correct, check actual data in the database. Use Node.js with better-sqlite3:

```bash
cd /root/apps/web && node -e "
const db = require('better-sqlite3')('webinars.db');
const rows = db.prepare('SELECT id, title, status FROM webinars').all();
console.log(JSON.stringify(rows, null, 2));
"
```

**Why:** The database may contain typos or legacy values that don't match current schema enums.

## Step 3: Identify Data Inconsistencies

Compare actual database values against expected enum values:

```
Expected: ["upcoming", "past", "fully_booked"]
Found in DB: "full_book"  ← TYPO!
```

**Common issue:** Historical data was entered with typos before schema validation was enforced, or data was imported/migrated with inconsistencies.

## Step 4: Fix Data and Verify

Create a script to fix the data safely:

```javascript
// fix-status.js
const db = require('better-sqlite3')('webinars.db');
const stmt = db.prepare("UPDATE webinars SET status = 'fully_booked' WHERE status = 'full_book'");
const result = stmt.run();
console.log(`Updated ${result.changes} rows`);
```

Then verify:
```bash
node fix-status.js
```

## Step 5: Check All Affected Pages

If status displays in multiple places (list view + detail view), ensure all pages handle the status:

- List page: `/webinar` - badge + button styling
- Detail page: `/webinar/[id]` - status banner + conditional content

## Key Principle

**Code can be correct but data can be wrong.** When UI doesn't match expected behavior:
1. Verify code handles the value
2. Query database to confirm actual data matches schema
3. Fix data inconsistencies at the source
4. Restart/rebuild to ensure fresh data is loaded
