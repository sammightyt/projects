# Deployment Guide - Vercel

This guide explains how to deploy the Hill Country Cricket Association website to Vercel.

## Prerequisites

- GitHub, GitLab, or Bitbucket account
- Vercel account (free tier is sufficient)
- Contentful space set up with content models (see CONTENTFUL_SETUP.md)

## Step 1: Prepare Repository

1. Ensure all code is committed:
```bash
git add .
git commit -m "Initial Hill Country Cricket Association website"
```

2. Push to your Git repository:
```bash
git push origin main
```

3. Verify `.gitignore` excludes:
   - `.env.local`
   - `node_modules`
   - `.next`

## Step 2: Create Vercel Project

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click **Add New...** → **Project**
4. Import your Git repository:
   - Select your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Vercel to access your repositories
   - Find and select your HCCA repository

## Step 3: Configure Project

### Framework Preset
- Vercel should automatically detect **Next.js**
- Root Directory: `./` (leave as default)
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)

### Environment Variables

Click **Environment Variables** and add:

```
CONTENTFUL_SPACE_ID = [your_space_id]
CONTENTFUL_ACCESS_TOKEN = [your_delivery_token]
CONTENTFUL_PREVIEW_ACCESS_TOKEN = [your_preview_token]
```

**Important:** 
- Use **Production** environment for these variables
- Copy values from your Contentful space (Settings → API keys)
- Do NOT commit these values to Git

### Optional Email Variables (if using SendGrid)

```
SENDGRID_API_KEY = [your_sendgrid_key]
CONTACT_EMAIL = info@hillcountrycricket.com
```

## Step 4: Deploy

1. Click **Deploy**
2. Vercel will:
   - Install dependencies
   - Build the Next.js application
   - Deploy to a production URL
3. Wait for deployment to complete (typically 2-3 minutes)

## Step 5: Verify Deployment

1. Click the deployment URL provided by Vercel
2. Test key pages:
   - Home page: `/`
   - Youth Cricket: `/youth-cricket`
   - Adult Cricket: `/adult-cricket`
   - Teams: `/teams`
   - Contact: `/contact-registration`

3. Verify teams load (if you added them in Contentful):
   - Go to `/teams`
   - Click on a team to view details

## Step 6: Custom Domain (Optional)

### Add Custom Domain

1. Go to your Vercel project
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `hillcountrycricket.com`)
4. Follow Vercel's DNS configuration instructions

### DNS Configuration

#### Option A: Using Vercel Nameservers
1. Point your domain's nameservers to Vercel
2. Vercel handles all DNS records automatically

#### Option B: Using Your DNS Provider
1. Add A record: `76.76.21.21`
2. Add CNAME record: `cname.vercel-dns.com`
3. Wait for DNS propagation (up to 48 hours)

## Step 7: Continuous Deployment

Vercel automatically deploys when you push to your repository:

1. Make changes locally
2. Commit and push:
```bash
git add .
git commit -m "Update content"
git push origin main
```
3. Vercel automatically builds and deploys
4. Check deployment status in Vercel dashboard

## Performance Optimization

### Enable Vercel Analytics (Optional)

1. Go to your project in Vercel
2. Click **Analytics** tab
3. Enable Web Analytics
4. Monitor performance metrics

### Recommended Settings

- **Node.js Version**: 18.x or higher
- **Function Region**: Choose closest to your users (e.g., Washington DC for US)
- **Edge Network**: Enabled (default)

## Monitoring & Maintenance

### View Deployment Logs

1. Go to Vercel dashboard
2. Click on your project
3. Click **Deployments**
4. Select a deployment to view logs

### Preview Deployments

- Every pull request creates a preview deployment
- Test changes before merging to main
- Preview URL is unique for each PR

### Revalidation

- Static pages revalidate every hour (ISR)
- Force revalidation by triggering a new deployment
- Or adjust `revalidate` value in page files

## Troubleshooting

### Build Fails

**Error: Missing environment variables**
- Solution: Add all required env vars in Vercel project settings
- Verify spelling and values match Contentful

**Error: Module not found**
- Solution: Clear build cache in Vercel settings
- Redeploy

**TypeScript errors**
- Solution: Fix errors locally first
- Run `npm run build` to test before pushing

### Teams Not Loading

**No teams showing**
- Check Contentful credentials are correct in Vercel
- Verify teams are published in Contentful
- Wait for revalidation (1 hour) or redeploy

**Images not loading**
- Verify `next.config.js` includes Contentful image domain
- Check browser console for CORS errors

### Performance Issues

**Slow page loads**
- Enable Vercel Analytics to identify bottlenecks
- Check Contentful API response times
- Consider adding caching layer

**High bandwidth usage**
- Optimize images before uploading to Contentful
- Use smaller image sizes where appropriate

## Environment Management

### Development
```bash
npm run dev
```
Uses `.env.local` (not committed to Git)

### Preview (Pull Requests)
- Uses environment variables from Vercel project
- Separate preview URL for each PR

### Production
- Uses production environment variables
- Main branch deployments go to production URL

## Rollback

If a deployment has issues:

1. Go to Vercel dashboard → Deployments
2. Find previous working deployment
3. Click **...** → **Promote to Production**
4. Previous version is instantly restored

## Advanced Configuration

### Custom Headers

Add to `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        }
      ]
    }
  ]
}
```

### Redirects

Add to `next.config.js`:
```javascript
async redirects() {
  return [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true
    }
  ]
}
```

## Cost Considerations

### Free Tier Includes:
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Preview deployments
- Analytics (basic)

### Usage Tips:
- Free tier is sufficient for most cricket associations
- Monitor bandwidth in Vercel dashboard
- Optimize images to reduce bandwidth
- Consider Pro plan only if exceeding limits

## Security

### Best Practices:
- Never commit `.env.local` to Git
- Use Vercel environment variables for secrets
- Enable Vercel's DDoS protection (automatic)
- Keep dependencies updated (`npm audit`)

### SSL/HTTPS:
- Automatically provided by Vercel
- Certificates auto-renew
- HTTPS enforced on all domains

## Support Resources

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

## Success Checklist

- [ ] Repository pushed to Git
- [ ] Vercel project created and configured
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] All pages load correctly
- [ ] Teams display from Contentful
- [ ] Forms work (test contact form)
- [ ] Mobile responsive (test on phone)
- [ ] Custom domain configured (if applicable)
- [ ] Lighthouse score 90+ (check with Chrome DevTools)

---

🎉 **Congratulations!** Your Hill Country Cricket Association website is now live on Vercel!
