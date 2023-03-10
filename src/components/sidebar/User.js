import React from "react";
import avatar from "../../assets/img/male.jpg";

function User({ userInfo }) {
  return (
    <>
      <div className="mt-8 text-center">
        <img
          src={avatar}
          alt="Avatar"
          className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
        />
        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
          {`${userInfo[0].firstname} ${userInfo[0].lastname}`}
        </h5>
        <span className="hidden text-gray-400 lg:block">JOB</span>
      </div>
    </>
  );
}

export default User;
