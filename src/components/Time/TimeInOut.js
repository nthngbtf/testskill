import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import Skeleton from "../Skeleton";
import { useFetchRecordQuery } from "../../store";

function TimeInOut({ employeeInfo }) {
  const employee = employeeInfo[0];

  const { data, error, isLoading } = useFetchRecordQuery(employee);

  let content;
  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else {
    content = data.map((punchLogs, index) => {
      return (
        <div className="relative flex pb-12" key={punchLogs.id}>
          <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
            <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
          </div>
          <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            <FaFileInvoice />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
              Logs {(index += 1)}
            </h2>
            <p className="font-laonoto leading-relaxed">
              {punchLogs.type === "PunchIn" ? " Punch In" : " Punch Out"}
              <br />
              <b>{punchLogs.time} </b>
            </p>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="mt-8 max-w-sm md:mt-0 md:ml-10 md:w-2/3 md:sticky">
        {content}
      </div>
    </>
  );
}

export default TimeInOut;
