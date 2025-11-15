// // import React from "react";
// // import logo from "../assets/logo.webp";
// // import {
// //   Menu,
// //   X,
// //   LayoutDashboard,
// //   ShoppingCart,
// //   Settings,
// //   BarChart3,
// //   MessageCircle,
// //   Bell,
// // } from "lucide-react";

// // const Sidebar = () => {
// //   //single menu item generator
// //   return (
// //     <>
// //       {/* Sidebar Container */}
// //       <div className="flex flex-col items-center w-64 h-screen bg-gray-500 shadow-md p-4">
// //         {/* Logo and Title */}
// //         <div className="flex items-center mb-4">
// //           <img src={logo} alt="Logo" className="w-10" />
// //           <h1 className="text-2xl font-bold italic text-black-500 ml-2">
// //             Pomo
// //           </h1>
// //         </div>
// //         {/*Management Section */}
// //         <div className="flex flex-col items-start w-full">
// //           <h3 className="font-semibold text-black-500">Management</h3>
// //           {/* Dashboard Item with Icon */}
// //           <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer w-full">
// //             <LayoutDashboard size={22} className="text-gray-700" />
// //             <span className="text-lg font-medium text-gray-700">Dashboard</span>
// //           </div>
// //           {/* Order Management Item with Icon */}
// //           <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer w-full">
// //             <ShoppingCart size={22} className="text-gray-700" />
// //             <span className="text-lg font-medium text-gray-700">
// //               Order Management
// //             </span>
// //           </div>
// //           {/* Analytics Item with Icon */}
// //           <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer w-full">
// //             <BarChart3 size={22} className="text-gray-700" />
// //             <span className="text-lg font-medium text-gray-700">Analytics</span>
// //           </div>
// //         </div>
// //         {/*Personal Section*/}
// //         <div className="flex flex-col items-start w-full">
// //           <h3 className="font-semibold text-black-500">Personal</h3>
// //           {/* Profile Item with Icon */}
// //           <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer w-full">
// //             <MessageCircle size={22} className="text-gray-700" />
// //             <span className="text-lg font-medium text-gray-700">Message</span>
// //           </div>
// //           <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer w-full">
// //             <Bell size={22} className="text-gray-700" />
// //             <span className="text-lg font-medium text-gray-700">
// //               Notification
// //             </span>
// //           </div>
// //           <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer w-full">
// //             <Settings size={22} className="text-gray-700" />
// //             <span className="text-lg font-medium text-gray-700">Settings</span>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Sidebar;

import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import {
  Menu,
  X,
  LayoutDashboard,
  ShoppingCart,
  Settings,
  BarChart3,
  MessageCircle,
  Bell,
} from "lucide-react";

const Sidebar = ({ setActiveComponent, activeComponent }) => {
  const [open, setOpen] = useState(false);

  const menuItem = (id, Icon, label) => (
    <div
      onClick={() => setActiveComponent(id)}
      className={`flex items-center gap-3 px-3 py-2 mb-2 rounded-md w-full cursor-pointer transition-colors
      ${
        activeComponent === id
          ? "bg-red-600 shadow-inner text-white"
          : "hover:bg-red-500 hover:text-white text-gray-400"
      }`}
    >
      {/* Icon inherits color from parent */}
      <Icon size={22} className="text-inherit" />
      <span className="text-lg font-medium text-inherit">{label}</span>
    </div>
  );

  return (
    <div>
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center bg-gray-500 text-white p-4">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`flex flex-col justify-between w-64 h-screen  p-4 fixed md:static top-0 left-0 transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* ============ TOP SECTION ============ */}
        <div>
          {/* Logo + Title */}
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="w-10 rounded-full" />
            <h1 className="text-2xl font-bold italic text-black ml-2">Pomo</h1>
          </div>

          {/* Management */}
          <div className="flex flex-col items-start w-full">
            <h3 className="font-semibold text-black mb-1">Management</h3>
            {menuItem("dashboard", LayoutDashboard, "Dashboard")}
            {menuItem("orders", ShoppingCart, "Order Management")}
            {menuItem("analytics", BarChart3, "Analytics")}
          </div>

          {/* Personal */}
          <div className="flex flex-col items-start w-full mt-4">
            <h3 className="font-semibold text-black mb-1">Personal</h3>
            {menuItem("messages", MessageCircle, "Message")}
            {menuItem("notifications", Bell, "Notification")}
            {menuItem("settings", Settings, "Settings")}
          </div>
        </div>

        {/* ============ BOTTOM SECTION ============ */}
        <div className="flex items-center gap-3 border-t border-gray-400 pt-4">
          <img src={logo} alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="font-bold text-black text-lg">POMO Store 2</h1>
            <p className="text-sm text-gray-800">amoore1999@hotmail.com</p>
          </div>
        </div>
      </div>

      {/* Overlay (for mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
