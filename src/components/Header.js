"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  function getPageName() {
    switch (pathname) {
      case "/":
        return (
          <a href="/">
            <img
              src="https://zafatrans.co.id/images/logo-white.png"
              alt="logo zafa trans"
              width="64px"
            />
          </a>
        );
      case "/blog":
        return "Blog";
      case "/bantuan":
        return "Bantuan";

      case "/tracking":
        return "Lokasi Bis Anda";
      case "/akun":
        return "Akun Saya";
      default:
        return "";
    }
  }

  return (
    <nav className="bg-slate-800 fixed top-0 w-full z-40">
      <div className="w-full sm:w-[400px] mx-auto">
        <div className="h-16 flex gap-1 items-center text-white">
          {pathname !== "/" && (
            <button onClick={() => window.history.back()}>
              <img src="https://ik.imagekit.io/nurman/backBtn.svg?updatedAt=1723262141101" />
            </button>
          )}
          <span>{getPageName()}</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
