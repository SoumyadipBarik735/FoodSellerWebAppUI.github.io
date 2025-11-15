import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Home/Dashboard";
import Analytics from "../components/Home/Analytics";
import Message from "../components/Home/Message";
import Notification from "../components/Home/Notification";
import Settings from "../components/Home/Settings";
import OrderList from "../components/Home/OrderList";
const Home = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  // Render the selected component based on the activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;
      case "analytics":
        return <Analytics />;
      case "orders":
        return <OrderList />;
      case "messages":
        return <Message />;
      case "notifications":
        return <Notification />;
      case "settings":
        return <Settings />;
      case "neworder":
        return <NewOrder />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="flex h-screen w-screen bg-gray-100 overflow-hidden">
      {/* Sidebar Fixed on Left */}{" "}
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      {/* Page Content on Right when clicked */}
      <div className="flex-1 overflow-y-auto">{renderComponent()}</div>
    </div>
  );
};
export default Home;
