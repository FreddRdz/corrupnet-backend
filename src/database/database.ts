import 'dotenv/config';
import mongoose from 'mongoose';

const URI: string = 'mongodb://localhost:27017/corrupnet';

export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    console.log(error);
  }
};
