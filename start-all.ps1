# ==========================================
# Start pypiserver and React App
# ==========================================

$ErrorActionPreference = "Stop"
$Workspace = "C:\Users\Owner\Desktop\pypiserver-main\pypiserver-main"
$DockerImage = "my-pypiserver"
$PackagesPath = "$Workspace\packages"
$CodePath = "$Workspace\pypiserver"
$ReactApp = "$Workspace\my-panel-app"

Write-Host "1. Stopping old Docker containers..." -ForegroundColor Yellow
$containers = docker ps -q
if ($containers) {
    docker stop $containers 2>$null
    docker rm $containers 2>$null
} else {
    Write-Host "No running containers found." -ForegroundColor DarkGray
}

Write-Host "2. Starting pypiserver in the background..." -ForegroundColor Green
Start-Process -FilePath "docker" -ArgumentList "run -p 8080:8080 -v `"$PackagesPath`:/data/packages`" -v `"$CodePath`:/data/pypiserver`" $DockerImage run -p 8080 /data/packages --welcome /data/pypiserver/welcome.html" -WindowStyle Minimized

Start-Sleep -Seconds 2

Write-Host "3. Starting React App..." -ForegroundColor Green
Set-Location $ReactApp
Start-Process -FilePath "cmd.exe" -ArgumentList "/c npm run dev" -WindowStyle Normal

Start-Sleep -Seconds 3

Write-Host "4. Opening Browser..." -ForegroundColor Green
Start-Process "http://localhost:5173"

Write-Host "Done! Everything is running." -ForegroundColor Cyan