import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getSession() {
  const session = cookies().get("access_token")?.value;
  if (!session) return null;

  const { payload } = await jwtVerify(
    session,
    new TextEncoder().encode(process.env.JWT_KEY) //jose necesita formatear la clave del token
  );
  console.log(payload);
  return payload;
}
