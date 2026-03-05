# Project Architecture & Setup Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         YOUR COMPUTER                        │
│                                                              │
│  ┌────────────────────┐         ┌─────────────────────┐    │
│  │   FRONTEND         │         │   BACKEND           │    │
│  │   (React + Vite)   │◄───────►│   (Node.js)         │    │
│  │   Port: 5173       │  HTTP   │   Port: 8800        │    │
│  │                    │         │                     │    │
│  │  - User Interface  │         │  - API Routes       │    │
│  │  - React Router    │         │  - Authentication   │    │
│  │  - Axios Requests  │         │  - Business Logic   │    │
│  └────────────────────┘         └─────────────────────┘    │
│                                           │                  │
│                                           │ Mongoose         │
│                                           ▼                  │
└───────────────────────────────────────────┼──────────────────┘
                                            │
                                            │ Internet
                                            ▼
                              ┌──────────────────────┐
                              │   MONGODB ATLAS      │
                              │   (Cloud Database)   │
                              │                      │
                              │  - Users Collection  │
                              │  - Gigs Collection   │
                              │  - Orders Collection │
                              │  - Messages, etc.    │
                              └──────────────────────┘
```

---

## Data Flow Example: User Registration

```
1. User fills registration form
   │
   ▼
2. Frontend (React)
   - Validates input
   - Sends POST request to backend
   │
   ▼
3. Backend (Express)
   - Receives request at /api/auth/register
   - Validates data
   - Hashes password with bcrypt
   - Creates user object
   │
   ▼
4. MongoDB Atlas
   - Stores user in 'users' collection
   - Returns success/error
   │
   ▼
5. Backend
   - Sends response to frontend
   │
   ▼
6. Frontend
   - Shows success message
   - Redirects to login page
