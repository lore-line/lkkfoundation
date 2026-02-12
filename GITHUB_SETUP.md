# GitHub & Cloudflare Pages Setup Guide

Complete guide to initialize Git, push to GitHub, and deploy to Cloudflare Pages.

---

## 1. Initialize Git Repository

```bash
cd d:/Nextcloud/LORELINE/CODE/lkkfoundation

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial scaffold: Astro + Tailwind + Sanity + Cloudflare"
```

---

## 2. Create GitHub Repository

### Option A: GitHub CLI (Recommended)
```bash
# Install GitHub CLI if not already: https://cli.github.com
# Then authenticate and create repo:

gh auth login
gh repo create lkkfoundation --public --source=. --remote=origin --push

# Or for private repo:
gh repo create lkkfoundation --private --source=. --remote=origin --push
```

### Option B: Via GitHub Web UI
1. Go to https://github.com/new
2. Repository name: `lkkfoundation`
3. Visibility: Public or Private
4. **Do NOT** initialize with README (we already have one)
5. Click "Create repository"

Then link your local repo:
```bash
git remote add origin https://github.com/YOUR_USERNAME/lkkfoundation.git
git branch -M main
git push -u origin main
```

---

## 3. Connect to Cloudflare Pages

### A. Via Cloudflare Dashboard
1. Go to https://dash.cloudflare.com
2. Navigate to **Pages**
3. Click **Create a project** → **Connect to Git**
4. Select **GitHub** and authorize Cloudflare
5. Choose the `lkkfoundation` repository
6. Configure build settings:
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

### B. Build Settings (auto-detected, but verify):
```
Framework preset: Astro
Node version: 18 or higher (auto-detected from package.json)
```

### C. Environment Variables
Click **Add variable** for each:

| Variable | Value |
|---|---|
| `PUBLIC_SANITY_PROJECT_ID` | *(your Sanity project ID)* |
| `PUBLIC_SANITY_DATASET` | `production` |
| `PUBLIC_SANITY_API_VERSION` | `2024-01-01` |
| `PUBLIC_SITE_URL` | `https://limketkaifoundation.org` |

### D. Deploy
Click **Save and Deploy**

Cloudflare will build and deploy. First build takes ~2-3 minutes.

---

## 4. Custom Domain (Optional)

### If you own `limketkaifoundation.org`:

1. In Cloudflare Pages → **Custom domains** → **Set up a custom domain**
2. Enter `limketkaifoundation.org`
3. Follow DNS configuration steps:
   - Add CNAME record: `limketkaifoundation.org` → `lkkfoundation.pages.dev`
   - Or use Cloudflare's automatic DNS setup if domain is already on Cloudflare

4. Wait for DNS propagation (can take 5-60 minutes)

---

## 5. Verify Deployment

### Check Build Logs
- Go to Cloudflare Pages → Deployments → Click latest deployment
- Review build log for errors

### Test Live Site
Visit: `https://lkkfoundation.pages.dev` (or your custom domain)

You should see:
- ✅ Home page with Hero, Legacy, Growth sections
- ✅ Working navigation
- ✅ All 9 routes accessible
- ✅ Tailwind styles applied (brand colors, fonts)

---

## 6. Development Workflow

```bash
# Create feature branch
git checkout -b feature/hero-images

# Make changes...
# Test locally: npm run dev

# Commit and push
git add .
git commit -m "Add hero background images"
git push origin feature/hero-images

# Create PR on GitHub
# Cloudflare automatically creates preview deployment for PR

# After review, merge to main
# Cloudflare automatically deploys to production
```

---

## 7. Troubleshooting

### Build fails on Cloudflare
- Check environment variables are set
- Review build logs for missing dependencies
- Verify `wrangler.toml` is committed

### Sanity data not loading
- Verify `PUBLIC_SANITY_PROJECT_ID` is correct
- Check Sanity project is deployed and has content
- Test Sanity client locally: `npm run dev` and check browser console

### Styles not loading
- Clear Cloudflare cache: Pages → Settings → Purge cache
- Check `tailwind.config.mjs` is committed
- Verify `global.css` import in `BaseLayout.astro`

---

## 8. Useful Commands

```bash
# Pull latest from main
git pull origin main

# Check git status
git status

# View commit history
git log --oneline

# Trigger Cloudflare redeploy (without code changes)
git commit --allow-empty -m "Trigger rebuild"
git push origin main

# Roll back to previous commit
git revert HEAD
git push origin main
```

---

## Next Steps

See [NEXT_STEPS.md](NEXT_STEPS.md) for implementation roadmap.
