# Quick Start Guide

## First Time Setup

1. **Install dependencies for backend:**
```bash
cd api
yarn install
```

2. **Install dependencies for frontend:**
```bash
cd ../client
yarn install
```

3. **Configure environment variables:**
- Copy `.env.example` to `api/.env`
- Update the values in `api/.env`

4. **Make sure MongoDB is running**

## Running the Project

**Option 1: Run in separate terminals**

Terminal 1 (Backend):
```bash
cd api
yarn start
```

Terminal 2 (Frontend):
```bash
cd client
yarn dev
```

**Option 2: Fix the nodemon issue**

If you get "nodemon is not recognized" error:
```bash
cd api
npx nodemon server.js
```

Or install nodemon globally:
```bash
npm install -g nodemon
```

## Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:8800

## Default Test Accounts

After setting up, you can register new accounts or create test data.

## Troubleshooting

1. **Port already in use:**
   - Kill the process using that port
   - Or change the port in the code

2. **MongoDB connection error:**
   - Make sure MongoDB is running
   - Check your connection string in .env

3. **CORS errors:**
   - Make sure both servers are running
   - Check the cors configuration in server.js

4. **Module not found:**
   - Run `yarn install` in both api and client folders