```

---

## File Structure Explained

```
projectstriverr/
│
├── api/                          # BACKEND
│   ├── controllers/              # Handle business logic
│   │   ├── auth.controller.js    # Login, register, logout
│   │   ├── user.controller.js    # User operations
│   │   ├── gig.controller.js     # Gig CRUD operations
│   │   └── ...
│   │
│   ├── models/                   # Database schemas
│   │   ├── User.js               # User schema
│   │   ├── Gig.js                # Gig schema
│   │   ├── Order.js              # Order schema
│   │   └── ...
│   │
│   ├── routes/                   # API endpoints
│   │   ├── auth.route.js         # /api/auth/*
│   │   ├── user.route.js         # /api/users/*
│   │   ├── gig.route.js          # /api/gigs/*
│   │   └── ...
│   │
│   ├── middleware/               # Custom middleware
│   │   └── jwt.js                # Verify JWT tokens
│   │
│   ├── utils/                    # Helper functions
│   │
│   ├── .env                      # ⚠️ IMPORTANT: Config file
│   ├── server.js                 # Entry point
│   └── package.json              # Dependencies
│
├── client/                       # FRONTEND
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   └── ...
│   │   │
│   │   ├── pages/                # Page components
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── gigs/
│   │   │   └── ...
│   │   │
│   │   ├── utils/                # Helper functions
│   │   │   └── request.js        # Axios configuration
│   │   │
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # Entry point
│   │
│   ├── public/                   # Static files
│   ├── index.html                # HTML template
│   ├── vite.config.js            # Vite configuration
│   └── package.json              # Dependencies
│
└── Documentation files (guides you're reading now)
```

---

## Technology Stack Breakdown

### Frontend Technologies
```
React 18
├── React Router v6        → Navigation between pages
├── TanStack Query         → Data fetching & caching
├── Axios                  → HTTP requests to backend
├── Sass                   → Styling
└── Vite                   → Build tool & dev server
```

### Backend Technologies
```
Node.js + Express
├── Mongoose               → MongoDB object modeling
├── JWT                    → Authentication tokens
├── bcrypt                 → Password hashing
├── cookie-parser          → Parse cookies
├── cors                   → Cross-origin requests
├── dotenv                 → Environment variables
└── Stripe                 → Payment processing
```

### Database
```
MongoDB
├── Users Collection       → User accounts
├── Gigs Collection        → Service listings
├── Orders Collection      → Purchase records
├── Conversations          → Chat threads
├── Messages               → Chat messages
└── Reviews                → Ratings & feedback
```

---

## Environment Setup Flow

```
Step 1: MongoDB Setup
┌─────────────────────────────────────┐
│ Choose: Atlas (Cloud) or Local     │
│ ↓                                   │
│ Create database                     │
│ ↓                                   │
│ Get connection string               │
│ ↓                                   │
│ Add to api/.env                     │
└─────────────────────────────────────┘

Step 2: Install Dependencies
┌─────────────────────────────────────┐
│ cd api                              │
│ yarn install                        │
│ ↓                                   │
│ cd ../client                        │
│ yarn install                        │
└─────────────────────────────────────┘

Step 3: Configure .env
┌─────────────────────────────────────┐
│ MONGO=connection_string             │
│ JWT_KEY=random_secret               │
│ STRIPE=stripe_key                   │
└─────────────────────────────────────┘

Step 4: Start Servers
┌─────────────────────────────────────┐
│ Terminal 1: cd api && yarn start    │
│ Terminal 2: cd client && yarn dev   │
└─────────────────────────────────────┘

Step 5: Test
┌─────────────────────────────────────┐
│ Open: http://localhost:5173         │
│ Register → Login → Test features    │
└─────────────────────────────────────┘
```

---

## API Endpoints Overview

```
Authentication
POST   /api/auth/register    → Create new account
POST   /api/auth/login       → Login user
POST   /api/auth/logout      → Logout user

Users
GET    /api/users/:id        → Get user profile
DELETE /api/users/:id        → Delete user

Gigs (Services)
GET    /api/gigs             → Get all gigs
GET    /api/gigs/:id         → Get single gig
POST   /api/gigs             → Create new gig
DELETE /api/gigs/:id         → Delete gig

Orders
GET    /api/orders           → Get user orders
POST   /api/orders           → Create order
PUT    /api/orders/:id       → Update order

Conversations
GET    /api/conversations    → Get user conversations
POST   /api/conversations    → Create conversation
GET    /api/conversations/:id → Get single conversation

Messages
GET    /api/messages/:id     → Get conversation messages
POST   /api/messages         → Send message

Reviews
GET    /api/reviews/:gigId   → Get gig reviews
POST   /api/reviews          → Add review
```

---

## Authentication Flow

```
Registration:
User → Frontend → Backend → Hash Password → MongoDB → Success

Login:
User → Frontend → Backend → Verify Password → Generate JWT → 
Set Cookie → Frontend → Store Token → Authenticated

Protected Routes:
Request → Check JWT Cookie → Verify Token → Allow/Deny Access
```

---

## Development Workflow

```
1. Start MongoDB
   └─ Atlas: Always running (cloud)
   └─ Local: Start service

2. Start Backend (Terminal 1)
   cd api
   yarn start
   └─ Runs on: http://localhost:8800

3. Start Frontend (Terminal 2)
   cd client
   yarn dev
   └─ Runs on: http://localhost:5173

4. Make Changes
   └─ Frontend: Auto-reloads (Vite HMR)
   └─ Backend: Auto-restarts (nodemon)

5. Test in Browser
   └─ Open: http://localhost:5173
   └─ Check console for errors (F12)

6. Check Database
   └─ Atlas: Browse Collections
   └─ Local: MongoDB Compass
```

---

## Common Ports

```
5173  → Frontend (Vite dev server)
8800  → Backend (Express API)
27017 → MongoDB (if running locally)
```

---

## Key Concepts

### JWT (JSON Web Token)
- Used for authentication
- Stored in cookies
- Sent with each request
- Verified by middleware

### CORS (Cross-Origin Resource Sharing)
- Allows frontend (5173) to talk to backend (8800)
- Configured in server.js
- Enables credentials (cookies)

### Mongoose
- ODM (Object Data Modeling) for MongoDB
- Defines schemas for data structure
- Provides validation
- Simplifies database operations

### React Query (TanStack Query)
- Manages server state
- Handles caching
- Auto-refetches data
- Simplifies loading states

---

## Security Features

```
Password Security
└─ bcrypt hashing (10 rounds)

Authentication
└─ JWT tokens in HTTP-only cookies

Authorization
└─ Middleware checks user permissions

Input Validation
└─ Server-side validation

CORS
└─ Restricted to specific origin
```

---

## Next Steps

1. ✅ Understand the architecture
2. ⬜ Set up MongoDB (MONGODB_ATLAS_QUICKSTART.md)
3. ⬜ Configure environment (api/.env)
4. ⬜ Install dependencies
5. ⬜ Start both servers
6. ⬜ Test the application
7. ⬜ Customize and add features

---

## Quick Reference

**Start Backend:**
```bash
cd api
yarn start
```

**Start Frontend:**
```bash
cd client
yarn dev
```

**Check Backend:**
http://localhost:8800

**Check Frontend:**
http://localhost:5173

**Check Database:**
- Atlas: https://cloud.mongodb.com
- Local: MongoDB Compass

---

This architecture provides a solid foundation for a full-stack application. Understanding these components will help you customize and extend the project for your internship submission! 🚀
