import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import { UserModel } from '../models/auth';
import { encrypt, verified } from '../utils/bcrypt.handle';

export const authService = {
  registerUser: async ({ email, password, firstName, lastName }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return 'ALREADY_USER';

    const passHashed = await encrypt(password);

    const responseInsert = await UserModel.create({
      email,
      password: passHashed,
      firstName,
      lastName,
    });

    return responseInsert;
  },

  loginUser: async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return 'NOT_FOUND_USER';

    const passwordHash = checkIs.password;

    const isCorrect: boolean = await verified(password, passwordHash);

    if (!isCorrect) return 'PASSWORD_INCORRECT';

    return checkIs;
  },
};
