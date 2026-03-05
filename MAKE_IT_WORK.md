# Make Everything Work - Complete Guide

## 🎯 Goal
Get all features working so your project looks like a complete, functional website.

---

## Step 1: Ensure Both Servers Are Running

### Terminal 1 - Backend
```bash
cd api
yarn start
```
**Must see:** "Backend server is running!" and "Connected to mongoDB!"

### Terminal 2 - Frontend
```bash
cd client
yarn dev
```
**Must see:** "Local: http://localhost:5173"

---

## Step 2: Add Sample Data to Database

This will populate your database with sample users and gigs so features work!

### Run the seed script:
```bash
cd api
node seedData.js
```

**You should see:**
```
Connected to MongoDB!
Cleared existing data
Created 2 users
Created 2 gigs
✅ Database seeded successfully!

Sample Login Credentials:
Email: john@example.com | Password: password123
Email: jane@example.com | Password: password123
```

---

## Step 3: Test All Features

### ✅ Test 1: Homepage
1. Open http://localhost:5173
2. **Should see:**
   - Navigation bar
   - Hero section
   - Featured categories
   - Popular services

### ✅ Test 2: Login
1. Click "Sign In"
2. Use credentials:
   - Email: `john@example.com`
   - Password: `password123`
3. **Should see:**
   - Redirect to homepage
   - Username in navbar
   - "Logout" option

### ✅ Test 3: Browse Gigs
1. Click "Graphics & Design" or any category
2. **Should see:**
   - List of gigs with images
   - Prices
   - Ratings
   - Seller info

### ✅ Test 4: View Gig Details
1. Click on any gig
2. **Should see:**
   - Full description
   - Images
   - Pricing packages
   - Seller profile
   - Reviews section
   - "Continue" or "Order" button

### ✅ Test 5: Search
1. Use search bar
2. Type "logo" or "website"
3. **Should see:**
   - Filtered results

### ✅ Test 6: Create Gig (Seller)
1. Login as seller (john@example.com)
2. Click "Become a Seller" or "Add Gig"
3. Fill in form:
   - Title: "I will design your business card"
   - Category: Graphics & Design
   - Description: "Professional business card design"
   - Price: $30
   - Delivery time: 2 days
4. Submit
5. **Should see:**
   - Success message
   - New gig in your gigs list

### ✅ Test 7: Messages
1. Login
2. Go to "Messages"
3. **Should see:**
   - Message interface
   - (May be empty initially - that's ok)

### ✅ Test 8: Orders
1. Login
2. Go to "Orders"
3. **Should see:**
   - Orders list
   - (May be empty initially - that's ok)

---

## Step 4: Fix Common Issues

### Issue: "Cannot read properties of null"
**Fix:** Make sure you're logged in

### Issue: Images not loading
**Fix:** This is normal - using placeholder images from Pexels

### Issue: No gigs showing
**Fix:** Run the seed script (Step 2)

### Issue: Search returns nothing
**Fix:** Make sure gigs exist in database

### Issue: Can't create order
**Fix:** 
1. Make sure Stripe is configured in .env
2. Or comment out Stripe code temporarily

---

## Step 5: Verify Database

### Open MongoDB Compass
1. Connect to: `mongodb://localhost:27017`
2. Select database: `fiverr`
3. **Should see collections with data:**
   - users (2 users)
   - gigs (2 gigs)
   - orders (empty initially)
   - messages (empty initially)
   - conversations (empty initially)
   - reviews (empty initially)

---

## Step 6: Add More Sample Data (Optional)

### Create More Users
1. Click "Register"
2. Create accounts:
   - Buyers
   - Sellers
3. This makes the site look more active

### Create More Gigs
1. Login as different sellers
2. Create gigs in different categories:
   - Writing & Translation
   - Video & Animation
   - Music & Audio
   - Programming & Tech
   - Business
   - Lifestyle

---

## Step 7: Test User Flows

### Flow 1: Buyer Journey
1. Register as buyer
2. Browse gigs
3. View gig details
4. (Order - requires Stripe)
5. Check orders
6. Send message to seller

### Flow 2: Seller Journey
1. Register as seller
2. Create gig
3. View my gigs
4. Check orders
5. Respond to messages

---

## Step 8: Make It Look Professional

### Add Profile Pictures
1. Login
2. Go to profile settings
3. Add profile image URL from:
   - https://i.pravatar.cc/150?img=1
   - Or any image URL

### Add Gig Images
When creating gigs, use these free image sources:
- Pexels: https://www.pexels.com
- Unsplash: https://unsplash.com
- Format: `https://images.pexels.com/photos/[id]/[filename].jpeg`

---

## Checklist: Is Everything Working?

- [ ] Backend running without errors
- [ ] Frontend running without errors
- [ ] Can register new user
- [ ] Can login
- [ ] Can see gigs on homepage
- [ ] Can browse gigs by category
- [ ] Can view gig details
- [ ] Can search gigs
- [ ] Can create gig (as seller)
- [ ] Can view messages page
- [ ] Can view orders page
- [ ] Can logout
- [ ] MongoDB has data
- [ ] No errors in browser console

---

## If Something Still Doesn't Work

### Check Browser Console (F12)
Look for errors and note them

### Check Backend Terminal
Look for error messages

### Check MongoDB Compass
Verify data exists

### Common Fixes:
1. Restart both servers
2. Clear browser cache (Ctrl+Shift+Delete)
3. Re-run seed script
4. Check .env file is correct

---

## Next Steps After Everything Works

1. ✅ Test all features
2. ✅ Add more sample data
3. ✅ Customize styling
4. ✅ Add your own features
5. ✅ Take screenshots
6. ✅ Prepare for submission

---

## Sample Data Credentials

**User 1 (Seller):**
- Email: john@example.com
- Password: password123

**User 2 (Seller):**
- Email: jane@example.com
- Password: password123

**Create your own:**
- Register new accounts for testing

---

## Pro Tips

1. **Keep both terminals visible** - Watch for errors
2. **Use MongoDB Compass** - See data in real-time
3. **Test in incognito mode** - Avoid cache issues
4. **Create multiple accounts** - Test different user types
5. **Add variety** - Different categories, prices, descriptions

---

Your project should now look like a fully functional freelance marketplace! 🎉
