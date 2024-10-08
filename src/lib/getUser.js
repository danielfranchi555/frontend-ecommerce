import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getSession() {
  const token = cookies().get("access_token").value;

  if (!token) {
    console.log("no existe el token");
    localStorage.clear();
  }
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_KEY)
    );
    console.log(payload);

    return payload;
  } catch (error) {
    console.log({ message: error });
  }
}
