"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "@/app/schemaForm/schema";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const page = () => {
  const [exist, setExist] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const resp = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!resp.ok) {
        console.log("error en la peticion");
      }

      if (resp.status === 401) {
        console.log("unauthorized, email no exist");
        setExist("Email o contraseña incorrectos");
      } else {
        router.push("/");
        router.refresh();
        setExist(""); // Reset the email error if the request is successful
        console.log("login correct");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome back!</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Email">Email</Label>
                <Input
                  id="Email"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="text-xs text-red-400">
                    {errors.email?.message}
                  </p>
                )}{" "}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  name="Password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password?.message && (
                  <p className="text-xs text-red-400">
                    {errors.password?.message}
                  </p>
                )}{" "}
              </div>
            </div>
            <p className="text-xs text-red-400 text-center">
              {exist ? <p>Email or password incorrect</p> : ""}
            </p>
          </div>
          <CardFooter className="flex flex-col gap-4 py-4 justify-center">
            <Button type="submit">
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Submit"
              )}
            </Button>
            <div className="flex items-center gap-2">
              <CardDescription>Dont have an account?</CardDescription>
              <Link href={"/auth/register"} className="text-sm">
                Signup
              </Link>
            </div>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};
export default page;
