# Wael Salem Customs - One-Click Deployment Script
$repoUrl = "https://github.com/usefwaell1234-del/wael-salem.git"
$commitMessage = "Wael Salem Customs - World Class Overhaul v2.0"
$git = "C:\Program Files\Git\cmd\git.exe"

Write-Host "🚀 Starting Deployment..." -ForegroundColor Cyan

# 1. Initialize Git
if (!(Test-Path .git)) {
    Write-Host "📦 Initializing local Git repository..."
    & $git init
}

# 2. Add Remote Origin
$remoteCheck = & $git remote get-url origin 2>$null
if ($null -eq $remoteCheck) {
    Write-Host "🔗 Connecting to GitHub..."
    & $git remote add origin $repoUrl
}

# 3. Add and Commit
Write-Host "📝 Staging files..."
& $git add .
& $git commit -m $commitMessage

# 4. Push to GitHub
Write-Host "📤 Pushing to the world..." -ForegroundColor Green
& $git branch -M main
& $git push -u origin main --force

Write-Host "`n✨ Website successfully updated!" -ForegroundColor Yellow
Write-Host "https://usefwaell1234-del.github.io/wael-salem/" -ForegroundColor Yellow
