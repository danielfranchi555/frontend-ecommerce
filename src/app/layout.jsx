import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./redux/StoreProvider";
import { Toaster } from "../Components/ui/toaster";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          {children}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
