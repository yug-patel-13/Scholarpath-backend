# IMMEDIATE FIX for "Too Many Clients" Error

## Quick Solution (Choose One):

### Option 1: Restart PostgreSQL Service (FASTEST)
1. Press `Win + R`
2. Type `services.msc` and press Enter
3. Find **"postgresql-x64-17"** (or your PostgreSQL version)
4. Right-click → **Restart**
5. Wait 10 seconds
6. Run: `npm run seed`

### Option 2: Kill Connections via pgAdmin
1. Open **pgAdmin**
2. Right-click on your server → **Query Tool**
3. Run this SQL:
   ```sql
   SELECT pg_terminate_backend(pid)
   FROM pg_stat_activity
   WHERE datname = 'scholarpath'
     AND pid <> pg_backend_pid();
   ```
4. Run: `npm run seed`

### Option 3: Use PowerShell Script
```powershell
.\kill-all-connections.ps1
```
Then run: `npm run seed`

---

## What Was Fixed:

1. ✅ Seed script now uses bulk inserts (faster, fewer connections)
2. ✅ Connection pool limited to 1 connection for seed script
3. ✅ Proper connection cleanup in finally block
4. ✅ Batch processing to reduce connection overhead

After restarting PostgreSQL, the seed script will work perfectly!

