import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
  {
    lastName: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const UserModel = model('Users', UserSchema);
