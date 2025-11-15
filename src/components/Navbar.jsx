import React, { useState } from "react";
import { Search, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      {/* Header */}
      <nav className="flex h-14 p-1 w-full items-center justify-between px-6 py-3 bg-white border-b border-gray-300 relative">
        {/*search Bar*/}
        <div className="relative w-60 max-auto">
          <Search
            size={16}
            className="absolute left-3 transform translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search Order Id..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-3xl pl-10 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => navigate(`/neworder`)}
          className="absolute right-6 bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-500 flex items-center space-x-2"
        >
          <PlusCircle size={18} className="text-white mr-3" /> New Order
        </button>
      </nav>
    </div>
  );
};
export default Navbar;
