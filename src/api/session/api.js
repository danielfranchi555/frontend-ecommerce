import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getSession() {
  const token = cookies().get("token");
  if (token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode("your-secret-key")
      );
      return payload;
    } catch (error) {
      return null;
    }
  }
  return null;
}

export default async function handler(req, res) {
  const session = await getSession();
  res.status(200).json({ session });
}
