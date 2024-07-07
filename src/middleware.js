import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("access_token")?.value;

  if (token === undefined) {
    return NextResponse.redirect(new URL("auth/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_KEY) //jose necesita formatear la clave del token
    );
    console.log(payload);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("auth/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/cart"],
};
