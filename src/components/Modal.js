import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { MdInfoOutline } from "react-icons/md";

function Modal({ onChange, children, actionBar, header }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div
      onChange={onChange}
      className="flex-col space-y-4   opacity-96  min-w-screen h-screen animated fadeIn   fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-200"
    >
      <div className="flex flex-col p-8     bg-white shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MdInfoOutline
              className="w-16 h-16 rounded-2xl p-3 border border-blue-100
            text-blue-400 bg-blue-50"
            />
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">{header}</div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                {children}
              </p>
            </div>
            <div className="flex justify-between m-1"> {actionBar}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
