import * as bcrypt from 'bcrypt';
import { compare, hash } from 'bcrypt';

const hashString = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return hash(password, salt);
};

const validateString = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await compare(plainPassword, hashedPassword);
};

export { hashString, validateString };
