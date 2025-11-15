import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Calendar as CalendarIcon } from "lucide-react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";


const OrderList = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const navigate = useNavigate();

  // Display formatted date
  const getDisplayDate = (date) => {
    if (!date) return "";
    const today = new Date();
    const diffTime = date.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays === -1) return "Yesterday";

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Handle calendar date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  // Dummy order data
  const orderItems = [
    {
      id: "#576",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "On Delivery",
      amount: "$250",
    },
    {
      id: "#577",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "Canceled",
      amount: "$250",
    },
    {
      id: "#578",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "New Order",
      amount: "$250",
    },
    {
      id: "#579",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "On Delivery",
      amount: "$250",
    },
    {
      id: "#580",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "On Delivery",
      amount: "$250",
    },
    {
      id: "#581",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "Canceled",
      amount: "$250",
    },
    {
      id: "#582",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "Delivered",
      amount: "$250",
    },
    {
      id: "#583",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "New Order",
      amount: "$250",
    },
    {
      id: "#584",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "Delivered",
      amount: "$250",
    },
    {
      id: "#585",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "New Order",
      amount: "$250",
    },
    {
      id: "#586",
      num: "228-3844-931-7689",
      date: "2:26 PM",
      state: "New Order",
      amount: "$250",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (Optional) */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-white text-gray-900 flex flex-col mt-3 mb-3 mr-3 shadow-sm rounded-2xl">
        {/* Navbar */}
        <Navbar />

        {/* Header Section */}
        <div className="px-10">
          <div className="flex justify-between mt-3">
            <div>
              <h1 className="text-2xl font-bold">Order Management</h1>
              <p className="text-gray-600">Streamlining Your Sales Process</p>
            </div>

            {/* Calendar and Status Filters */}
            <div className="flex gap-3 items-center mt-3">
              <p>
                Total <span className="text-red-600 font-bold">150</span> orders
              </p>

              <p className="text-md w-20 px-2 py-2 h-8 rounded-full shadow-sm shadow-gray-300 flex items-center justify-center">
                Status
              </p>

              <div className="relative flex justify-center items-center shadow-sm border border-gray-300 rounded-2xl w-32 px-2 py-2 h-8">
                {selectedDate ? (
                  <button
                    onClick={() => setShowCalendar(true)}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {getDisplayDate(selectedDate)}
                  </button>
                ) : (
                  <CalendarIcon
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="cursor-pointer text-gray-700 hover:text-blue-600"
                  />
                )}

                {/* Calendar Popup */}
                {showCalendar && (
                  <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                    <Calendar
                      onChange={handleDateChange}
                      value={selectedDate || new Date()}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Table */}
        <div className="shadow-md overflow-y-hidden  rounded-md  mt-4 px-10">
          <div className="max-h-[540px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <table className="w-full border-collapse text-sm">
              {/* Table Header */}
              <thead className="sticky top-0 bg-gray-100 z-10 shadow-sm rounded-t-md">
                <tr>
                  <th className="px-3 py-2 text-left">Order ID</th>
                  <th className="px-3 py-2 text-left">Order Number</th>
                  <th className="px-3 py-2 text-left">Order Date</th>
                  <th className="px-3 py-2 text-left">State</th>
                  <th className="px-3 py-2 text-center">Free Shipping</th>
                  <th className="px-3 py-2 text-left">Amount</th>
                  <th className="px-3 py-2 text-center">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {orderItems.map((it) => {
                  let stateClasses = "text-sm font-semibold ";

                  switch (it.state.toLowerCase()) {
                    case "on delivery":
                      stateClasses += "text-blue-600 bg-blue-100";
                      break;
                    case "canceled":
                      stateClasses += "text-gray-600 bg-gray-200";
                      break;
                    case "new order":
                      stateClasses += "text-red-600 bg-red-100";
                      break;
                    case "delivered":
                      stateClasses += "text-green-600 bg-green-100";
                      break;
                    default:
                      stateClasses += "text-black bg-gray-200";
                  }

                  return (
                    <tr
                      key={it.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="px-3 py-2">{it.id}</td>
                      <td className="px-3 py-2">{it.num}</td>
                      <td className="px-3 py-2">{it.date}</td>
                      <td className="px-3 py-2">
                        <span
                          className={`${stateClasses} inline-block text-center w-24 px-2 py-1 rounded-full`}
                        >
                          {it.state}
                        </span>
                      </td>

                      <td className="px-3 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={checkedItems[it.id] || false}
                          onChange={() =>
                            setCheckedItems((prev) => ({
                              ...prev,
                              [it.id]: !prev[it.id],
                            }))
                          }
                          className="cursor-pointer w-4 h-4 accent-red-600"
                        />
                      </td>

                      <td className="px-3 py-2">{it.amount}</td>

                      <td className="px-3 py-2 text-center">
                        <button
                          onClick={() =>
                            navigate(
                              `/ordermanagement/${it.id.replace("#", "")}`
                            )
                          }
                          className="flex justify-center items-center w-full hover:bg-gray-100 p-2 rounded-md transition"
                        >
                          <MoreHorizIcon className="text-gray-700 hover:text-blue-600" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
