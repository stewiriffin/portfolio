# How to Push to GitHub

## Option 1: Using Personal Access Token (Recommended)

### Step 1: Generate a Personal Access Token (PAT)
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Fill in:
   - Note: "Portfolio Push"
   - Expiration: Select "No expiration" or 30 days
   - Select scopes: ☑️ **repo** (full control of private repositories)
4. Click "Generate token"
5. **COPY THE TOKEN** (starts with `ghp_...`)

### Step 2: Push to GitHub
Run these commands in your terminal:

```bash
cd "/run/media/ian/Secondary/documents secondary/Websites /n1"
git push -u origin main
```

When prompted for password:
- Username: `stewiriffin`
- Password: **Paste your PAT** (not your GitHub password)

### Step 3: Create GitHub Repository (if not exists)
1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Description: "Portfolio website for Ian Gicheha Mbae"
4. Make it **Public**
5. Click "Create repository"
6. Don't initialize with README (already exists)

---

## Option 2: Using VS Code (Easier)

1. Open the folder in VS Code: `/run/media/ian/Secondary/documents secondary/Websites /n1`
2. Press `Ctrl+Shift+G` or click the Source Control icon
3. You should see all changes committed
4. Click "Sync Changes" or the cloud icon 🔄
5. If prompted, login with GitHub

---

## Option 3: SSH Setup

### Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "stewiegriffin3108ia@gmail.com"
```
- Save to: `/home/ian/.ssh/id_ed25519`
- Passphrase: (optional, press Enter to skip)

### Add SSH Key to GitHub
1. Copy the public key:
   ```bash
   cat /home/ian/.ssh/id_ed25519.pub
   ```
2. Go to https://github.com/settings/keys
3. Click "New SSH key"
4. Paste the key and save

### Update Remote and Push
```bash
cd "/run/media/ian/Secondary/documents secondary/Websites /n1"
git remote set-url origin git@github.com:stewiriffin/portfolio.git
git push -u origin main
```

---

## After Push - Deploy to Vercel (Free)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Select your `portfolio` repository
5. Click "Deploy"
6. Your site will be live at `https://portfolio-xxx.vercel.app`

---

## Commands Reference

```bash
# Check current status
cd "/run/media/ian/Secondary/documents secondary/Websites /n1"
git status

# View commit history
git log --oneline

# Push to GitHub
git push -u origin main

# Pull latest from GitHub
git pull origin main
```

---

## Troubleshooting

**"remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/stewiriffin/portfolio.git
```

**"Permission denied"**
- Make sure PAT has `repo` scope
- Or use SSH instead

**"nothing to commit"**
- All changes are already committed
- Just run: `git push`
