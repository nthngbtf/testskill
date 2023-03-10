import React from "react";
import NavbarItemContentLeft from "./NavbarItemContentLeft";
import NavbarItemContentRight from "./NavbarItemContentRight";

function NavbarListItem() {
  return (
    <>
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
          <NavbarItemContentLeft />
          <NavbarItemContentRight />
        </div>
      </div>
    </>
  );
}

export default NavbarListItem;
