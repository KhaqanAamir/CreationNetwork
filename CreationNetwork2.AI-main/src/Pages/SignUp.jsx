import React, { useState } from "react";
import logo from '../Assets/Images/HeaderLogo.png';
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const baseurl = "https://web-production-73c6.up.railway.app";
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [confirmationStep, setConfirmationStep] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState();
  const [finishStep, setFinishStep] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    setLoader(true);
    setError("");

    // Validate form fields
    if (!name || !username || !email || !password || !confirmpassword) {
      setError("All fields are required.");
      setLoader(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoader(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setLoader(false);
      return;
    }

    if (password !== confirmpassword) {
      setError("Passwords do not match.");
      setLoader(false);
      return;
    }

    const data = {
      username: username,
      full_name: name,
      email: email,
      password: password
    };
    console.log(data)
    try {
      // Assuming the API call was successful, move to the confirmation step
      const response = await axios.post(`${baseurl}/signup`, data);
      setConfirmationStep(true);
      setLoader(false);
      console.log('Sign Up api response', response.data);
    } catch (error) {
      setLoader(false);
      console.error(error);
    }
  };

  const handleConfirmFormSubmit = async () => {
    setLoader(true)
    const data = {
      email: email,
      verification_code: confirmationCode
    };

    console.log(data)

    try {
      const response = await axios.post(`${baseurl}/verify_signup`, data);
      setLoader(false);
      setFinishStep(true);
      console.log('Sign Up api response', response.data);
    } catch (error) {
      setLoader(false);
      setError("Incorrect Verification Code")
      console.error(error);
    }
  
  }

  return (
    <div className="h-screen md:flex bg-black">
      <div
        className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden"
      >
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Creation Network.Ai
          </h1>
          <p className="text-white mt-1">
            The unique platform that is revolutionizing social media marketing
            and content creation.
          </p>
          <Link to="/about-us">
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
          </Link>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-black">
        {confirmationStep ?(
          // Render confirmation message if confirmationStep is true
          finishStep ? 
          
          <div className="bg-black text-white text-center">
          <h1 className="text-white font-bold text-2xl mb-4">
            Thank you for signing up!
          </h1>
          <p className="text-sm font-normal text-white mb-4">
            Your Email is Confirmed.
          </p>
          <Link to="/login">
          <button
            onClick={handleSubmit}
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Goto Sign In
          </button>
          </Link>
        </div>
          
          :
          <div className="bg-black text-white text-center">
            <h1 className="text-white font-bold text-2xl mb-4">
              Thank you for signing up!
            </h1>
            <p className="text-sm font-normal text-white mb-4">
              You will receive a confirmation email shortly. Enter that code below to confirm email and complete sign up.
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-black text-white"
                onChange={(e) => {
                  setConfirmationCode(e.target.value);
                }}
                type="text"
                name=""
                id=""
                placeholder="Enter Confirmation Code"
              />
            </div>
            {loader?
            <div role="status">
            <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
            </div>
            :
            <button
              onClick={handleConfirmFormSubmit}
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Confirm Email
            </button>
            }
            <span className="text-lg ml-2 cursor-pointer text-red-600 mt-4">
                {error}
              </span>
          </div>
        ) : (
          // Render the sign-up form if confirmationStep is false
          <div className="bg-black">
            <img
              className="mx-auto w-48"
              src={logo}
              alt="logo"
            />
            <h1 className="text-white font-bold text-2xl mb-1">
              Welcome to Creation Network.AI!
            </h1>
            <p className="text-sm font-normal text-white mb-7">
              Create Your Account
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-black text-white"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name=""
                id=""
                placeholder="Full name"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-black text-white"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                name=""
                id=""
                placeholder="Username"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-black text-white"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name=""
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-black text-white"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-black text-white"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                name=""
                id=""
                placeholder="Retype Password"
              />
            </div>
            {loader?
            <div role="status" className="text-center block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
            <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
            </div>
            :
            <button
              onClick={handleSubmit}
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Sign Up
            </button>
            }
            <div className="flex flex-col">
            <Link to="/Login">
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer text-white">
                Already have an Account ?
              </span>
              </Link>
              <span className="text-lg ml-2 cursor-pointer text-red-600 mt-4">
                {error}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
