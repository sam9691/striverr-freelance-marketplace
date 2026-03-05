# Quick Fix - 3 Steps to Make Everything Work

## Problem
Features not working because database is empty (no users, no gigs).

## Solution
Add sample data to database.

---

## Step 1: Run Seed Script

Open terminal in the `api` folder and run:

```bash
cd api
node seedData.js
```

**Expected output:**
```
Connected to MongoDB!
Cleared existing data
Created 2 users
Created 2 gigs
✅ Database seeded successfully!
```

---

## Step 2: Login with Sample Account

1. Go to http://localhost:5173
2. Click "Sign In"
3. Use these credentials:
   - **Email:** `john@example.com`
   - **Password:** `password123`

---

## Step 3: Test Features

Now everything should work:

✅ Homepage shows gigs
✅ Can browse categories  
✅ Can view gig details
✅ Can search
✅ Can create new gigs (as seller)
✅ Can view messages
✅ Can view orders

---

## That's It!

Your website now has:
- 2 sample users (sellers)
- 2 sample gigs
- All features working

You can now:
- Create more gigs
- Register more users
- Test all functionality
- Show it as a working project

---

## If Seed Script Fails

Make sure:
1. Backend is running (`cd api && yarn start`)
2. MongoDB is connected (check terminal for "Connected to mongoDB!")
3. .env file has correct MONGO connection string

---

## Add More Data

Want more gigs and users?

**Option 1:** Register manually through the website
**Option 2:** Edit `seedData.js` and add more items to the arrays
**Option 3:** Use the website to create content

---

## Quick Reference

**Sample Login:**
- Email: john@example.com
- Password: password123

**Or create your own:**
- Click "Register"
- Fill in details
- Start using!

---

That's all you need! Your project is now a fully working website. 🚀
