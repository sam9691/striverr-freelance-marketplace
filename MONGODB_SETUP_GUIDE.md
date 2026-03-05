# MongoDB Setup - Complete Guide

You have two options for setting up MongoDB. I recommend **Option B (MongoDB Atlas)** as it's easier and free.

---

## Option A: Local MongoDB Installation (Windows)

### Step 1: Download MongoDB
1. Go to https://www.mongodb.com/try/download/community
2. Select:
   - Version: Latest (7.0 or higher)
   - Platform: Windows
   - Package: MSI
3. Click "Download"

### Step 2: Install MongoDB
1. Run the downloaded `.msi` file
2. Choose "Complete" installation
3. **Important:** Check "Install MongoDB as a Service"
4. **Important:** Check "Install MongoDB Compass" (GUI tool)
5. Click "Next" and "Install"
6. Wait for installation to complete

### Step 3: Verify Installation
Open Command Prompt or PowerShell and run:
```bash
mongod --version
```

You should see version information.

### Step 4: Start MongoDB Service
MongoDB should start automatically. To verify:

**Option 1: Using Services**
1. Press `Win + R`
2. Type `services.msc` and press Enter
3. Look for "MongoDB Server"
4. Status should be "Running"
5. If not, right-click and select "Start"

**Option 2: Using Command**
```bash
net start MongoDB
```

### Step 5: Test Connection
1. Open MongoDB Compass (installed with MongoDB)
2. Connection string should be: `mongodb://localhost:27017`
3. Click "Connect"
4. You should see a list of databases

### Step 6: Update Your .env File
In `projectstriverr/api/.env`, use:
```env
MONGO=mongodb://localhost:27017/fiverr
```

### Troubleshooting Local Installation
- **MongoDB won't start:** Check Windows Services and start manually
- **Port 27017 in use:** Another program is using the port
- **Connection refused:** MongoDB service is not running

---

## Option B: MongoDB Atlas (Cloud) - RECOMMENDED ⭐

This is easier, free, and doesn't require local installation!

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up with:
   - Email and password, OR
   - Google account, OR
   - GitHub account
3. Verify your email if required

### Step 2: Create a Free Cluster
1. After login, you'll see "Create a deployment"
2. Choose **M0 (Free tier)**:
   - Storage: 512 MB (Free)
   - RAM: Shared
   - Perfect for development!
