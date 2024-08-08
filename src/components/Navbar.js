import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 fixed top-0 w-full z-50">
      <div className="w-full sm:w-[400px] mx-auto">
        <div className="h-16 grid items-center p-container">
          <a href="/">
            <img
              src="https://zafatrans.co.id/images/logo-white.png"
              alt="logo zafa trans"
              width="64px"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
