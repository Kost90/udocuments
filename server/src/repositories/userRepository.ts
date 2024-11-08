import User from '../models/User';
// import ValidationHelper from '../helpers/validationHelper';
import { IUserWithOptionalFields } from '../types/userTypes';
import UserDTO from '../dto/user';

class UserRepository {
  async save(user: IUserWithOptionalFields): Promise<UserDTO> {
    try {
      const newUser = new User(user);
      const savedUser = await newUser.save();

      return new UserDTO(savedUser);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error in ${this.constructor.name} save method: ${error.message}`);
      }
      throw new Error('An unknown error occurred in UserRepository save method.');
    }
  }

  async findOne(userEmail: string): Promise<UserDTO> {
    try {
      const user = await User.findOne({ email: userEmail }).lean();

      if (!user) {
        throw new Error(`User with email ${userEmail} not found.`);
      }

      return new UserDTO(user);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error in ${this.constructor.name} findOne method: ${error.message}`);
      }
      throw new Error('An unknown error occurred in UserRepository findOne method.');
    }
  }
}
export default UserRepository;
