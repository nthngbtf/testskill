import React from "react";
import * as FontAwesome from "react-icons/fa/";

function NavbarButton({ buttonInfo }) {
  const Icon = FontAwesome[buttonInfo.icon];
  return (
    <>
      <button
        aria-label="notification"
        className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
      >
        <Icon className="h-5 w-5 m-auto text-gray-600" />
      </button>
    </>
  );
}

export default NavbarButton;
