# PowerShell script to kill PostgreSQL connections using SQL
# This is an alternative method if the service restart doesn't work

Write-Host "Killing PostgreSQL connections for 'scholarpath' database..." -ForegroundColor Yellow

# Set PostgreSQL password (change if different)
$env:PGPASSWORD = "postgres"

# SQL to kill all connections except the current one
$sql = @"
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'scholarpath'
  AND pid <> pg_backend_pid();
"@

try {
    # Execute SQL command
    $result = $sql | psql -U postgres -d postgres -h localhost -t -A 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Successfully terminated connections" -ForegroundColor Green
    } else {
        Write-Host "⚠ Error executing SQL. Make sure PostgreSQL is running and psql is in PATH." -ForegroundColor Yellow
        Write-Host "You can also run this SQL manually in pgAdmin or psql:" -ForegroundColor Yellow
        Write-Host $sql -ForegroundColor Cyan
    }
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternative: Run this SQL in pgAdmin or psql:" -ForegroundColor Yellow
    Write-Host $sql -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Done!" -ForegroundColor Green



