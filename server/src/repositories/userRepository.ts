import User from '../models/User';
import ValidationHelper from '../helpers/validationHelper';
import { IUserWithOptionalFields } from '../types/userTypes';
import UserDTO from '../dto/user';

class UserRepository {
  async save(user: IUserWithOptionalFields): Promise<UserDTO> {
    try {
      const newUser = new User(user);
      const savedUser = await newUser.save();

      const response = new UserDTO(savedUser);

      ValidationHelper.checkForNullorUndefined(response, `${this.constructor.name}: response`);

      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error in ${this.constructor.name} save method: ${error.message}`);
      }
      throw new Error('An unknown error occurred in UserRepository save method.');
    }
  }
}
export default UserRepository;
