import React from "react";
import * as FontAwesome from "react-icons/fa/";
function ListItemData({ list }) {
  const Icon = FontAwesome[list.icon];
  return (
    <>
      <li>
        <a
          href="test"
          aria-label="dashboard"
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        >
          <Icon className="h-5 w-5 fill-current text-gray-600 group-hover:text-cyan-300" />
          <span className="-mr-1 font-medium group-hover:text-gray-900">
            {list.name}
          </span>
        </a>
      </li>
    </>
  );
}

export default ListItemData;
