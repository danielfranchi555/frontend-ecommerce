"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/app/schemaForm/schema";

const Page = () => {
  const [exist, setExist] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
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
    }
  };

  return (
    <Card className="w-[350px]">
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
                <p className="text-red-400 text-[12px]">Surname is required</p>
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
                <p className="text-red-400 text-[12px]">Password is required</p>
              )}
            </div>
          </div>
          <CardFooter className="flex flex-col gap-4 py-4 justify-center">
            <Button type="submit">Submit</Button>
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
  );
};

export default Page;
