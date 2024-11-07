import { Document } from 'mongoose';

export interface IUserBase {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  profile_photo: string | null;
  tokens: string;
}

export interface IUser extends IUserBase, Document {
  _id: string;
}

export type IUserWithOptionalFields = Omit<IUserBase, 'address' | 'profile_photo'> & {
  address?: string;
  profile_photo?: string | null;
};