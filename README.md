# Striverr - Freelance Services Marketplace

A full-stack freelance marketplace application built with the MERN stack (MongoDB, Express.js, React, Node.js). Connect talented freelancers with clients looking for quality services.

![Striverr](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- **User Authentication** - Secure registration and login with JWT
- **Dual User Roles** - Separate interfaces for buyers and sellers
- **Gig Management** - Create, edit, and delete service listings
- **Advanced Search** - Find services by category, price, and keywords
- **Order System** - Complete order processing workflow
- **Real-time Messaging** - Communication between buyers and sellers
- **Review System** - Rate and review completed services
- **Payment Integration** - Stripe payment processing
- **Responsive Design** - Works seamlessly on all devices

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router v6
- TanStack Query (React Query)
- Axios
- Sass

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing
- Cookie-based sessions

### Additional Tools
- Stripe for payments
- Cloudinary for image uploads (optional)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Yarn package manager
- Stripe account (for payment features)

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/striverr-freelance-marketplace.git
cd striverr-freelance-marketplace
```

### 2. Backend Setup

```bash
cd api
yarn install
```

Create a `.env` file in the `api` folder:

```env
MONGO=your_mongodb_connection_string
JWT_KEY=your_secret_jwt_key
STRIPE=your_stripe_secret_key
```

Start the backend server:

```bash
yarn start
```

Backend will run on `http://localhost:8800`

### 3. Frontend Setup

```bash
cd ../client
yarn install
```

Start the frontend development server:

```bash
yarn dev
```

Frontend will run on `http://localhost:5173`

### 4. Seed Sample Data (Optional)

```bash
cd api
node seedData.js
```

This creates sample users and gigs for testing.

**Sample Login:**
- Username: `johndoe`
- Password: `password123`

## 📁 Project Structure

```
striverr/
├── api/                    # Backend
│   ├── controllers/        # Request handlers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── utils/             # Helper functions
│   ├── server.js          # Entry point
│   └── .env               # Environment variables
├── client/                # Frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   └── App.jsx        # Main app component
│   └── index.html
└── README.md
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/:id` - Get user details
- `DELETE /api/users/:id` - Delete user

### Gigs
- `GET /api/gigs` - Get all gigs
- `GET /api/gigs/:id` - Get single gig
- `POST /api/gigs` - Create new gig (seller only)
- `DELETE /api/gigs/:id` - Delete gig

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order

### Messages
- `GET /api/messages/:id` - Get conversation messages
- `POST /api/messages` - Send message

### Reviews
- `GET /api/reviews/:gigId` - Get gig reviews
- `POST /api/reviews` - Add review

## 🎨 Customization

The project uses a modern blue and white color scheme. To customize:

1. **Colors:** Edit SCSS files in `client/src/`
2. **Logo:** Replace `client/public/logo.svg`
3. **Content:** Update text in component files

## 🧪 Testing

### Test User Accounts

After running the seed script:

**Seller Account 1:**
- Username: johndoe
- Email: john@example.com
- Password: password123

**Seller Account 2:**
- Username: janedoe
- Email: jane@example.com
- Password: password123

## 📸 Screenshots

<!-- Add your screenshots here -->

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Your Name**
- GitHub: sam9691(https://github.com/sam9691)
- Email: sam.davv9691@gmail.com

## 🙏 Acknowledgments

- Inspired by modern freelance marketplaces
- Built as a learning project for full-stack development
- Thanks to the MERN stack community

## 📞 Support

For support, email your.email@example.com or open an issue in the repository.

---

⭐ Star this repo if you find it helpful!
