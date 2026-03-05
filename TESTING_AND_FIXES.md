# Complete Testing & Fixing Guide

## Step 1: Verify Both Servers Are Running

### Check Backend (Terminal 1)
```bash
cd api
yarn start
```

**Should see:**
```
Backend server is running!
Connected to mongoDB!
```

### Check Frontend (Terminal 2)
```bash
cd client
yarn dev
```

**Should see:**
```
VITE v4.x.x ready in XXX ms
Local: http://localhost:5173/
```

---

## Step 2: Check Browser Console for Errors

1. Open http://localhost:5173
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Look for red errors

### Common Errors & Fixes:

**Error: "Network Error" or "ERR_CONNECTION_REFUSED"**
- **Cause:** Backend is not running
- **Fix:** Start backend with `cd api && yarn start`

**Error: "CORS policy"**
- **Cause:** CORS misconfiguration
- **Fix:** Already configured correctly in server.js

**Error: "401 Unauthorized"**
- **Cause:** Not logged in
- **Fix:** Register/Login first

---

## Step 3: Test Core Features

### Test 1: User Registration ✅
1. Click "Register" or "Join"
2. Fill in:
   - Username: testuser
   - Email: test@example.com
   - Password: Test123!
   - Select: "I'm a buyer" or "I'm a seller"
3. Click Submit
4. **Expected:** Redirect to login or homepage
5. **Check MongoDB Compass:** See new user in "users" collection

### Test 2: User Login ✅
1. Click "Sign In" or "Login"
2. Enter credentials from registration
3. Click Login
4. **Expected:** Redirect to homepage, see username in navbar

### Test 3: Browse Gigs ✅
1. Click on any category or "Explore"
2. **Expected:** See list of gigs (may be empty initially)

### Test 4: Create a Gig (Seller Only) ✅
1. Login as seller
2. Go to "Add New Gig" or similar
3. Fill in gig details
4. **Expected:** Gig created and visible

### Test 5: Messaging ✅
1. Login
2. Go to Messages
3. **Expected:** See conversations (may be empty)

---

## Step 4: Common Issues & Solutions

### Issue 1: "No gigs found" or Empty Pages
**Cause:** Database is empty (fresh install)
**Solution:** You need to create sample data

**Quick Fix - Add Sample Gig:**
1. Register as a seller
2. Create a gig with:
   - Title: "I will design a logo"
   - Description: "Professional logo design"
   - Price: $50
   - Category: Graphics & Design

### Issue 2: Images Not Loading
**Cause:** Image URLs in database are placeholders
**Solution:** This is normal for demo. Images use placeholder URLs.

### Issue 3: Search Not Working
**Cause:** No data in database
**Solution:** Add some gigs first

### Issue 4: Payment Not Working
**Cause:** Stripe not configured
**Solution:** 
1. Go to https://stripe.com
2. Create account
3. Get test API key
4. Add to api/.env: `STRIPE=sk_test_your_key`
5. Restart backend

---

## Step 5: Populate Database with Sample Data

Let me create a script to add sample data...
