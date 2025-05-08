
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';
import dotenv from 'dotenv';

dotenv.config();

async function createAdmin(username, password) {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({
      username,
      password: hashedPassword
    });
    
    await admin.save();
    console.log('Admin created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
}

// Usage: node scripts/createAdmin.js <username> <password>
const [,, username, password] = process.argv;
if (!username || !password) {
  console.error('Please provide username and password');
  process.exit(1);
}

createAdmin(username, password);
