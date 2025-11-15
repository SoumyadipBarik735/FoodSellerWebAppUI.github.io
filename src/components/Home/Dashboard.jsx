import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Calendar as CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { DollarSign, FileText, User, MenuIcon, TrendingUp } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [search, setSearch] = useState("");
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

  return (
    <div className="flex-1 overflow-y-hidden overflow-x-hidden bg-white text-gray-900 flex flex-col  mt-3 mb-3 mr-3 shadow-sm rounded-2xl">
      {/* Header */}
      <Navbar />
      <div className="px-10">
        {/* Main Content */}
        <div>
          {/* Dashboard Title */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">Dashboard</h1>
              <p className="text-gray-600 text-sm">
                Optimize Revenue and Track Sales Performance
              </p>
            </div>
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
            <DashboardCard
              logo={<DollarSign className="text-red-600 h-5 w-5" />}
              title="Total Revenue"
              value="$29,600"
            />
            <DashboardCard
              logo={<FileText className="text-red-600 h-5 w-5" />}
              title="Total Orders"
              value="125"
            />
            <DashboardCard
              logo={<User className="text-red-600 h-5 w-5" />}
              title="Total Clients"
              value="102"
            />
            <DashboardCard
              logo={<MenuIcon className="text-red-600 h-5 w-5" />}
              title="Total Menus"
              value="60"
            />
          </div>
        </div>

        {/* Upsale + Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-3 pb-3">
          {/* Upsale Section */}
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 ">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Today's Upsale</h2>
              <p className="text-red-500 underline font-bold cursor-pointer">
                See All
              </p>
            </div>
            <div>
              <Upsale
                logo={<User />}
                title1="Roast Chicken"
                title2="Order: 120"
                value="3,783"
              />
              <Upsale
                logo={<User />}
                title1="Pasta"
                title2="Order: 12"
                value="9,816"
              />
              <Upsale
                logo={<User />}
                title1="Black Coffee"
                title2="Order: 51"
                value="1,420"
              />
              <Upsale
                logo={<User />}
                title1="Soup"
                title2="Order: 61"
                value="5,126"
              />
              <Upsale
                logo={<User />}
                title1="Bread"
                title2="Order: 77"
                value="4,645"
              />
              <Upsale
                logo={<User />}
                title1="Cookie"
                title2="Order: 21"
                value="5,116"
              />
            </div>
          </div>

          {/* Bar Chart Section */}
          <div className="col-span-2 bg-white px-3 rounded-xl shadow-sm border border-gray-100 ">
            <div className="flex justify-between items-center mb-2 mt-3">
              <h2 className="text-lg font-semibold ml-3">Accepted Orders</h2>
              <p className="relative flex justify-center items-center shadow-sm border border-gray-300 rounded-md w-28 px-2 py-2 h-8">
                Week
              </p>
            </div>
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* ===== Reusable Components ===== */

const DashboardCard = ({ title, value, logo }) => {
  return (
    <div className="bg-white p-3 px-5 rounded-lg shadow">
      <span className="flex items-center justify-center h-8 w-8 bg-gray-100 rounded-full">
        {logo}
      </span>
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-gray-800 text-xl font-bold">{value}</p>
        </div>
        <TrendingUp className="text-red-800 h-6 w-6 mr-2" />
      </div>
    </div>
  );
};

const Upsale = ({ title1, title2, value, logo }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b last:border-none">
      {/* Left: Icon + Text */}
      <div className="flex items-center space-x-3">
        <span className="flex items-center justify-center h-8 w-8 bg-gray-300 rounded-full">
          {logo}
        </span>
        <div>
          <h1 className="font-bold">{title1}</h1>
          <p className="text-sm text-gray-600">{title2}</p>
        </div>
      </div>
      {/* Right: Value */}
      <div>
        <p className="font-bold">${value}</p>
      </div>
    </div>
  );
};

const BarChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Orders ($)",
        data: [200, 150, 300, 550, 700, 320, 600],
        backgroundColor: "rgba(218, 160, 109, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Weekly Orders" },
    },
  };

  return <Bar data={data} options={options} />;
};
