param(
  [Parameter(Mandatory=$true)]
  [string]$VpsHost,

  [string]$VpsUser = "root",
  [string]$AppDir = "/var/www/career2day",
  [string]$SshKey = ""
)

$ErrorActionPreference = "Stop"

function Run-Local {
  param([string]$Command)
  Write-Host "`n> $Command" -ForegroundColor Cyan
  powershell.exe -NoProfile -Command $Command
}

function SshArgs {
  if ($SshKey.Trim()) {
    return @("-i", $SshKey)
  }
  return @()
}

$sshTarget = "$VpsUser@$VpsHost"
$sshExtra = SshArgs

Write-Host "Building Career2Day web app..." -ForegroundColor Green
Run-Local "npm.cmd run build --prefix apps/web"

Write-Host "`nCreating remote directories..." -ForegroundColor Green
ssh @sshExtra $sshTarget "mkdir -p $AppDir/dist/apps/web $AppDir/apps/pocketbase/pb_migrations $AppDir/apps/pocketbase/pb_hooks $AppDir/apps/api"

Write-Host "`nUploading frontend build..." -ForegroundColor Green
scp @sshExtra -r "dist/apps/web/*" "${sshTarget}:$AppDir/dist/apps/web/"

Write-Host "`nUploading PocketBase migrations and hooks..." -ForegroundColor Green
scp @sshExtra -r "apps/pocketbase/pb_migrations/*" "${sshTarget}:$AppDir/apps/pocketbase/pb_migrations/"
scp @sshExtra -r "apps/pocketbase/pb_hooks/*" "${sshTarget}:$AppDir/apps/pocketbase/pb_hooks/"

Write-Host "`nUploading API source and package files..." -ForegroundColor Green
scp @sshExtra -r "apps/api/src" "${sshTarget}:$AppDir/apps/api/"
scp @sshExtra "apps/api/package.json" "${sshTarget}:$AppDir/apps/api/package.json"

if (Test-Path "apps/api/package-lock.json") {
  scp @sshExtra "apps/api/package-lock.json" "${sshTarget}:$AppDir/apps/api/package-lock.json"
}

Write-Host "`nInstalling API dependencies and restarting services..." -ForegroundColor Green
ssh @sshExtra $sshTarget "cd $AppDir/apps/api && npm ci --omit=dev || npm install --omit=dev; cd $AppDir; pm2 restart career2day-api || true; pm2 restart career2day-pocketbase || true; nginx -t && systemctl reload nginx"

Write-Host "`nUpload complete." -ForegroundColor Green