3. Choose a cloud provider:
   - AWS, Google Cloud, or Azure (doesn't matter)
4. Choose a region:
   - Select closest to your location for better speed
   - Example: Mumbai, Singapore, or US East
5. Cluster Name: Leave default or name it "FiverrClone"
6. Click **"Create Deployment"**
7. Wait 3-5 minutes for cluster creation

### Step 3: Create Database User
You'll see a security quickstart:

1. **Authentication Method:** Username and Password
2. **Username:** Enter a username (e.g., `fiverr_admin`)
3. **Password:** Click "Autogenerate Secure Password" 
   - **IMPORTANT:** Copy this password and save it somewhere safe!
   - Or create your own password (remember it!)
4. Click **"Create Database User"**

### Step 4: Set Up Network Access
1. You'll see "Where would you like to connect from?"
2. Choose **"My Local Environment"**
3. Click **"Add My Current IP Address"**
   - This allows your computer to connect
4. **For development, you can also:**
   - Click "Add IP Address"
   - Enter `0.0.0.0/0` (allows access from anywhere)
   - Description: "Allow all IPs for development"
   - **Note:** Only use this for development, not production!
5. Click **"Finish and Close"**

### Step 5: Get Your Connection String
1. Click **"Go to Database"** or navigate to "Database" in left menu
2. You'll see your cluster (e.g., Cluster0)
3. Click the **"Connect"** button
4. Choose **"Connect your application"**
5. Select:
   - Driver: Node.js
   - Version: 5.5 or later
6. Copy the connection string - it looks like:
   ```
   mongodb+srv://fiverr_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### Step 6: Update Connection String
1. Replace `<password>` with your actual password (from Step 3)
2. Add your database name after `.net/`

**Example:**
```
Before: mongodb+srv://fiverr_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

After: mongodb+srv://fiverr_admin:MySecurePass123@cluster0.xxxxx.mongodb.net/fiverr?retryWrites=true&w=majority
```

### Step 7: Update Your .env File
Open `projectstriverr/api/.env` and update:
```env
MONGO=mongodb+srv://fiverr_admin:YourActualPassword@cluster0.xxxxx.mongodb.net/fiverr?retryWrites=true&w=majority
```

### Step 8: Test the Connection
1. Make sure your .env file is saved
2. Start your backend server:
   ```bash
   cd api
   yarn start
   ```
3. You should see: **"Connected to mongoDB!"**

### Visual Guide for MongoDB Atlas

```
MongoDB Atlas Dashboard
├── Database (left menu)
│   ├── Browse Collections (view your data)
│   ├── Connect (get connection string)
│   └── Monitoring (see usage stats)
├── Network Access (left menu)
│   └── Add IP addresses that can connect
└── Database Access (left menu)
    └── Manage database users
```

### Troubleshooting MongoDB Atlas

**Problem: "MongoServerError: bad auth"**
- Solution: Check your username and password in connection string
- Make sure you replaced `<password>` with actual password
- Password should NOT have `<` or `>` symbols

**Problem: "Connection timeout"**
- Solution: Add your IP address in Network Access
- Or use `0.0.0.0/0` to allow all IPs (development only)

**Problem: "Could not connect to any servers"**
- Solution: Check your internet connection
- Verify the connection string is correct
- Make sure cluster is active (not paused)

**Problem: Password has special characters**
- Solution: URL encode special characters:
  - `@` becomes `%40`
  - `#` becomes `%23`
  - `$` becomes `%24`
  - Or use a simpler password without special characters

---

## Verifying Your Setup

### Test 1: Check Backend Connection
```bash
cd api
yarn start
```

Look for this message:
```
Backend server is running!
Connected to mongoDB!
```

### Test 2: View Your Database
**For Local MongoDB:**
- Open MongoDB Compass
- Connect to `mongodb://localhost:27017`
- You should see "fiverr" database after first use

**For MongoDB Atlas:**
- Go to Atlas dashboard
- Click "Browse Collections"
- You'll see "fiverr" database after first use

### Test 3: Create Test Data
Once your app is running:
1. Register a new user
2. Go back to MongoDB (Compass or Atlas)
3. Refresh and check the "users" collection
4. You should see your registered user!

---

## Quick Comparison

| Feature | Local MongoDB | MongoDB Atlas |
|---------|--------------|---------------|
| Setup Time | 15-20 minutes | 5-10 minutes |
| Installation | Required | Not required |
| Internet | Not needed | Required |
| Free | Yes | Yes (512MB) |
| Backup | Manual | Automatic |
| Scaling | Manual | Easy |
| Best For | Learning | Development & Production |

---

## My Recommendation

**For your internship project, use MongoDB Atlas because:**
1. ✅ No installation needed
2. ✅ Works from anywhere
3. ✅ Easy to share with team/reviewers
4. ✅ Automatic backups
5. ✅ Can deploy your app easily later
6. ✅ Free tier is sufficient

---

## Next Steps After MongoDB Setup

1. ✅ MongoDB is set up
2. ⬜ Configure JWT_KEY in .env
3. ⬜ Configure STRIPE key in .env
4. ⬜ Start backend server
5. ⬜ Start frontend server
6. ⬜ Test the application

---

## Need Help?

If you're stuck:
1. Check the error message carefully
2. Verify your connection string
3. Make sure MongoDB service is running (local) or cluster is active (Atlas)
4. Check Network Access settings (Atlas)
5. Try the troubleshooting steps above

Common error messages and solutions are in the SETUP_GUIDE.md file.

Good luck! 🚀
