"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/app/schemaForm/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { promise } from "zod";

const Page = () => {
  const [exist, setExist] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const resp = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!resp.ok) {
        console.log("error en la peticion");
      }

      if (resp.status === 401) {
        console.log("unauthorized, email already exist");
        setExist("Email already exists");
      } else {
        setExist(""); // Reset the email error if the request is successful
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[350px] md:w-[500px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Email">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-[12px]">Name is required</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="surname">Surname</Label>
                <Input
                  id="surname"
                  name="surname"
                  placeholder="Surname"
                  {...register("surname")}
                />
                {errors.surname && (
                  <p className="text-red-400 text-[12px]">
                    Surname is required
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Email">Email</Label>
                <Input
                  name="email"
                  id="Email"
                  placeholder="Email"
                  {...register("email")}
                />
                {(errors.email || exist) && (
                  <p className="text-red-400 text-[12px]">
                    {errors.email ? "Email is required" : exist}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-400 text-[12px]">
                    Password is required
                  </p>
                )}
              </div>
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
              </Button>{" "}
              <div className="flex items-center gap-2">
                <CardDescription>Already have an account?</CardDescription>
                <Link href={"/auth/login"} className="text-sm">
                  Login
                </Link>
              </div>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
