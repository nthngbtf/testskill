import React from "react";

import NavbarButton from "./NavbarButton";

const ButtonList = [
  {
    name: "Notification",
    icon: "FaRegBell",
  },
  {
    name: "Login",
    icon: "FaSignInAlt",
  },
  {
    name: "Logout",
    icon: "FaSignOutAlt",
  },
];

const renderButtonList = ButtonList.map((Buttonitem) => {
  return <NavbarButton key={Buttonitem.name} buttonInfo={Buttonitem} />;
});

function NavbarItemContentRight() {
  return (
    <>
      <div className="flex space-x-4">
        {/* Search Bar */}
        {/* <div hidden className="md:block">
          <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
            <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
              <FaSearch className="w-4 fill-current" />
            </span>
            <input
              type="search"
              name="leadingIcon"
              id="leadingIcon"
              placeholder="Search here"
              className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
            />
          </div>
        </div> */}
        {/* Search Bar */}

        {renderButtonList}
      </div>
    </>
  );
}

export default NavbarItemContentRight;
