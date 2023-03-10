import React from "react";
import TimeContent from "../components/Time/TimeContent";
import TimeInOut from "../components/Time/TimeInOut";

function TimePage({ employeeInfo }) {
  return (
    <>
      <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TimeContent employeeInfo={employeeInfo} />
          <TimeInOut employeeInfo={employeeInfo} />
        </div>
      </div>
    </>
  );
}

export default TimePage;
