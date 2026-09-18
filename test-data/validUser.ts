import 'dotenv/config';

export const validUser = {
  email: process.env.EMAIL ?? '',
  password: process.env.PASSWORD ?? '',
};

export const invalidUser = {
  email: process.env.EMAIL ?? '',
  password: process.env.INVALID_PASSWORD ?? '',
};