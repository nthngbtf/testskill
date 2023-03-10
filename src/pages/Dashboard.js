import React from "react";

import NavbarListItem from "../components/Navbar/NavbarListItem";
import TimePage from "./TimePage";

import { useFetchEmployeeQuery } from "../store";
import Skeleton from "../components/Skeleton";

function Dashboard({ userInfo }) {
  const user = userInfo[0];

  const { data, error, isLoading } = useFetchEmployeeQuery(user);
  let content;
  isLoading
    ? (content = <Skeleton times={6} className="h-10 w-full" />)
    : (content = (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <NavbarListItem />
          <TimePage employeeInfo={data} />
        </div>
      ));

  return content;
}

export default Dashboard;
