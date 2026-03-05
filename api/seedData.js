import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.model.js";
import Gig from "./models/gig.model.js";
import bcrypt from "bcrypt";

dotenv.config();

const sampleUsers = [
  {
    username: "johndoe",
    email: "john@example.com",
    password: "password123",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "USA",
    phone: "+1 234 567 8900",
    desc: "Professional graphic designer with 5 years of experience",
    isSeller: true,
  },
  {
    username: "janedoe",
    email: "jane@example.com",
    password: "password123",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "UK",
    phone: "+44 123 456 7890",
    desc: "Expert web developer specializing in React and Node.js",
    isSeller: true,
  },
];

const sampleGigs = [
  {
    title: "I will create a professional logo design",
    desc: "I will design a unique and professional logo for your business. Includes 3 concepts, unlimited revisions, and source files.",
    totalStars: 5,
    starNumber: 1,
    cat: "Graphics & Design",
    price: 50,
    cover: "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    images: [
      "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    ],
    shortTitle: "Professional Logo Design",
    shortDesc: "Unique logo design with unlimited revisions",
    deliveryTime: 3,
    revisionNumber: 999,
    features: [
      "3 logo concepts",
      "Unlimited revisions",
      "Source files included",
      "Commercial use",
    ],
    sales: 15,
  },
  {
    title: "I will develop a responsive website",
    desc: "I will create a modern, responsive website using React and Node.js. Includes responsive design, fast loading, and SEO optimization.",
    totalStars: 5,
    starNumber: 1,
    cat: "Programming & Tech",
    price: 200,
    cover: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    images: [
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    ],
    shortTitle: "Responsive Website Development",
    shortDesc: "Modern website with React and Node.js",
    deliveryTime: 7,
    revisionNumber: 3,
    features: [
      "Responsive design",
      "Fast loading",
      "SEO optimized",
      "Mobile friendly",
    ],
    sales: 8,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");

    // Clear existing data
    await User.deleteMany({});
    await Gig.deleteMany({});
    console.log("Cleared existing data");

    // Hash passwords and create users
    const hashedUsers = await Promise.all(
      sampleUsers.map(async (user) => {
        const hash = bcrypt.hashSync(user.password, 5);
        return { ...user, password: hash };
      })
    );

    const createdUsers = await User.insertMany(hashedUsers);
    console.log(`Created ${createdUsers.length} users`);

    // Create gigs with user IDs
    const gigsWithUsers = sampleGigs.map((gig, index) => ({
      ...gig,
      userId: createdUsers[index]._id,
    }));

    const createdGigs = await Gig.insertMany(gigsWithUsers);
    console.log(`Created ${createdGigs.length} gigs`);

    console.log("\n✅ Database seeded successfully!");
    console.log("\nSample Login Credentials:");
    console.log("Email: john@example.com | Password: password123");
    console.log("Email: jane@example.com | Password: password123");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
