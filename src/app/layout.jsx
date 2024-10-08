import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./redux/StoreProvider";
import { Toaster } from "../Components/ui/toaster";
import { CartProvider } from "./Context/CartProvider";
import ProviderApi from "./redux/ProviderApi/ProviderApi";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ProviderApi>
          <StoreProvider>
            <CartProvider>
              <main>{children}</main>
              <Toaster />
            </CartProvider>
          </StoreProvider>
        </ProviderApi>
      </body>
    </html>
  );
}
