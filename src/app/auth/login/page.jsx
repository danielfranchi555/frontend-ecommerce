"use client";

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
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "@/app/schemaForm/schema";
import React, { useState } from "react";

const page = () => {
  const [exist, setExist] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });
  const onSubmit = async (data) => {
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
        setExist(""); // Reset the email error if the request is successful
        router.push("/");
        console.log("login correct");
      }
    } catch (error) {
      console.log(error);
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
            <Button type="submit">Submit</Button>
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

// "use client";
// import React from "react";
// import { useForm } from "react-hook-form";

// const page = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         action=""
//         className="flex flex-col gap-4"
//       >
//         <h3>Login</h3>
//         <input
//           className="px-2 py-2"
//           type="email"
//           name="email"
//           {...register("email")}
//           id=""
//           placeholder="ingresar mail"
//         />
//         <input
//           className="px-2 py-2"
//           type="password"
//           name="password"
//           {...register("password")}
//           id=""
//           placeholder="ingresar passwords"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default page;
