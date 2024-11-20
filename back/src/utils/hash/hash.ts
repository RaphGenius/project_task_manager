import bcrypt from "bcrypt";

const SALT = 10;

const comparePassword = async (firstPassword: string, secondPassword: string) =>
  await bcrypt.compare(firstPassword, secondPassword);

const hashPassword = async (password: string) =>
  await bcrypt.hash(password, SALT);

export { comparePassword, hashPassword };
