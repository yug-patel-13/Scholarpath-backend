# Fix "Too Many Clients" Error

If you encounter the "sorry, too many clients already" error, follow these steps:

## Quick Fix (PowerShell) - RECOMMENDED

**Run the automated script:**
```powershell
.\kill-connections.ps1
```

Then run:
```powershell
npm run seed
```

## Manual Fix

1. **Kill all Node.js processes:**
   ```powershell
   Get-Process node | Stop-Process -Force
   ```

2. **Restart PostgreSQL service:**
   ```powershell
   Restart-Service postgresql-x64-*
   ```
   Or restart it from Services (services.msc)

3. **Run the seed script again:**
   ```powershell
   npm run seed
   ```

## Alternative: Kill Connections via SQL

1. Open pgAdmin or psql
2. Connect to your PostgreSQL server
3. Run the queries from `kill-connections.sql`:
   ```sql
   -- Check connections
   SELECT pid, usename, datname, state 
   FROM pg_stat_activity 
   WHERE datname = 'scholarpath';
   
   -- Kill idle connections
   SELECT pg_terminate_backend(pid)
   FROM pg_stat_activity
   WHERE datname = 'scholarpath'
     AND pid <> pg_backend_pid()
     AND state = 'idle';
   ```

## Permanent Solution

The connection pool has been configured to limit connections. If the issue persists:

1. Check if you have multiple instances of the backend running
2. Make sure to stop all running instances before running the seed script
3. Increase PostgreSQL's `max_connections` in `postgresql.conf` if needed (default is usually 100)

## Prevention

- Always stop the backend server before running seed/migration scripts
- The seed script now properly closes connections even on errors
- Connection pooling limits are set to prevent too many connections

