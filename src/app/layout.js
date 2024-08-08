import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Home | Zafa Trans Clone Website",
  description: "The Best Bus Transportation ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
