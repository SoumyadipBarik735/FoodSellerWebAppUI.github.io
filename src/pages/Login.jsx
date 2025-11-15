import React from "react";
import { useNavigate } from "react-router-dom";
import frontendImage from "../assets/FrontendPic.jpg";
import logo from "../assets/logo.jpg";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic or validation here later
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-gray-100">
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center items-center p-4">
        <img
          src={frontendImage}
          alt="Sign Up"
          className="mx-auto h-full w-full rounded-2xl"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex flex-col bg-white justify-center p-4 overflow-hidden rounded-2xl mr-4 mt-4 mb-4">
        <img src={logo} alt="Logo" className="mx-auto mt-6 mb-2 w-14" />
        <h1 className="text-3xl font-bold italic text-black-500 text-center mb-3 mt-1">
          Welcome to Pomo!
        </h1>

        <div className="flex-1 flex flex-col justify-center p-5 mt-2 bg-white w-6/12 mx-auto mb-4">
          <h1 className="text-xl font-bold mb-4">Log In to Your Account</h1>

          <h1>Email Or Phone Number</h1>
          <input
            type="text"
            placeholder="abc@gmail.com / 1234567890"
            className="border border-gray-300 p-2 rounded-3xl mb-4"
          />

          <h1>Password</h1>
          <input
            type="password"
            placeholder="abc@123"
            className="border border-gray-300 p-2 rounded-3xl mb-4"
          />

          <button
            onClick={handleLogin}
            className="bg-red-500 text-white px-4 py-2 rounded-3xl mt-4"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
