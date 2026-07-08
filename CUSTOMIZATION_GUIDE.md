# Customization Guide

This guide will help you customize the Prestige Properties landing page for your brand.

## 🎨 Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #0B5ED7;      /* Main brand color */
    --secondary-color: #00A86B;    /* Secondary brand color */
    --accent-color: #D4AF37;       /* Accent/highlight color */
    --dark-color: #1a1a2e;         /* Dark text/background */
    --light-color: #f8f9fa;        /* Light background */
    --text-dark: #2d3748;          /* Main text color */
    --text-light: #718096;         /* Secondary text color */
}
```

## 🏢 Updating Brand Information

### Logo
In `index.html`, find and update:
```html
<a href="#" class="logo">
    <i class="fas fa-home"></i>
    <span>Your Brand Name</span>
</a>
```

### Contact Information
Update in the Contact section and Footer:
- Phone number
- Email address
- Office address
- Working hours

### Social Media Links
Update in the Footer:
```html
<div class="social-links">
    <a href="YOUR_FACEBOOK_URL" aria-label="Facebook">
    <a href="YOUR_TWITTER_URL" aria-label="Twitter">
    <a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">
    <!-- etc -->
</div>
```

## 🏠 Adding/Editing Properties

Each property card follows this structure:
```html
<div class="property-card" data-category="villa luxury">
    <div class="property-image">
        <img src="IMAGE_URL" alt="Property Name" loading="lazy">
        <span class="property-badge">Featured</span>
        <button class="property-favorite">
            <i class="far fa-heart"></i>
        </button>
    </div>
    <div class="property-content">
        <div class="property-price">$1,250,000</div>
        <h3 class="property-title">Property Title</h3>
        <div class="property-location">
            <i class="fas fa-map-marker-alt"></i>
            Location
        </div>
        <div class="property-features">
            <!-- Features here -->
        </div>
        <div class="property-actions">
            <button class="btn btn-details">View Details</button>
            <button class="btn btn-whatsapp">
                <i class="fab fa-whatsapp"></i>
                Contact
            </button>
        </div>
    </div>
</div>
```

### Property Categories
Use `data-category` attribute for filtering:
- `apartment`
- `villa`
- `commercial`
- `luxury`

## 📝 Editing Content

### Hero Section
Update headline, subtitle, and trust badges in the Hero section.

### About Section
Edit company story, mission, and statistics.

### Testimonials
Update customer reviews, names, and photos.

### FAQ
Add or modify questions and answers in the FAQ section.

## 🗺️ Adding Google Maps

Replace the map placeholder with your Google Maps embed:
```html
<div class="map-container">
    <iframe 
        src="YOUR_GOOGLE_MAPS_EMBED_URL" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

## 📧 Form Integration

### Google Sheets Integration
1. Create a Google Sheet
2. Go to Extensions > Apps Script
3. Paste this code:
```javascript
function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.fullName, data.email, data.phone, data.propertyInterest, data.budget, data.message]);
    return ContentService.createTextOutput(JSON.stringify({result: 'success'})).setMimeType(ContentService.MimeType.JSON);
}
```
4. Deploy as web app
5. Update the form submission in `script.js` to send to your web app URL

### Email Notifications
Use a service like Formspree, EmailJS, or your backend API.

## 📱 WhatsApp Integration

Update WhatsApp number in:
1. Floating WhatsApp button
2. Property contact buttons
3. Contact section buttons

```html
<a href="https://wa.me/YOUR_NUMBER" class="whatsapp-float">
```

## 🖼️ Images

### Recommended Image Sizes
- Hero background: 1920x1080px
- Property cards: 800x600px
- About section: 800x600px
- Testimonials: 200x200px (square)

### Image Optimization
- Use WebP format when possible
- Compress images before uploading
- Use lazy loading (already implemented)

## 🎯 SEO Optimization

### Meta Tags
Update in `<head>`:
```html
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="YOUR_IMAGE_URL">
```

### Schema.org Markup
Add structured data for better SEO:
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Your Brand",
    "description": "Your description",
    "url": "YOUR_WEBSITE_URL",
    "telephone": "YOUR_PHONE",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "YOUR_ADDRESS",
        "addressLocality": "YOUR_CITY",
        "addressRegion": "YOUR_STATE",
        "postalCode": "YOUR_ZIP"
    }
}
</script>
```

## ⚡ Performance Tips

1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **Minify CSS/JS**: Use online minifiers before deployment
3. **Enable Caching**: Set proper cache headers on your server
4. **Use CDN**: Host fonts and libraries on CDN
5. **Lazy Load**: Already implemented for images

## 🎨 Design Customization

### Fonts
Change fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

Update in `style.css`:
```css
body {
    font-family: 'YOUR_FONT', sans-serif;
}
```

### Spacing
Adjust padding and margins in `style.css`:
```css
section {
    padding: 6rem 0;  /* Adjust section spacing */
}

.container {
    padding: 0 2rem;  /* Adjust container padding */
}
```

## 📊 Analytics

Add Google Analytics or other tracking:
```html
<!-- Before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🚀 Deployment

1. **Netlify**: Drag and drop the folder
2. **Vercel**: Connect your GitHub repository
3. **GitHub Pages**: Push to gh-pages branch
4. **Traditional Hosting**: Upload via FTP

## 🔧 Troubleshooting

### Images not loading
- Check image paths
- Ensure images are in correct format (JPG, PNG, WebP)
- Verify image URLs are accessible

### Forms not submitting
- Check browser console for errors
- Verify form action URL
- Test backend integration separately

### Responsive issues
- Clear browser cache
- Check media queries in CSS
- Test on different devices/browsers

## 📞 Support

For additional help:
- Email: support@prestigeproperties.com
- Documentation: Visit our website

---

Happy customizing! 🎉