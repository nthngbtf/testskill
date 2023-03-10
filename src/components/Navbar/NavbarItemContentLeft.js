import React from "react";
import { FaBars } from "react-icons/fa";

function NavbarItemContentLeft() {
  return (
    <>
      <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
        Dashboard
      </h5>
      <button className="w-12 h-16 -mr-2 border-r lg:hidden">
        <FaBars className="h-6 w-6 my-auto" />
      </button>
    </>
  );
}

export default NavbarItemContentLeft;
