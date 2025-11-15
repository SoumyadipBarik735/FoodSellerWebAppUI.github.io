import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ArrowLeft, LayoutDashboard, Search } from "lucide-react";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import Burger2 from "../assets/Burger2.jpg";
import MealsPic from "../assets/Meals.jpg";
import SandwichPic from "../assets/Sandwich.jpg";
import SidesPic from "../assets/Sides.jpg";
import DrinksPic from "../assets/Drinks.jpg";
import { FaThumbsUp } from "react-icons/fa";
import StarIcon from "@mui/icons-material/Star";

const NewOrder = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("Meals"); // initialize to a single default
  const [layout, setLayout] = useState("grid");

  const categories = ["Meals", "Burgers", "Sandwiches", "Sides", "Drinks"];

  const handleDashboardClick = () => setLayout("grid");
  const handleListClick = () => setLayout("list");

  return (
    <div className="flex h-screen w-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto hide-scrollbar bg-white shadow-sm rounded-2xl mt-2 mr-2 mb-2">
        <Navbar />

        <div className="ml-6 mr-6 pb-8">
          {/* Back Button */}
          <p className="font-bold text-2xl mt-2">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft
                size={30}
                className="text-black hover:text-gray-700 text-2xl font-bold"
              />
              <span>New Order</span>
            </button>
          </p>

          {/* Categories + Search */}
          <div className="flex justify-between mt-4 items-center">
            {/* Category Tabs */}
            <div className="flex items-center gap-3 text-sm bg-gray-200 rounded-full px-4 h-10 overflow-x-auto">
              {categories.map((item, index) => (
                <React.Fragment key={item}>
                  <button
                    onClick={() => setActive(item)}
                    className={`rounded-full px-5 h-10 cursor-pointer flex items-center justify-center font-semibold transition-all duration-200 whitespace-nowrap ${
                      active === item
                        ? "bg-white text-red-600 shadow-sm"
                        : "text-gray-700 hover:text-red-500"
                    }`}
                  >
                    {item}
                  </button>

                  {index !== categories.length - 1 && (
                    <div className="h-5 w-px bg-gray-300" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Search + Icons */}
            <div className="flex gap-5 items-center">
              <div className="relative w-44">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg pr-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <LayoutDashboard
                size={22}
                onClick={handleDashboardClick}
                className={`cursor-pointer transition-all ${
                  layout === "grid" ? "text-black" : "hover:text-red-500"
                }`}
              />
              <FormatListBulletedSharpIcon
                onClick={handleListClick}
                className={`cursor-pointer transition-all ${
                  layout === "list" ? "text-black" : "hover:text-red-500"
                }`}
              />
            </div>
          </div>

          {/* Dynamic Category Display */}
          <div className="mt-5">
            {active === "Meals" ? (
              <Meals layout={layout} search={search} />
            ) : active === "Burgers" ? (
              <Burgers layout={layout} search={search} />
            ) : active === "Sandwiches" ? (
              <Sandwiches layout={layout} search={search} />
            ) : active === "Sides" ? (
              <Sides layout={layout} search={search} />
            ) : active === "Drinks" ? (
              <Drinks layout={layout} search={search} />
            ) : (
              <div className="text-center text-gray-400 mt-10">
                No items available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;

//
// Generic Item component used by all sections.
// Shows image left and content right when layout === "list"
// Shows image top and content below when layout === "grid"
//
const Item = ({ logo, title, layout, likes = "12.5k", rating = 4 }) => {
  // Create stars array: filled stars then an outlined one
  const filled = Math.max(0, Math.min(5, Math.floor(rating)));
  const empty = 5 - filled;

  return (
    <div
      className={`border border-gray-100 shadow-md rounded-2xl overflow-hidden ${
        layout === "list" ? "flex items-center gap-4 " : ""
      }`}
    >
      <img
        src={logo}
        alt={title}
        className={`object-cover ${
          layout === "list"
            ? "w-32 h-24 rounded-l-lg flex-shrink-0"
            : "h-32 w-full rounded-t-2xl"
        }`}
      />

      <div className={`${layout === "list" ? "flex-1" : "p-2"}`}>
        <p className="text-sm text-gray-800 font-medium">{title}</p>

        <div
          className={`flex justify-between items-center mt-2 ${
            layout === "list" ? "" : "ml-0 mr-0"
          }`}
        >
          <div className="flex items-center gap-1">
            {/* stars */}
            <div className="flex items-center">
              {[...Array(filled)].map((_, i) => (
                <StarIcon
                  key={`f-${i}`}
                  fontSize="small"
                  className="text-yellow-400"
                />
              ))}
              {[...Array(empty)].map((_, i) => (
                <StarIcon
                  key={`e-${i}`}
                  fontSize="small"
                  className="text-gray-300"
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">{rating}.0</span>
          </div>

          <div className="flex items-center">
            <FaThumbsUp className="text-red-600 text-lg" />
            <p className="text-sm text-red-600 ml-2 mr-4">{likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

//
// Meals Section
//
const Meals = ({ layout, search }) => {
  const mealsitemsData = [
    { logo: MealsPic, title: "Mushroom Swiss Burger" },
    { logo: MealsPic, title: "Classic Cheeseburger" },
    { logo: MealsPic, title: "Pizza Meal for Kids (Small Size)" },
    { logo: MealsPic, title: "Rice Chicken" },
    { logo: MealsPic, title: "Grilled Chicken Meal" },
    { logo: MealsPic, title: "Veggie Delight Meal" },
    { logo: MealsPic, title: "Paneer Rice Bowl" },
  ];

  const filtered = mealsitemsData.filter((it) =>
    it.title.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div
      className={
        layout === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {filtered.map((item, index) => (
        <Item key={index} logo={item.logo} title={item.title} layout={layout} />
      ))}
    </div>
  );
};

//
// Burgers Section
//
const Burgers = ({ layout, search }) => {
  const burgeritemsData = [
    { logo: Burger2, title: "Mushroom Swiss Burger" },
    { logo: Burger2, title: "Classic Cheeseburger" },
    { logo: Burger2, title: "BBQ Double Patty" },
    { logo: Burger2, title: "Crispy Chicken Burger" },
    { logo: Burger2, title: "Paneer Supreme Burger" },
    { logo: Burger2, title: "Spicy Veg Burger" },
    { logo: Burger2, title: "Paneer Rice Bowl" },
  ];

  const filtered = burgeritemsData.filter((it) =>
    it.title.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div
      className={
        layout === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {filtered.map((item, index) => (
        <Item key={index} logo={item.logo} title={item.title} layout={layout} />
      ))}
    </div>
  );
};

//
// Sandwiches
//
const Sandwiches = ({ layout, search }) => {
  const sandwichitemsData = [
    { logo: SandwichPic, title: "Veg Club Sandwich" },
    { logo: SandwichPic, title: "Cheese Grilled Sandwich" },
    { logo: SandwichPic, title: "Chicken Mayo Sandwich" },
    { logo: SandwichPic, title: "Paneer Tikka Sandwich" },
  ];

  const filtered = sandwichitemsData.filter((it) =>
    it.title.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div
      className={
        layout === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {filtered.map((item, index) => (
        <Item key={index} logo={item.logo} title={item.title} layout={layout} />
      ))}
    </div>
  );
};

//
// Sides
//
const Sides = ({ layout, search }) => {
  const sidesitemsData = [
    { logo: SidesPic, title: "French Fries" },
    { logo: SidesPic, title: "Onion Rings" },
    { logo: SidesPic, title: "Cheese Balls" },
    { logo: SidesPic, title: "Potato Wedges" },
  ];

  const filtered = sidesitemsData.filter((it) =>
    it.title.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div
      className={
        layout === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {filtered.map((item, index) => (
        <Item key={index} logo={item.logo} title={item.title} layout={layout} />
      ))}
    </div>
  );
};

//
// Drinks
//
const Drinks = ({ layout, search }) => {
  const drinksitemsData = [
    { logo: DrinksPic, title: "Coke" },
    { logo: DrinksPic, title: "Pepsi" },
    { logo: DrinksPic, title: "Cold Coffee" },
    { logo: DrinksPic, title: "Mango Shake" },
  ];

  const filtered = drinksitemsData.filter((it) =>
    it.title.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div
      className={
        layout === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          : "flex flex-col gap-4"
      }
    >
      {filtered.map((item, index) => (
        <Item key={index} logo={item.logo} title={item.title} layout={layout} />
      ))}
    </div>
  );
};
