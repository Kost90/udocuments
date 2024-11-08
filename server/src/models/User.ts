import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/userTypes';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Required !'],
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Required !'],
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please provide a valid email address'],
    index: true,
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Required !'],
  },
  phone: {
    type: String,
    trim: true,
    required: [true, 'Required !'],
  },
  address: {
    type: String,
    trim: true,
    maxLength: 250,
  },
  profile_photo: {
    type: String,
    trim: true,
  },
  tokens: {
    type: String,
  },
  created_on: {
    type: String,
    default: Date.now,
  },
  updated_on: {
    type: String,
    default: Date.now,
  },
});

userSchema.index({ email: 1 });

const User = mongoose.model<IUser>('User', userSchema);

export default User;
