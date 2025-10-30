// Tiny password helper: hash and verify using bcryptjs
import bcrypt from "bcryptjs";

// "Cost factor": higher = slower = more secure. 10–12 is a good starting point.
const ROUNDS = 10;

export async function hashPassword(plain) {
  return await bcrypt.hash(plain, ROUNDS);
}

export async function verifyPassword(plain, hashed) {
  return await bcrypt.compare(plain, hashed);
}
