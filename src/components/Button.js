import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items items-center m-1 py-2 px-4 bg-gray-200 text-gray-600 font-semibold border border-gray-200 rounded-xl hover:bg-gray-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
    >
      {children}
    </button>
  );
}

export default Button;
