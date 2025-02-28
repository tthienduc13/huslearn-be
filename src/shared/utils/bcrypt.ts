import * as bcrypt from 'bcryptjs';
import { compare, hash } from 'bcryptjs';

/**
 * Hashes a given password string using bcrypt.
 *
 * @param password - The plain text password to hash.
 * @returns A Promise that resolves to the hashed password string.
 */
const hashString = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

/**
 * Validates a plain password against a hashed password using bcrypt.
 *
 * @param plainPassword - The plain text password to validate.
 * @param hashedPassword - The hashed password to compare against.
 * @returns A Promise that resolves to a boolean indicating whether the passwords match.
 */
const validateString = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  const isValid = await compare(plainPassword, hashedPassword);
  return isValid;
};

export { hashString, validateString };
