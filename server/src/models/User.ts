import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  profile_photo: string;
  tokens: string;
}

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
    trim: true,
  },
  updated_on: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
