# Fix "Too Many Clients" Error

## Quick Fix (Recommended)

Run this command in the `Scholarpath-backend` directory:

```bash
npm run fix:connections
```

Or manually run:

```powershell
.\fix-connections.ps1
```

This will:
1. Stop all Node.js processes
2. Restart PostgreSQL service
3. Clean up remaining connections
4. Make your database ready for new connections

## Alternative Methods

### Method 1: Restart PostgreSQL Service Manually

1. Open **Services** (press `Win + R`, type `services.msc`, press Enter)
2. Find **PostgreSQL** service (name may vary: `postgresql-x64-XX` or similar)
3. Right-click → **Restart**

### Method 2: Kill Connections via SQL

Run this SQL in **pgAdmin** or **psql**:

```sql
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'scholarpath'
  AND pid <> pg_backend_pid();
```

Or use the PowerShell script:

```powershell
.\kill-connections-sql.ps1
```

### Method 3: Kill Node.js Processes

```powershell
Get-Process node | Stop-Process -Force
```

Then restart your backend.

## Prevention

The connection pool has been optimized to:
- Use maximum 5 connections (reduced from 10)
- Close idle connections after 20 seconds
- Automatically evict idle connections every 10 seconds

## Why This Happens

PostgreSQL has a default limit of 100 connections. When:
- Multiple backend instances are running
- Connections aren't properly closed
- The connection pool is exhausted

You'll see the "too many clients already" error.

## After Fixing

1. Start your backend: `npm run start:dev`
2. If needed, run seed: `npm run seed`

The error should be resolved!



