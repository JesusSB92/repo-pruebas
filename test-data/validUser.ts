import 'dotenv/config';

export const validUser = {
  email: process.env.EMAIL ?? '',
  password: process.env.PASSWORD ?? '',
};