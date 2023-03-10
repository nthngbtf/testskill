import React, { useState, useEffect } from "react";
import { MdAvTimer, MdOutlinePunchClock } from "react-icons/md";
import Button from "../Button";
import Modal from "../Modal";
import { useAddPunchInMutation } from "../../store";
import { useSelector } from "react-redux";

const getPHDate = () => {
  const phTimezoneOffset = 8 * 60;
  const now = new Date();
  const utcTimestamp = now.getTime() + now.getTimezoneOffset() * 60000;
  const phTimestamp = utcTimestamp + phTimezoneOffset * 60000;
  const phDate = new Date(phTimestamp);
  return phDate.toLocaleString("en-PH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

function TimeContent({ employeeInfo }) {
  const [time, setTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [timeIn, results] = useAddPunchInMutation();
  const [punchStatus, setPunchStatus] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handClose = () => {
    setShowModal(false);
  };
  const handleSubmit = () => {
    setShowModal(false);
    let timeSend = time.toLocaleTimeString();
    let dateSend = getPHDate();

    let dataIn = {
      time: timeSend,
      emp_num: employeeInfo[0].emp_num,
      date: dateSend,
      type: "PunchIn",
    };
    let dataOut = {
      time: timeSend,
      emp_num: employeeInfo[0].emp_num,
      date: dateSend,
      type: "PunchOut",
    };
    if (punchStatus) {
      timeIn(dataIn);
    } else {
      timeIn(dataOut);
    }
  };
  let modalHeader = punchStatus
    ? "Do you want to Punch IN ?"
    : "Do you want to Punch Out ?";
  const actionBar = (
    <>
      <Button onClick={handleSubmit}>Yes</Button>
      <Button onClick={handClose}>No</Button>
    </>
  );

  const handleClick = () => {
    setPunchStatus(true);
    setShowModal(true);
  };

  const handleClickOut = () => {
    setPunchStatus(false);
    setShowModal(true);
  };
  const modal = (
    <Modal onChange={handClose} header={modalHeader} actionBar={actionBar}>
      Here is the important agreement for your to accept
    </Modal>
  );

  return (
    <>
      {showModal && modal}
      <div className="md:col-span-2 lg:col-span-1">
        <div className=" py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
          <div className="align-center">
            <h5 className="text-xl text-gray-600 text-center">
              <MdAvTimer />
              Current Time
            </h5>
            <div className="mt-2 flex justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">
                {time.toLocaleTimeString()}
              </h3>
              <div className="flex items-end gap-1 text-green-500">
                <svg
                  className="w-3"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <span className="block text-center text-gray-500">
              {getPHDate()}
            </span>
            <div className="flex justify-center mt-5">
              <Button onClick={handleClick}>
                <MdOutlinePunchClock />
                Punch In
              </Button>

              <Button onClick={handleClickOut}>
                <MdOutlinePunchClock />
                Punch Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeContent;
