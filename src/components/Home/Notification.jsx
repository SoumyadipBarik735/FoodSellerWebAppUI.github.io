import React from "react";
import Navbar from "../Navbar";

const Notification = () => {
  return (
    <div className="flex-1 overflow-y-hidden overflow-x-hidden bg-white text-gray-900 flex flex-col  mt-3 mb-3 mr-3 shadow-sm rounded-2xl">
      <Navbar />
      <div className="flex-1 overflow-hidden bg-white text-gray-900 flex items-center justify-center mt-3 mb-3 mr-3 shadow-sm rounded-2xl">
        <h1 className="text-2xl font-bold">Notification</h1>
      </div>
    </div>
  );
};

export default Notification;
