# Complete Setup Checklist ✅

Follow this checklist in order. Check off each item as you complete it.

---

## Phase 1: MongoDB Setup (10 minutes)

### Choose Your MongoDB Option:

**Option A: MongoDB Atlas (Recommended) ⭐**
- [ ] Go to https://www.mongodb.com/cloud/atlas/register
- [ ] Create account (or sign in with Google)
- [ ] Create free M0 cluster
- [ ] Create database user and SAVE password
- [ ] Add IP address (0.0.0.0/0 for development)
- [ ] Get connection string
- [ ] Replace `<password>` with actual password
- [ ] Add `/fiverr` after `.net` in connection string
- [ ] Update `api/.env` with connection string

📖 **Detailed Guide:** Read `MONGODB_ATLAS_QUICKSTART.md`

**Option B: Local MongoDB**
- [ ] Download MongoDB from mongodb.com
- [ ] Install MongoDB Community Server
- [ ] Install MongoDB Compass (GUI)
- [ ] Start MongoDB service
- [ ] Verify it's running on port 27017
- [ ] Update `api/.env` with: `mongodb://localhost:27017/fiverr`

📖 **Detailed Guide:** Read `MONGODB_SETUP_GUIDE.md`

---

## Phase 2: Environment Configuration (5 minutes)

### Update api/.env file:

- [ ] Open `projectstriverr/api/.env`
- [ ] Set MONGO connection string (from Phase 1)
- [ ] Set JWT_KEY to any random string
  - Example: `JWT_KEY=myRandomSecretKey2024!`
- [ ] Set STRIPE key (optional for now)
  - Can use placeholder: `sk_test_placeholder`
- [ ] Save the file

**Your .env should look like:**
```env
MONGO=mongodb+srv://user:pass@cluster0.xxx.mongodb.net/fiverr?retryWrites=true&w=majority
JWT_KEY=myRandomSecretKey2024
STRIPE=sk_test_placeholder
```

---

## Phase 3: Install Dependencies (5 minutes)

### Backend Dependencies:
- [ ] Open terminal in project root
- [ ] Run: `cd api`
- [ ] Run: `yarn install`
- [ ] Wait for installation to complete
- [ ] Check for any errors

### Frontend Dependencies:
- [ ] Open new terminal in project root
- [ ] Run: `cd client`
- [ ] Run: `yarn install`
- [ ] Wait for installation to complete
- [ ] Check for any errors

---

## Phase 4: Start the Application (2 minutes)

### Start Backend:
- [ ] Terminal 1: `cd api`
- [ ] Run: `yarn start` or `npx nodemon server.js`
- [ ] Wait for: "Backend server is running!"
- [ ] Wait for: "Connected to mongoDB!"
- [ ] Backend running at: http://localhost:8800

### Start Frontend:
- [ ] Terminal 2: `cd client`
- [ ] Run: `yarn dev`
- [ ] Wait for: "Local: http://localhost:5173"
- [ ] Browser should open automatically
- [ ] Frontend running at: http://localhost:5173

**Quick Start Option:**
- [ ] Double-click `start-dev.bat` (Windows)
- [ ] Both servers start in separate windows

---

## Phase 5: Test the Application (5 minutes)

### Basic Testing:
- [ ] Open http://localhost:5173 in browser
- [ ] Homepage loads without errors
- [ ] Click "Register" or "Sign Up"
- [ ] Create a test account
- [ ] Login with test account
- [ ] Browse the interface
- [ ] Check browser console for errors (F12)

### Verify Database:
**If using Atlas:**
- [ ] Go to MongoDB Atlas dashboard
- [ ] Click "Browse Collections"
- [ ] See "fiverr" database
- [ ] See "users" collection with your test user

**If using Local:**
- [ ] Open MongoDB Compass
- [ ] Connect to localhost:27017
- [ ] See "fiverr" database
- [ ] See "users" collection

---

## Phase 6: Customization (Ongoing)

### Make It Your Own:
- [ ] Read `CUSTOMIZATION_CHECKLIST.md`
- [ ] Update `api/package.json` - change author
- [ ] Update `client/package.json` - change author
- [ ] Update `README.md` - add your name and info
- [ ] Plan 2-3 custom features to add
- [ ] Remove original git history
- [ ] Create your own GitHub repository

