import 'dotenv/config';

export const validUser = {
  user_email: process.env.USER_EMAIL ?? '',
  password: process.env.PASSWORD ?? '',
};