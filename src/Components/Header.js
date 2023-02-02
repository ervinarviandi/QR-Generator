import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";

const Header = () => {
  return (
    <header className="mx-auto  flex justify-between lg:max-w-4xl p-4">
      {/* Kiri */}
      <div className="">
        <h2 className="text-2xl text-yellow-500 font-poppins rounded-lg font-extrabold ">
          {" "}
          <span className="text-white">QR </span>Generator
        </h2>
      </div>
      {/* Kanan */}
      <div className="flex items-center space-x-3">
        <a href="https://github.com/ervinarviandi">
          <BsGithub className="text-white text-2xl" />
        </a>
        <a href="https://ervinarvian.vercel.app">
          <BsGlobe className="text-white text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;
