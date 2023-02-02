import React from "react";

const Footer = () => {
  return (
    <div className=" mt-[100px] lg:max-w-4xl mx-auto items-center text-center ">
      <p className="text-white text-base font-poppins lg:block hidden ">
        &copy; Copyright 2023 Develope By <span className="font-bold font-poppins text-yellow-500">Ervin Arviandi</span>
      </p>

      <p className="text-white text-base font-poppins lg:hidden block pb-10 ">
        &copy; Copyright 2023 <br /> Develope By <span className="font-bold font-poppins text-yellow-500">Ervin Arviandi</span>
      </p>
    </div>
  );
};

export default Footer;
