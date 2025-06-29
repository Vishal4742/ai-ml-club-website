# 🚀 Deployment Guide

This guide explains how to deploy your AI & ML Club website to various hosting platforms.

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed
- Git repository set up
- All dependencies installed (`npm install`)

## 🔧 Build Process

### Local Build Test

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Preview the build:**
   ```bash
   npm run preview
   ```

The build output will be in the `dist/` folder.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

Netlify is perfect for React apps and offers free hosting with automatic deployments.

#### Method A: Drag & Drop (Quick)
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area
4. Your site is live!

#### Method B: Git Integration (Recommended)
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy automatically on every push

#### Method C: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

### Option 2: Vercel

Vercel is optimized for React and offers excellent performance.

#### Method A: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite/React settings
4. Deploy with one click

#### Method B: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 3: GitHub Pages

Free hosting for static sites.

1. **Add GitHub Pages dependency:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Option 4: Firebase Hosting

Google's hosting platform with global CDN.

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

### Option 5: Traditional Web Hosting

For shared hosting or VPS:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload contents of `dist/` folder to your web server**

3. **Configure server for SPA routing:**
   - Apache: Use `.htaccess` file
   - Nginx: Configure location blocks
   - IIS: Use web.config

## ⚙️ Configuration Files

### Netlify Configuration (`netlify.toml`)
- Build commands and settings
- Redirect rules for SPA routing
- Security headers
- Caching rules

### Vercel Configuration (`vercel.json`)
- Build settings
- Routing rules
- Headers configuration

### Redirects (`public/_redirects`)
- SPA routing support
- Custom redirects

## 🔒 Environment Variables

For production, you may need to set environment variables:

### Netlify
- Go to Site Settings > Environment Variables
- Add variables like:
  - `NODE_ENV=production`
  - `VITE_API_URL=your-api-url`

### Vercel
- Go to Project Settings > Environment Variables
- Add production variables

## 📊 Performance Optimization

### Build Optimization
- Images are automatically optimized by Vite
- CSS and JS are minified
- Assets are hashed for caching

### Caching Strategy
- Static assets: 1 year cache
- Images: 1 year cache
- HTML files: No cache (always fresh)

### Security Headers
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 🚨 Troubleshooting

### Common Issues

**Build fails:**
- Check Node.js version (18+ required)
- Clear node_modules and reinstall
- Check for TypeScript errors

**Routing doesn't work:**
- Ensure redirect rules are configured
- Check if hosting platform supports SPA routing

**Images not loading:**
- Verify image paths are correct
- Check if images are in the build output
- Ensure proper file permissions

**Performance issues:**
- Enable gzip compression on server
- Use CDN for static assets
- Optimize images before upload

### Getting Help

- **Tech Lead**: Ayush Kumar
- **Documentation**: Check hosting platform docs
- **Community**: Stack Overflow, GitHub Issues

## 📈 Monitoring

### Recommended Tools
- **Analytics**: Google Analytics, Plausible
- **Performance**: Lighthouse, WebPageTest
- **Uptime**: UptimeRobot, Pingdom
- **Error Tracking**: Sentry, LogRocket

## 🔄 Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy to Netlify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📝 Deployment Checklist

Before deploying:

- [ ] All tests pass
- [ ] Build completes successfully
- [ ] Images are optimized
- [ ] Environment variables set
- [ ] Redirects configured
- [ ] Security headers enabled
- [ ] Performance optimized
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] SEO meta tags added

## 🌍 Domain Configuration

### Custom Domain Setup
1. **Netlify**: Site Settings > Domain Management
2. **Vercel**: Project Settings > Domains
3. **Firebase**: Hosting > Custom Domains

### SSL Certificate
- Automatically provided by most platforms
- Ensure HTTPS is enabled
- Redirect HTTP to HTTPS

---

**Last Updated**: January 2024  
**Maintained by**: Tech Lead - Ayush Kumar 