# Quick Fix Script for "too many clients" Error
# This script will kill all PostgreSQL connections and restart the service

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Fixing PostgreSQL Connection Issues  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Kill all Node.js processes
Write-Host "[1/4] Stopping all Node.js processes..." -ForegroundColor Yellow
$nodeProcesses = Get-Process node -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    $nodeProcesses | Stop-Process -Force
    Write-Host "   ✓ Killed $($nodeProcesses.Count) Node.js process(es)" -ForegroundColor Green
    Start-Sleep -Seconds 2
} else {
    Write-Host "   ✓ No Node.js processes found" -ForegroundColor Green
}

# Step 2: Find and restart PostgreSQL service
Write-Host "[2/4] Finding PostgreSQL service..." -ForegroundColor Yellow
$services = Get-Service | Where-Object { $_.Name -like "*postgresql*" -or $_.Name -like "*postgres*" }
if ($services) {
    foreach ($service in $services) {
        Write-Host "   Found: $($service.Name) (Status: $($service.Status))" -ForegroundColor Cyan
        if ($service.Status -eq 'Running') {
            Write-Host "   Stopping service..." -ForegroundColor Yellow
            Stop-Service $service.Name -Force -ErrorAction SilentlyContinue
            Start-Sleep -Seconds 3
        }
        Write-Host "   Starting service..." -ForegroundColor Yellow
        Start-Service $service.Name -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 3
        Write-Host "   ✓ Service $($service.Name) restarted" -ForegroundColor Green
    }
} else {
    Write-Host "   ⚠ PostgreSQL service not found automatically" -ForegroundColor Yellow
    Write-Host "   Please restart PostgreSQL manually from Services (services.msc)" -ForegroundColor Yellow
}

# Step 3: Wait for PostgreSQL to be ready
Write-Host "[3/4] Waiting for PostgreSQL to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Step 4: Try to connect and kill remaining connections via SQL
Write-Host "[4/4] Attempting to clean up remaining connections..." -ForegroundColor Yellow
try {
    $env:PGPASSWORD = "postgres"
    $sql = @"
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'scholarpath'
  AND pid <> pg_backend_pid();
"@
    $sql | psql -U postgres -d postgres -h localhost -q 2>&1 | Out-Null
    Write-Host "   ✓ Cleaned up connections" -ForegroundColor Green
} catch {
    Write-Host "   ⚠ Could not clean connections via SQL (this is okay)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Fix Complete!                        " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "You can now:" -ForegroundColor Cyan
Write-Host "  1. Start your backend: cd Scholarpath-backend && npm run start:dev" -ForegroundColor White
Write-Host "  2. Run seed script: npm run seed" -ForegroundColor White
Write-Host ""



