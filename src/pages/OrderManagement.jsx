import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserIcon from "../assets/UserIcon.jpg";
import Chicken from "../assets/Chicken.jpg";
import Map from "../assets/Map.jpg";
import { ArrowLeft, MapPin, Phone, Truck } from "lucide-react";
import StarIcon from "@mui/icons-material/Star";

const OrderManagement = () => {
  return (
    <div className="flex bg-gray-100 h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 bg-white text-gray-900 flex flex-col m-3 shadow-md rounded-2xl overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex flex-col flex-1 px-6 py-4 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <p className="font-bold text-xl flex items-center gap-2">
              <button
                onClick={() => window.history.back()}
                className="text-black hover:text-gray-600 hover:bg-gray-100 rounded-full"
              >
                <ArrowLeft className="w-7 h-7" />
              </button>
              Order ID #576
            </p>
            <p className="px-3 py-1 text-sm text-blue-600 border border-blue-300 rounded-xl font-medium">
              On Delivery
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-1 gap-5 overflow-hidden">
            {/* Left Section */}
            <div className="flex flex-col w-1/4 gap-4">
              {/* User Info */}
              <div className="border border-gray-100 rounded-xl shadow-sm bg-white p-4">
                <div className="flex items-center mb-3 border-b border-gray-200 pb-2">
                  <img
                    src={UserIcon}
                    alt="User"
                    className="h-16 w-14 rounded-md"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">User Name</p>
                    <p className="text-sm text-gray-500">Customer</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 leading-snug">
                  <p className="font-semibold text-gray-800 mb-2">
                    Note Order:
                  </p>
                  <p className="mb-2">
                    Please ensure all food items are labeled for dietary
                    preferences.
                  </p>

                  <p className="mb-2">Include napkins and utensils if possible.</p>
                  <p className="mb-1">Toppings: Extra cheese, fresh basil.</p>
                </div>
              </div>

              {/* Order Progress */}
              <div className="border border-gray-100 rounded-xl shadow-sm bg-white p-5 flex-1 overflow-auto">
                <p className="font-semibold text-lg mb-3">Order Progress</p>
                <Order />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col w-3/4 gap-4">
              {/* Order List */}
              <div className="border border-gray-100 rounded-xl shadow-sm bg-white p-2 px-3 flex-1 flex flex-col">
                <p className="font-bold text-lg mb-1">Order List</p>

                {/* Scrollable Table */}
                <div className="flex-1 overflow-y-auto rounded-md p-3 max-h-[200px] ">
                  <div className="grid grid-cols-[2fr_1fr_1fr_1fr] font-semibold text-sm border-b border-gray-300 pb-2 mb-2">
                    <p>Items</p>
                    <p className="text-center">Quantity</p>
                    <p className="text-center">Price</p>
                    <p className="text-center">Total</p>
                  </div>
                  <Items />
                </div>

                {/* Total Bar */}
                <p className="font-bold text-right text-gray-800 py-2 mt-2 border-t border-gray-200">
                  Total Bills: $132.02
                </p>
              </div>

              {/* Bottom Section (Map + Driver) */}
              <div className="border border-gray-100 rounded-xl shadow-sm bg-white flex gap-16 p-3 h-[250px] items-center justify-between">
                {/* Map */}
                <div className="relative w-2/3 h-full flex items-center justify-center">
                  <img
                    src={Map}
                    alt="Map"
                    className="w-[500px] h-[200px] object-cover rounded-xl"
                  />
                  <MapPin className="absolute text-red-600 w-8 h-8" />
                </div>

                {/* Driver Info */}
                <div className="flex flex-col w-1/3 items-center justify-center">
                  <Driver />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;

/* ------------------ ITEMS COMPONENT ------------------ */
const Items = () => {
  const itemsData = [
    {
      logo: Chicken,
      title1: "Roast Chicken",
      quantity: "x2",
      price: "$22.49",
      totalprice: "$44.98",
    },
    {
      logo: Chicken,
      title1: "Fried Chicken",
      quantity: "x1",
      price: "$18.99",
      totalprice: "$18.99",
    },
    {
      logo: Chicken,
      title1: "Grilled Sandwich",
      quantity: "x3",
      price: "$8.99",
      totalprice: "$26.97",
    },
        {
      logo: Chicken,
      title1: "Roast Chicken",
      quantity: "x2",
      price: "$22.49",
      totalprice: "$44.98",
    },
    {
      logo: Chicken,
      title1: "Fried Chicken",
      quantity: "x1",
      price: "$18.99",
      totalprice: "$18.99",
    },
    {
      logo: Chicken,
      title1: "Grilled Sandwich",
      quantity: "x3",
      price: "$8.99",
      totalprice: "$26.97",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {itemsData.map((item, index) => (
        <ItemsList key={index} {...item} />
      ))}
    </div>
  );
};

/* ------------------ ITEMS LIST COMPONENT ------------------ */
const ItemsList = ({ logo, title1, quantity, price, totalprice }) => (
  <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center text-sm border-b border-gray-200 pb-2">
    <div className="flex items-center gap-3">
      <img src={logo} alt="item" className="h-10 w-10 rounded-md" />
      <div>
        <p className="font-medium">{title1}</p>
        <div className="flex items-center text-xs text-yellow-500">
          {[...Array(4)].map((_, i) => (
            <StarIcon key={i} className="w-3 h-3 fill-yellow-400" />
          ))}
          <StarIcon className="text-gray-300 w-3 h-3" />
        </div>
      </div>
    </div>
    <p className="text-center">{quantity}</p>
    <p className="text-center">{price}</p>
    <p className="text-center font-semibold">{totalprice}</p>
  </div>
);

/* ------------------ ORDER PROGRESS ------------------ */
const Order = () => {
  const orderSteps = [
    { num: 1, title1: "Order Created", title2: "Thu, 21 Jul 2020, 11:49 AM" },
    { num: 2, title1: "Payment Success", title2: "Fri, 22 Jul 2020, 10:44 AM" },
    { num: 3, title1: "On Delivery", title2: "Sat, 23 Jul 2020, 01:24 PM" },
    { num: 4, title1: "Order Delivered", title2: "Pending Confirmation" },
  ];
  return (
    <div className="flex flex-col gap-4">
      {orderSteps.map((step, i) => (
        <OrderStep key={i} {...step} />
      ))}
    </div>
  );
};

const OrderStep = ({ num, title1, title2 }) => (
  <div className="flex items-center">
    <p
      className={`flex items-center justify-center h-10 w-10 text-sm font-bold rounded-full ${
        num === 4 ? "bg-red-200 text-red-600" : "bg-green-300 text-green-900"
      }`}
    >
      {num}
    </p>
    <div className="ml-3">
      <p className="text-sm font-semibold">{title1}</p>
      <p className="text-xs text-gray-500">{title2}</p>
    </div>
  </div>
);

/* ------------------ DRIVER COMPONENT ------------------ */
const Driver = () => {
  const driverData = [
    {
      icon: (
        <img src={UserIcon} alt="driver" className="h-10 w-10 rounded-full" />
      ),
      title: "Driver",
      value: "Kevin Hobs Jr.",
    },
    {
      icon: (
        <Phone className="w-10 h-10 bg-gray-200 p-2 rounded-full text-gray-700" />
      ),
      title: "Telephone",
      value: "+12 345 5662 66",
    },
    {
      icon: (
        <Truck className="w-10 h-10 bg-gray-200 p-2 rounded-full text-gray-700" />
      ),
      title: "Delivery Time",
      value: "12:52 PM",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      {driverData.map((d, i) => (
        <div key={i} className="flex items-center gap-3">
          {d.icon}
          <div>
            <p className="text-xs text-gray-500">{d.title}</p>
            <p className="text-sm font-semibold text-gray-800">{d.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
