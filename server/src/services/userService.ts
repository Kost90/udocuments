import ValidationHelper from '../helpers/validationHelper';
import UserRepository from '../repositories/userRepository';
import { IUserWithOptionalFields } from '../types/userTypes';
import UserDTO from '../dto/user';

// TODO:Create injection class
const userRepository = new UserRepository();

class UserService {
  async save(user: IUserWithOptionalFields): Promise<Omit<UserDTO, 'email' | 'password'>> {
    try {
      ValidationHelper.checkForNullorUndefined(user, `${this.constructor.name}: user`);

      const savedUser = await userRepository.save(user);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { email, password, ...newUser } = savedUser;

      return newUser;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error in ${this.constructor.name} save method: ${error.message}`);
      }
      throw new Error('An unknown error occurred in UserRepository save method.');
    }
  }

  async findOne(userEmail: string): Promise<UserDTO> {
    try {
      ValidationHelper.checkForNullorUndefined(userEmail, `${this.constructor.name}: userEmail`);

      const user = await userRepository.findOne(userEmail);

      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error in ${this.constructor.name} save method: ${error.message}`);
      }
      throw new Error('An unknown error occurred in UserService findOne method.');
    }
  }
}

export default UserService;
