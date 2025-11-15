import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OrderManagement from "./pages/OrderManagement";
import NewOrder from "./pages/NewOrder";
import OrderList from "./components/Home/OrderList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ordermanagement/:orderId" element={<OrderManagement />} />
        <Route path="/ordermanagement" element={<OrderList />} />
        <Route path="neworder" element={<NewOrder />} />
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
