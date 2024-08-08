import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import { getSession } from "@/lib/getUser";
import React from "react";

const layout = async ({ children }) => {
  //Obtener el payload del user
  const { id_user } = await getSession();

  return (
    <div className="flex flex-col overflow-hidden  ">
      <Navbar id_user={id_user} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
