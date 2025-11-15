import React from "react";
import { useNavigate } from "react-router-dom";
import frontendImage from "../assets/FrontendPic.jpg";
import logo from "../assets/logo.jpg";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const navigate = useNavigate(); // 👈 Hook for navigation

  const handleSignUp = () => {
    // You can add signup validation or API call here later
    navigate("/login"); // Redirect to login
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

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex flex-col bg-white justify-center p-4 overflow-hidden rounded-2xl mt-4 mb-4 mr-4">
        <img src={logo} alt="Logo" className="mx-auto mt-6 mb-2 w-14" />
        <h1 className="text-3xl font-bold italic text-black-500 text-center mb-3 mt-1">
          Welcome to Pomo!
        </h1>

        <div className="flex-1 flex flex-col justify-center p-5 mt-8 bg-white w-6/12 mx-auto mb-4">
          <h1 className="text-xl font-bold mb-4">Let's Create an Account</h1>

          <h1>Name</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              const onlyLetters = e.target.value.replace(/[^A-Za-z\s]/g, "");
              setName(onlyLetters);
            }}
            placeholder="Username"
            className="border border-gray-300 p-2 rounded-3xl mb-4"
          />

          <h1>Email</h1>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="border border-gray-300 p-2 rounded-3xl mb-4"
          />

          <h1>Phone Number</h1>
          <input
            type="number"
            placeholder="1234567890"
            className="border border-gray-300 p-2 rounded-3xl mb-4"
          />

          <h1>Password</h1>
          <input
            type="password"
            placeholder="abc@123"
            className="border border-gray-300 p-2 rounded-3xl mb-4"
          />

          <h4 className="text-center">
            By tapping "Sign Up", you agree to Pomo{" "}
            <span className="text-red-700 font-bold">Terms and conditions</span>{" "}
            and <span className="text-red-700 font-bold">Privacy Policy.</span>
          </h4>

          <button
            onClick={handleSignUp}
            className="bg-red-500 text-white px-4 py-2 rounded-3xl mt-4"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
