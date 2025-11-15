import React from "react";
import Navbar from "../Navbar";
import { BarChart2, DollarSign, ChevronDown } from "lucide-react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Burger from "../../assets/Burger.jpg";
import Burger2 from "../../assets/Burger2.jpg";
import StarIcon from "@mui/icons-material/Star";
import { FaThumbsUp } from "react-icons/fa";

const Analytics = () => {
  return (
    <div className="flex-1 overflow-y-hidden overflow-x-hidden bg-white text-gray-900 flex flex-col  mt-2 mb-3 mr-3 shadow-sm rounded-2xl">
      {/* Navbar */}
      <Navbar />

      {/* Main content scrollable */}
      <div className="flex-1 overflow-y-hidden overflow-x-hidden px-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm mb-1">
          Insights to Drive Sales Performance and Business Growth.
        </p>

        {/* Trending Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-1">
          <ChartsTrending1 title="Chart Orders" value="Monthly" />
          <ChartsTrending2 title="Trending Items" value="Monthly" />
        </div>

        {/* Favorites */}
        <div className="">
          <Favorites title1="Most Favorites Items" title2="Monthly" />
        </div>

        {/* Selling */}
        <div className="mb-2">
          <Selling title1="Most Selling Items" title2="Monthly" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

/* ====== Sample Data ====== */
const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 75 },
  { name: "May", value: 95 },
  { name: "Jun", value: 90 },
  { name: "Jul", value: 105 },
];

/* ====== Components (unchanged) ====== */
const ChartsTrending1 = ({ title, value }) => {
  return (
    <div className="border border-gray-100 shadow-sm px-4 py-1 rounded-2xl flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-1xl font-bold">{title}</h1>
        <p className="flex gap-2 text-sm border border-gray-400 rounded-md items-center px-4">
          {value}
          <span>
            <ChevronDown className="text-sm" />
          </span>
        </p>
      </div>

      <div className="flex gap-5 ml-7 ">
        <div className="flex gap-4 ">
          <DollarSign className="h-5 w-5 rounded-full border border-gray-900 text-gray-800" />
          <div>
            <h1 className="font-bold">275K</h1>
            <p className="text-sm text-gray-500">Total Sales</p>
          </div>
        </div>
        <div className="flex gap-4">
          <BarChart2 className="h-5 w-5 text-gray-400" />
          <div>
            <h1 className="font-bold">1,245</h1>
            <p className="text-sm text-gray-500">Average Sales per day</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[120px] pt-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00C49F" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00C49F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={false} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#00C49F"
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const ChartsTrending2 = ({ title, value }) => {
  const trendingItemsData = [
    {
      num: 1,
      title1: "Plant-Based Burger",
      value1: "$12.56",
      title2: "Pizza",
      price: 524,
      logo: Burger,
    },
    {
      num: 2,
      title1: "Loaded Nachos",
      value1: "$12.56",
      title2: "Juice",
      price: 224,
      logo: Burger,
    },
    {
      num: 3,
      title1: "Chicken Sandwich with Spicy Sauce",
      value1: "$12.56",
      title2: "Burger",
      price: 124,
      logo: Burger,
    },
    {
      num: 4,
      title1: "Gourmet Fries with Toppings",
      value1: "$12.56",
      title2: "Pizza",
      price: 104,
      logo: Burger,
    },
  ];
  return (
    <div className="border border-gray-100 shadow-sm px-3 py-1 rounded-2xl">
      <div className="flex justify-between">
        <h1 className="text-1xl font-bold">{title}</h1>
        <p className="flex gap-2 text-sm border border-gray-400 rounded-md items-center px-4 ">
          {value}
          <span>
            <ChevronDown className="text-sm" />
          </span>
        </p>
      </div>
      <div className="mt-1 px-4">
        {trendingItemsData.map((item, index) => (
          <TreandingItems key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const TreandingItems = ({ num, title1, value1, title2, price, logo }) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-3 items-center">
      <p className="font-bold">#{num}</p>
      <img src={logo} alt="items" className="h-8 w-8 rounded-md" />
      <div>
        <p className="text-sm font-semibold">{title1}</p>
        <div className="flex gap-2">
          <p className="text-xs font-semibold">{value1}</p>
          <p className="text-red-600 text-xs font-semibold">{title2}</p>
        </div>
      </div>
    </div>
    <div>
      <p className="font-bold text-sm">${price}</p>
      <p className="text-sm text-gray-500">Sales(12%)</p>
    </div>
  </div>
);

const Favorites = ({ title1, title2 }) => {
  const favoritesitemsData = [
    { logo: Burger2, title: "Mushroom Swiss Burger" },
    { logo: Burger2, title: "Classic Cheeseburger" },
    { logo: Burger2, title: "Pizza Meal for Kids (Small Size)" },
    { logo: Burger2, title: "Rice Chicken" },
  ];
  return (
    <div>
      <div className="flex justify-between ">
        <h1 className="text-1xl font-bold">{title1}</h1>
        <p className="flex gap-2 text-sm border border-gray-400 rounded-md  items-center px-4  mb-1">
          {title2}
          <span>
            <ChevronDown className="text-sm" />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-1">
        {favoritesitemsData.map((item, index) => (
          <FavoritesItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const FavoritesItem = ({ logo, title }) => (
  <div className="border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
    <img src={logo} alt="items" className="h-28 w-full object-cover" />
    <p className="text-xs text-gray-600 ml-3 mt-1">{title}</p>
    <div className="flex ml-3 mr-2 mb-1 justify-between items-center">
      <div className="flex">
        {[...Array(4)].map((_, i) => (
          <StarIcon key={i} className="text-yellow-400 fill-yellow-400" />
        ))}
        <StarIcon className="text-gray-300" />
      </div>
      <div className="flex items-center">
        <FaThumbsUp className="text-red-600 text-1xl" />
        <p className="text-sm text-red-600 ml-2">12.5k</p>
      </div>
    </div>
  </div>
);

const Selling = ({ title1, title2 }) => {
  const sellingitemsData = Array(6).fill({
    logo: Burger,
    title1: "Cheeseburger",
    price: "$15.24",
    title2: "Burger",
    title3: "Serves for 4 Person 24mins",
  });
  return (
    <div className="rounded-2xl mb-2">
      <div className="flex justify-between mb-1">
        <h1 className="text-1xl font-bold">{title1}</h1>
        <p className="flex gap-2 text-sm border border-gray-400 rounded-md items-center px-4">
          {title2}
          <span>
            <ChevronDown className="text-sm" />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {sellingitemsData.map((item, index) => (
          <SellingItems key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const SellingItems = ({ logo, title1, price, title2, title3 }) => (
  <div className="flex justify-between  border border-gray-200 rounded-xl">
    <div className="flex items-center gap-3">
      <img src={logo} alt={title1} className="h-16 w-14 rounded-l-xl" />
      <div className="">
        <p className="font-semibold ">{title1}</p>
        <div className="flex gap-2 items-center text-sm">
          <p>{price}</p>
          <p className="text-red-600">{title2}</p>
        </div>
        <p className="text-xs text-gray-500">{title3}</p>
      </div>
    </div>

    <MoreHorizIcon className="text-gray-700 hover:text-blue-600 mr-2 mt-1" />
  </div>
);
