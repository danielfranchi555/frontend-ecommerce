"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const clearCookie = async (request) => {
  cookies().delete("access_token");
  redirect("/auth/login");
};