### Code Quality:
- [ ] Add comments to complex code
- [ ] Remove unnecessary console.logs
- [ ] Test all features thoroughly
- [ ] Fix any bugs you find
- [ ] Improve error messages

---

## Phase 7: Documentation (Before Submission)

### Required Documentation:
- [ ] Update README.md with your information
- [ ] Add screenshots of working application
- [ ] Document your custom features
- [ ] Create setup instructions
- [ ] List technologies used
- [ ] Add your contact information

### Optional but Impressive:
- [ ] Create architecture diagram
- [ ] Record demo video
- [ ] Write API documentation
- [ ] Add deployment instructions
- [ ] Create presentation slides

---

## Troubleshooting Checklist

### If Backend Won't Start:
- [ ] Check if MongoDB is running
- [ ] Verify .env file exists in `api` folder
- [ ] Check MONGO connection string is correct
- [ ] Try: `npx nodemon server.js` instead of `yarn start`
- [ ] Check if port 8800 is already in use

### If Frontend Won't Start:
- [ ] Check if dependencies are installed
- [ ] Try deleting `node_modules` and run `yarn install` again
- [ ] Check if port 5173 is already in use
- [ ] Clear browser cache

### If MongoDB Connection Fails:
- [ ] Verify connection string format
- [ ] Check username and password
- [ ] Verify IP address is whitelisted (Atlas)
- [ ] Check internet connection (Atlas)
- [ ] Verify MongoDB service is running (Local)

### If You See CORS Errors:
- [ ] Make sure both servers are running
- [ ] Check backend is on port 8800
- [ ] Check frontend is on port 5173
- [ ] Verify cors configuration in server.js

---

## Quick Reference

### Important Files:
```
projectstriverr/
├── api/
│   ├── .env                    ← Configure this!
│   ├── server.js               ← Backend entry point
│   └── package.json
├── client/
│   ├── src/                    ← Frontend code
│   └── package.json
├── README.md                   ← Update with your info
├── MONGODB_ATLAS_QUICKSTART.md ← MongoDB setup guide
└── CUSTOMIZATION_CHECKLIST.md  ← Make it your own
```

### Important Commands:
```bash
# Start backend
cd api
yarn start

# Start frontend
cd client
yarn dev

# Install dependencies
yarn install

# Fix nodemon issue
npx nodemon server.js
```

### Important URLs:
- Frontend: http://localhost:5173
- Backend: http://localhost:8800
- MongoDB Atlas: https://cloud.mongodb.com
- Stripe Dashboard: https://dashboard.stripe.com

---

## Success Criteria

You're ready for submission when:
- ✅ Application runs without errors
- ✅ Can register and login users
- ✅ All main features work
- ✅ Database is connected and storing data
- ✅ Added 2-3 custom features
- ✅ Code is clean and commented
- ✅ README is complete with your info
- ✅ Screenshots are added
- ✅ Project is in your own GitHub repo

---

## Time Estimate

- MongoDB Setup: 10 minutes
- Environment Config: 5 minutes
- Install Dependencies: 5 minutes
- Start & Test: 5 minutes
- **Total to get running: ~25 minutes**

- Customization: 2-3 days
- Documentation: 1 day
- Testing & Polish: 1 day
- **Total for submission: 4-5 days**

---

## Need Help?

1. Check the error message
2. Read the relevant guide:
   - MongoDB issues → `MONGODB_SETUP_GUIDE.md`
   - Quick start → `MONGODB_ATLAS_QUICKSTART.md`
   - General setup → `SETUP_GUIDE.md`
   - Customization → `CUSTOMIZATION_CHECKLIST.md`
3. Check troubleshooting section above
4. Google the specific error message

---

## You're All Set! 🎉

Once you complete this checklist, you'll have:
- ✅ A fully working full-stack application
- ✅ MongoDB database connected
- ✅ Both frontend and backend running
- ✅ Ready to customize and make it your own
- ✅ Ready for internship submission

Good luck with your project! 🚀
