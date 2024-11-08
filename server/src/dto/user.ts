import { IUserBase } from '../types/userTypes';

class UserDTO implements IUserBase {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  profile_photo: string | null;
  tokens: string;

  constructor(data: { _id: string } & IUserBase) {
    this.id = data._id as string;
    this.email = data.email;
    this.name = data.name;
    this.password = data.password;
    this.phone = data.phone;
    this.address = data.address;
    this.profile_photo = data.profile_photo || null;
    this.tokens = data.tokens;
  }
}

export default UserDTO;
