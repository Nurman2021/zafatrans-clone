"use client";
import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import React, { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [hasVisited, setHasVisitedState] = useState(() => {
    if (typeof window !== "undefined") {
      const fromLocalStorage = window.localStorage.getItem("hasVisited");
      if (fromLocalStorage === null || fromLocalStorage === undefined) {
        return false;
      }
      return fromLocalStorage === "true";
    }
    return false;
  });

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.localStorage.setItem("hasVisited", "false");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleSetHasVisited = () => {
    window.localStorage.setItem("hasVisited", "true");
    setHasVisitedState(true);
  };

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {!hasVisited ? (
          <SplashScreen setHasVisited={handleSetHasVisited} />
        ) : (
          <div className=" mx-auto min-h-screen bg-gray-100 w-full sm:w-[400px] px-3 py-20 gap-5 ">
            {children}
          </div>
        )}
        <BottomNav />
      </body>
    </html>
  );
}
