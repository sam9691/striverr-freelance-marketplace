# MongoDB Atlas - 5 Minute Quick Start

Follow these exact steps to get MongoDB running in 5 minutes!

---

## Step-by-Step Instructions

### 1️⃣ Sign Up (2 minutes)

**Go to:** https://www.mongodb.com/cloud/atlas/register

**Fill in:**
- First Name: Your name
- Last Name: Your last name
- Email: Your email
- Password: Create a strong password

**Or click:** "Sign up with Google" (faster!)

**Click:** "Create your Atlas account"

---

### 2️⃣ Create Free Cluster (1 minute)

You'll see: "Deploy your database"

**Select:**
- ☑️ M0 - FREE
- Cloud Provider: AWS (or any)
- Region: Choose closest to you
  - India: Mumbai (ap-south-1)
  - Asia: Singapore (ap-southeast-1)
  - US: N. Virginia (us-east-1)

**Cluster Name:** FiverrClone (or leave default)

**Click:** "Create Deployment" (green button)

⏳ Wait 3-5 minutes while cluster is created...

---

### 3️⃣ Create Database User (30 seconds)

A popup will appear: "Security Quickstart"

**Username:** `fiverr_admin` (or any name you want)

**Password:** Click "Autogenerate Secure Password"
- 📋 **COPY THIS PASSWORD!** Save it in Notepad!
- Example: `xK9mP2nQ7vL5`

**Click:** "Create Database User"

---

### 4️⃣ Add Your IP Address (30 seconds)

Still in the same popup:

**Click:** "Add My Current IP Address"
- It will auto-detect your IP

**For easier development (optional):**
- Click "Add a Different IP Address"
- IP Address: `0.0.0.0/0`
- Description: "Allow all"
- This allows access from anywhere (development only!)

**Click:** "Finish and Close"

---

### 5️⃣ Get Connection String (1 minute)

**Click:** "Go to Database" (or "Database" in left menu)

You'll see your cluster (Cluster0)

**Click:** "Connect" button (on your cluster)

**Choose:** "Drivers"

**Select:**
- Driver: Node.js
- Version: 5.5 or later

**Copy the connection string:**
```
mongodb+srv://fiverr_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

### 6️⃣ Update Your .env File (1 minute)

**Open:** `projectstriverr/api/.env`

**Replace `<password>` with your actual password:**

```env
# BEFORE (example):
MONGO=mongodb+srv://fiverr_admin:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority

# AFTER (with your password):
MONGO=mongodb+srv://fiverr_admin:xK9mP2nQ7vL5@cluster0.abc123.mongodb.net/fiverr?retryWrites=true&w=majority
```

**Important changes:**
1. Replace `<password>` with your actual password
2. Add `/fiverr` after `.net` (this is your database name)

**Save the file!**

---

### 7️⃣ Test Connection

**Open terminal in your project:**

```bash
cd api
yarn start
```

**You should see:**
```
Backend server is running!
Connected to mongoDB!
```

✅ **Success!** MongoDB is connected!

---

## Your Complete .env File Should Look Like:

```env
# MongoDB Connection String
MONGO=mongodb+srv://fiverr_admin:xK9mP2nQ7vL5@cluster0.abc123.mongodb.net/fiverr?retryWrites=true&w=majority

# JWT Secret Key (create any random string)
JWT_KEY=mySecretKey12345RandomString

# Stripe API Key (get from stripe.com - optional for now)
STRIPE=sk_test_your_stripe_key_here
```

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Forgot to replace `<password>`
```env
# WRONG:
MONGO=mongodb+srv://user:<password>@cluster0...

# RIGHT:
MONGO=mongodb+srv://user:ActualPassword123@cluster0...
```

❌ **Mistake 2:** Didn't add database name
```env
# WRONG:
mongodb+srv://user:pass@cluster0.mongodb.net/?retryWrites=true

# RIGHT:
mongodb+srv://user:pass@cluster0.mongodb.net/fiverr?retryWrites=true
```

❌ **Mistake 3:** Password has special characters
If your password is: `Pass@123#`
You need to encode it: `Pass%40123%23`

**Solution:** Use a simpler password without special characters!

---

## Quick Troubleshooting

### Error: "bad auth: Authentication failed"
**Fix:** 
- Check username and password in connection string
- Make sure you copied the password correctly
- Try regenerating password in Atlas

### Error: "connection timeout"
**Fix:**
- Go to Atlas → Network Access
- Click "Add IP Address"
- Add `0.0.0.0/0` to allow all IPs

### Error: "Could not connect to any servers"
**Fix:**
- Check your internet connection
- Verify connection string is correct
- Make sure cluster is not paused

---

## View Your Data in Atlas

1. Go to Atlas Dashboard
2. Click "Database" in left menu
3. Click "Browse Collections"
4. After you register a user in your app, you'll see:
   - Database: `fiverr`
   - Collections: `users`, `gigs`, `orders`, etc.

---

## What's Next?

Now that MongoDB is set up:

1. ✅ MongoDB Atlas connected
2. ⬜ Add JWT_KEY to .env (any random string)
3. ⬜ Add STRIPE key to .env (optional for now)
4. ⬜ Start backend: `cd api && yarn start`
5. ⬜ Start frontend: `cd client && yarn dev`
6. ⬜ Test the app at http://localhost:5173

---

## Pro Tips

💡 **Tip 1:** Bookmark your Atlas dashboard for easy access

💡 **Tip 2:** MongoDB Atlas has a free tier forever - no credit card needed!

💡 **Tip 3:** You can create multiple databases in the same cluster

💡 **Tip 4:** Use "Browse Collections" to see your data in real-time

💡 **Tip 5:** Atlas automatically backs up your data

---

## Still Stuck?

If you're having issues:
1. Read the error message carefully
2. Check MONGODB_SETUP_GUIDE.md for detailed troubleshooting
3. Verify each step above
4. Make sure .env file is in the `api` folder, not root

You got this! 🚀
