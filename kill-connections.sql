-- Script to kill all idle connections to PostgreSQL
-- Run this in psql or pgAdmin if you get "too many clients" error

-- First, check current connections
SELECT pid, usename, datname, state, query_start, state_change 
FROM pg_stat_activity 
WHERE datname = 'scholarpath';

-- Kill all idle connections (except your own)
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'scholarpath'
  AND pid <> pg_backend_pid()
  AND state = 'idle';

-- Or kill all connections to the database (use with caution)
-- SELECT pg_terminate_backend(pid)
-- FROM pg_stat_activity
-- WHERE datname = 'scholarpath'
--   AND pid <> pg_backend_pid();

