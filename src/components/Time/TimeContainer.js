import React from "react";

function TimeContainer() {
  return (
    <>
      <div className="relative flex pb-12">
        <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
        </div>
        <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white"></div>
        <div className="flex-grow pl-4">
          <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
            Logs
          </h2>
          <p className="font-laonoto leading-relaxed">
            Time In <br />
            <b> </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default TimeContainer;
