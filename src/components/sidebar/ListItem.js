import React from "react";
import ListItemData from "./ListItemData";
function ListItem() {
  const list = [
    {
      name: "Dashboard",
      icon: "FaBuromobelexperte",
    },
    {
      name: "Categories",
      icon: "FaFolderOpen",
    },
    {
      name: "Time Record",
      icon: "FaRegFileAlt",
    },
    {
      name: "Profile Info",
      icon: "FaUserShield",
    },
    {
      name: "Finance",
      icon: "FaRegCreditCard",
    },
  ];
  const renderList = list.map((itemlist) => {
    return <ListItemData key={itemlist.name} list={itemlist} />;
  });
  return (
    <>
      <ul className="space-y-2 tracking-wide mt-8">{renderList}</ul>
    </>
  );
}

export default ListItem;
