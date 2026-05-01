# Run this script from the project root folder (where package.json is)
# Requirements: Node.js installed, flyctl installed (winget install Fly.io.flyctl)

$ROOT = "c:\Users\Suyoug Subedi\Desktop\website\caree2day.com\horizons-export-e558e6c3-ec7f-4d70-b1c7-3401e3382a8c (1)"
Set-Location $ROOT

# ---------------------------------------------------------------
# STEP 1 — PocketBase is hosted on PocketHost.io (free)
# URL: https://molecular-rough.pockethost.io
# ---------------------------------------------------------------
Write-Host "=== Step 1: PocketBase on PocketHost.io ===" -ForegroundColor Cyan
Write-Host "1. Run PocketBase locally: .\apps\pocketbase\pocketbase.exe serve"
Write-Host "2. Open http://localhost:8090/_/ -> Settings -> Export collections -> copy JSON"
Write-Host "3. Open https://molecular-rough.pockethost.io/_/ -> Settings -> Import collections -> paste JSON"
Write-Host "PocketBase URL: https://molecular-rough.pockethost.io" -ForegroundColor Green

# ---------------------------------------------------------------
# STEP 2 — Build the frontend
# ---------------------------------------------------------------
Write-Host ""
Write-Host "=== Step 2: Build Frontend ===" -ForegroundColor Cyan
Write-Host "Make sure apps/web/.env.production has the correct Fly.io URL first."

npm install
npm run build

Write-Host "Build complete. Files are in: dist\apps\web\" -ForegroundColor Green

# ---------------------------------------------------------------
# STEP 3 — Upload frontend to Hostinger
# ---------------------------------------------------------------
Write-Host ""
Write-Host "=== Step 3: Upload to Hostinger ===" -ForegroundColor Cyan
Write-Host "1. Log in to hPanel -> File Manager -> public_html"
Write-Host "2. Delete all existing files in public_html"
Write-Host "3. Upload everything inside dist\apps\web\ into public_html"
Write-Host "   (.htaccess is already included automatically)"

# ---------------------------------------------------------------
# STEP 4 — Deploy Express API to Railway
# ---------------------------------------------------------------
Write-Host ""
Write-Host "=== Step 4: Deploy API to Render.com (free, no credit card) ===" -ForegroundColor Cyan
Write-Host "1. Push this project to GitHub"
Write-Host "2. Go to render.com -> New -> Web Service -> connect your GitHub repo"
Write-Host "3. Set Root Directory: . (project root)"
Write-Host "4. Set Dockerfile Path: deploy/api.Dockerfile"
Write-Host "5. Add these environment variables in Render dashboard:"
Write-Host ""
Write-Host "   PORT=3001"
Write-Host "   POCKETBASE_URL=https://molecular-rough.pockethost.io"
Write-Host "   FRONTEND_URL=https://caree2day.com"
Write-Host "   CORS_ORIGIN=https://caree2day.com"
Write-Host "   WEBSITE_DOMAIN=caree2day.com"
Write-Host "   STRIPE_SECRET_KEY=sk_live_YOUR_KEY"
Write-Host "   STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET"
