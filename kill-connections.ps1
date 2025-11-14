# PowerShell script to kill PostgreSQL connections
# Run this before running the seed script if you get "too many clients" error

Write-Host "Checking for PostgreSQL connections..." -ForegroundColor Yellow

# Option 1: Restart PostgreSQL service (recommended)
Write-Host "`nOption 1: Restart PostgreSQL Service" -ForegroundColor Cyan
$service = Get-Service | Where-Object { $_.Name -like "*postgresql*" }
if ($service) {
    Write-Host "Found PostgreSQL service: $($service.Name)" -ForegroundColor Green
    Write-Host "Restarting service..." -ForegroundColor Yellow
    Restart-Service $service.Name -Force
    Write-Host "PostgreSQL service restarted successfully!" -ForegroundColor Green
} else {
    Write-Host "PostgreSQL service not found. Please restart it manually from Services (services.msc)" -ForegroundColor Red
}

# Option 2: Kill all Node.js processes
Write-Host "`nOption 2: Killing all Node.js processes..." -ForegroundColor Cyan
$nodeProcesses = Get-Process node -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    $nodeProcesses | Stop-Process -Force
    Write-Host "Killed $($nodeProcesses.Count) Node.js process(es)" -ForegroundColor Green
} else {
    Write-Host "No Node.js processes found" -ForegroundColor Yellow
}

Write-Host "`nDone! You can now try running 'npm run seed' again." -ForegroundColor Green

