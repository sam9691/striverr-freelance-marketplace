# Striverr Customization Guide

## Quick Customizations to Make It Unique

### 1. Change Primary Color

The current theme uses green (#1dbf73). Let's change it to your brand color.

**Files to update:**
- `client/src/components/navbar/Navbar.scss`
- `client/src/components/footer/Footer.scss`
- `client/src/pages/home/Home.scss`

**Find and replace:**
```scss
// Old color
#1dbf73

// Replace with your color (example: blue)
#2563eb
```

---

### 2. Add Custom Tagline

Update the hero section with your unique message.

**File:** `client/src/components/featured/Featured.jsx`

**Change:**
```jsx
<h1>
  Find the perfect <span>freelance</span> services for your business
</h1>
```

**To something like:**
```jsx
<h1>
  Strive for Excellence with <span>Top Freelancers</span>
</h1>
```

---

### 3. Update Categories

Make categories relevant to your niche.

**File:** `client/src/data.js`

**Current categories:**
- Design
- Web Development  
- Animation
- Music

**Customize to your needs:**
- Add new categories
- Change descriptions
- Update images

---

### 4. Customize Footer Links

**File:** `client/src/components/footer/Footer.jsx`

Add your own links:
- About Us
- Contact
- Terms of Service
- Privacy Policy
- Your social media

---

### 5. Add Your Logo

**Option A: Text Logo (Current)**
Already done - shows "striverr"

**Option B: Image Logo**

1. Create logo image (PNG with transparent background)
2. Save to `client/public/img/logo.png`
3. Update `Navbar.jsx`:

```jsx
<div className="logo">
  <Link className="link" to="/">
    <img src="/img/logo.png" alt="Striverr" className="logo-img" />
  </Link>
</div>
```

---

### 6. Update Favicon

1. Create favicon (16x16 or 32x32 PNG)
2. Save as `client/public/favicon.ico`
3. Update `index.html`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

---

### 7. Customize Home Page Sections

**File:** `client/src/pages/home/Home.jsx`

**Sections to customize:**
- Features list
- Benefits text
- Call-to-action buttons
- Testimonials (if you add them)

---

### 8. Add Social Media Links

**File:** `client/src/components/footer/Footer.jsx`

Add social icons:
```jsx
<div className="social">
  <a href="https://facebook.com/striverr">
    <img src="/img/facebook.png" alt="Facebook" />
  </a>
  <a href="https://twitter.com/striverr">
    <img src="/img/twitter.png" alt="Twitter" />
  </a>
  <a href="https://instagram.com/striverr">
    <img src="/img/instagram.png" alt="Instagram" />
  </a>
</div>
```

---

### 9. Update Meta Tags for SEO

**File:** `client/index.html`

Add meta tags:
```html
<meta name="description" content="Striverr - Find top freelance services for your business">
<meta name="keywords" content="freelance, services, marketplace, striverr">
<meta property="og:title" content="Striverr - Freelance Services Marketplace">
<meta property="og:description" content="Connect with talented freelancers">
<meta property="og:image" content="/img/og-image.png">
```

---

### 10. Add Custom Features

**Ideas for unique features:**

1. **Featured Sellers Section**
   - Highlight top sellers
   - Add badges/ratings

2. **Category Filters**
   - Advanced search
   - Price ranges
   - Delivery time

3. **Testimonials**
   - Client reviews
   - Success stories

4. **Blog Section**
   - Tips for buyers
   - Seller guides

5. **Live Chat**
   - Customer support
   - Seller-buyer chat

---

## Color Scheme Suggestions

### Professional Blue
- Primary: #2563eb
- Secondary: #1e40af
- Accent: #60a5fa

### Modern Purple
- Primary: #7c3aed
- Secondary: #5b21b6
- Accent: #a78bfa

### Energetic Orange
- Primary: #ea580c
- Secondary: #c2410c
- Accent: #fb923c

### Trustworthy Teal
- Primary: #0d9488
- Secondary: #0f766e
- Accent: #2dd4bf

---

## Typography Customization

**File:** `client/index.html`

**Current fonts:**
- Roboto
- Montserrat

**Alternative font combinations:**

1. **Modern & Clean:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **Professional:**
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

3. **Elegant:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Quick Wins for Uniqueness

1. ✅ Change color scheme (30 min)
2. ✅ Update hero tagline (5 min)
3. ✅ Add custom logo (15 min)
4. ✅ Customize categories (20 min)
5. ✅ Update footer links (10 min)
6. ✅ Add favicon (5 min)
7. ✅ Update meta tags (10 min)

**Total time: ~2 hours for significant customization**

---

## Testing After Customization

After each change:
1. Save files
2. Check browser (auto-reloads with Vite)
3. Test on mobile view (F12 → Toggle device toolbar)
4. Check all pages
5. Verify links work

---

## Before Submission Checklist

- [ ] All "Fiverr" references changed to "Striverr"
- [ ] Custom color scheme applied
- [ ] Logo updated (text or image)
- [ ] Favicon added
- [ ] Meta tags updated
- [ ] Footer links customized
- [ ] Hero section personalized
- [ ] Categories relevant to your niche
- [ ] All pages tested
- [ ] Mobile responsive checked
- [ ] No console errors
- [ ] Screenshots taken

---

Your Striverr platform is ready to be uniquely yours! 🚀
