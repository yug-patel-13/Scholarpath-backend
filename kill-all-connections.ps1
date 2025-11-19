# PowerShell script to kill ALL PostgreSQL connections to scholarpath database
# This will forcefully close all connections so you can run the seed script

Write-Host "Killing all PostgreSQL connections to 'scholarpath' database..." -ForegroundColor Yellow

# Get PostgreSQL connection details from .env
$envContent = Get-Content .env -ErrorAction SilentlyContinue
$dbHost = "localhost"
$dbPort = "5432"
$dbUser = "postgres"
$dbPass = "postgres"
$dbName = "scholarpath"

if ($envContent) {
    foreach ($line in $envContent) {
        if ($line -match "^DB_HOST=(.+)") { $dbHost = $matches[1] }
        if ($line -match "^DB_PORT=(.+)") { $dbPort = $matches[1] }
        if ($line -match "^DB_USER=(.+)") { $dbUser = $matches[1] }
        if ($line -match "^DB_PASS=(.+)") { $dbPass = $matches[1] }
        if ($line -match "^DB_NAME=(.+)") { $dbName = $matches[1] }
    }
}

Write-Host "Connecting to PostgreSQL at $dbHost:$dbPort..." -ForegroundColor Cyan

# Create a temporary SQL file
$sqlFile = "temp_kill_connections.sql"
$sqlContent = @"
-- Kill all connections to scholarpath database
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = '$dbName'
  AND pid <> pg_backend_pid();
"@

$sqlContent | Out-File -FilePath $sqlFile -Encoding UTF8

Write-Host "SQL file created: $sqlFile" -ForegroundColor Green
Write-Host "`nTo execute this, run one of the following:" -ForegroundColor Yellow
Write-Host "1. In pgAdmin: Open Query Tool and run the contents of $sqlFile" -ForegroundColor Cyan
Write-Host "2. In psql command line:" -ForegroundColor Cyan
Write-Host "   psql -h $dbHost -p $dbPort -U $dbUser -d postgres -f $sqlFile" -ForegroundColor White
Write-Host "`nOr restart PostgreSQL service from Services (services.msc)" -ForegroundColor Yellow

# Try to use psql if available
$psqlPath = Get-Command psql -ErrorAction SilentlyContinue
if ($psqlPath) {
    Write-Host "`nAttempting to run SQL via psql..." -ForegroundColor Cyan
    $env:PGPASSWORD = $dbPass
    try {
        & psql -h $dbHost -p $dbPort -U $dbUser -d postgres -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '$dbName' AND pid <> pg_backend_pid();"
        Write-Host "Connections killed successfully!" -ForegroundColor Green
        Remove-Item $sqlFile -ErrorAction SilentlyContinue
    } catch {
        Write-Host "Could not execute via psql. Please use pgAdmin or restart PostgreSQL service." -ForegroundColor Red
    }
} else {
    Write-Host "psql not found in PATH. Please use pgAdmin or restart PostgreSQL service." -ForegroundColor Yellow
}



