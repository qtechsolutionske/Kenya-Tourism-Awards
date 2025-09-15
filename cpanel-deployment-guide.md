# Kenya Tourism Awards - cPanel Deployment Guide

## 📋 Pre-Deployment Checklist

✅ **Build completed successfully**  
✅ **Static files generated in `dist/` folder**  
✅ **Apache configuration (.htaccess) ready**  
✅ **All assets optimized for production**

## 🚀 Step-by-Step Deployment Instructions

### Step 1: Access Your cPanel
1. Log into your hosting provider's cPanel
2. Navigate to **File Manager**
3. Go to your domain's document root (usually `public_html/` or `public_html/yourdomain.com/`)

### Step 2: Upload Files
**Option A: Direct Upload**
1. Select all files from your local `dist/` folder:
   - `index.html`
   - `assets/` folder (CSS and JS files)
   - `Kenya Tourism Awards Gold Logo.svg`
   - `Kenya Tourism Awards Black Logo.svg`
   - `.htaccess` file

2. Upload these files to your domain's root directory
3. Extract if uploaded as a compressed file

**Option B: Zip Upload (Recommended)**
1. Create a zip file of the entire `dist/` folder contents
2. Upload the zip file to cPanel File Manager
3. Extract the contents to your domain root
4. Delete the zip file after extraction

### Step 3: Verify File Structure
Your cPanel file structure should look like this:
```
public_html/
├── index.html
├── .htaccess
├── Kenya Tourism Awards Gold Logo.svg
├── Kenya Tourism Awards Black Logo.svg
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

### Step 4: Configure URL Rewriting
The `.htaccess` file is already configured with:
- **Client-side routing support** (essential for React SPA)
- **Security headers** for protection
- **Caching rules** for better performance
- **Compression** for faster loading

### Step 5: Test Your Deployment
1. Visit your domain URL
2. Test navigation between pages (About, Nominees, etc.)
3. Verify all images and assets load correctly
4. Test responsive design on mobile devices

## 🔧 Troubleshooting Common Issues

### Issue: "Page Not Found" on Direct URL Access
**Solution:** Ensure `.htaccess` file is uploaded and RewriteEngine is enabled

### Issue: Assets Not Loading
**Solutions:**
- Check file paths in cPanel File Manager
- Verify assets folder is in the correct location
- Clear browser cache and try again

### Issue: Logo Images Not Displaying
**Solutions:**
- Confirm SVG files are uploaded to root directory
- Check file permissions (should be 644)
- Verify file names match exactly (case-sensitive)

### Issue: Slow Loading Times
**Solutions:**
- Enable Gzip compression in cPanel
- Optimize images before upload
- Use a CDN if available through your host

## 📊 Performance Optimization

### Recommended cPanel Settings:
1. **Enable Gzip Compression** (if available)
2. **Set up Caching Rules** (already in .htaccess)
3. **Enable HTTP/2** (if supported by host)
4. **Use CloudFlare** (if available) for CDN

### File Size Optimization:
- CSS: ~150KB (minified and compressed)
- JavaScript: ~800KB (includes React and components)
- Images: Optimized for web delivery
- Total site size: ~1.5MB (excellent for performance)

## 🔒 Security Features Included

- **XSS Protection** headers
- **Clickjacking prevention**
- **MIME sniffing protection**
- **Content Security Policy** (basic)
- **Secure referrer policy**

## 📱 Mobile & Browser Compatibility

✅ **Modern browsers** (Chrome, Firefox, Safari, Edge)  
✅ **Mobile responsive** design  
✅ **Touch-friendly** interface  
✅ **Progressive Web App** features  

## 🆘 Support & Maintenance

### Regular Maintenance Tasks:
1. **Monitor site performance** using hosting control panel
2. **Update content** through admin dashboard
3. **Backup files** regularly through cPanel backups
4. **Monitor analytics** for user engagement

### Contact Information:
- **Technical Support:** Available through hosting provider
- **Application Updates:** Re-deploy following these same steps
- **Content Management:** Use the built-in admin panel

## 📈 Next Steps After Deployment

1. **Test all functionality** thoroughly
2. **Set up SSL certificate** (if not already configured)
3. **Configure email forwarding** for contact forms
4. **Add Google Analytics** (if desired)
5. **Submit to search engines** for indexing

---

**Note:** This is a static deployment. For full functionality including user authentication, nominations, and voting, you'll need to add a backend API or consider converting to a PHP-based system that integrates better with cPanel's MySQL databases.