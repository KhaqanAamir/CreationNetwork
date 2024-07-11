import React, { useState, useContext } from "react";
import logo from "../Assets/Images/HeaderLogo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const baseurl = "https://web-production-73c6.up.railway.app";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();
  const [verifyEmail, setVerifyEmail] = useState();
  const [confirmationCode, setConfirmationCode] = useState();
  const [newPassword, setNewpassword] = useState();
  const [forgotPassword, setForgotPassword] = useState(false);
  const [verificationStep, setVerificationStep] = useState(false);
  const [resetStep, setResetStep] = useState(false);
  const [resetConfirmStep, setResetConfirmStep] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Regular expression pattern for a simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(""); // Clear previous errors

    // Validate form fields
    if (!email || !password) {
      setError("Email and password are required.");
      setLoader(false);
      return;
    }

    if (!isEmailValid(email)) {
      setError("Invalid email format.");
      setLoader(false);
      return;
    }

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    try {
      const response = await axios.post(`${baseurl}/login`, data);
      setLoader(false);
      console.log("Login api response", response.data);
      login(response.data.data[0].full_name, response.data.token);
      navigate("/products");
    } catch (error) {
      setLoader(false);
      console.error(error);
      setError("Invalid email or password.");
    }
  };

  const handleConfirmFormSubmit = async () => {
    setLoader(true);
    const data = {
      email: verifyEmail,
      verification_code: confirmationCode,
    };
    if (!verifyEmail || !confirmationCode) {
      setError("Email and confirmation code are required.");
      setLoader(false);
      return;
    }
    try {
      // Assuming the API call was successful, move to the confirmation step
      const response = await axios.post(
        `${baseurl}/reset_password/verify`,
        data
      );
      setLoader(false);
      setResetStep(true);
      console.log("Sign Up api response", response.data);
    } catch (error) {
      setLoader(false);
      setError("Incorrect Verification Code");
      console.error(error);
    }
  };

  const sendCode = async () => {
    setLoader(true);
    const data = {
      email: verifyEmail,
    };

    if (!verifyEmail) {
      setError("Email is required.");
      setLoader(false);
      return;
    } else {
      try {
        // Assuming the API call was successful, move to the confirmation step
        const response = await axios.post(`${baseurl}/forgot_password`, data);
        setLoader(false);
        setVerificationStep(true);
        console.log("Sign Up api response", response.data);
      } catch (error) {
        setLoader(false);
        setError("This Email Address is not registered");
        console.error(error);
      }
    }
  };

  const handleNewPassword = async () => {
    setLoader(true);
    const data = {
      email: verifyEmail,
      password: newPassword,
    };
    if (!verifyEmail || !newPassword) {
      setError("Email and password are required.");
      setLoader(false);
      return;
    }
    try {
      // Assuming the API call was successful, move to the confirmation step
      const response = await axios.post(
        `${baseurl}/reset_password/update`,
        data
      );
      setLoader(false);
      setResetConfirmStep(true);
      console.log("Sign Up api response", response.data);
    } catch (error) {
      setLoader(false);
      setError("Some Error Occured");
      console.error(error);
    }
  };

  const showErrorTimeout = () => {
    setTimeout(() => {
      <h1>Invalid</h1>;
    }, 2000);
  };

  return (
    <div className="h-screen md:flex bg-black">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
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
        {forgotPassword ? (
          verificationStep ? (
            resetStep ? (
              resetConfirmStep ? (
                <div className="bg-black text-white text-center">
                  <h1 className="text-white font-bold text-2xl mb-4">
                    New password is set successfully!
                  </h1>
                  <p className="text-sm font-normal text-white mb-4">
                    Login to your account using new password.
                  </p>
                  <Link to="/login">
                    <button
                      onClick={handleSubmit}
                      className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                    >
                      Goto Login
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="bg-black text-white text-center">
                  <h1 className="text-white font-bold text-2xl mb-4">
                    Reset Password
                  </h1>
                  <p className="text-sm font-normal text-white mb-4">
                    Enter your new password.
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
                        setNewpassword(e.target.value);
                      }}
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter New Password"
                    />
                  </div>
                  {loader ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleNewPassword}
                      className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                    >
                      Change Password
                    </button>
                  )}
                  <div className="flex flex-col">
                    <span className="text-lg ml-2 cursor-pointer text-red-600 mt-4">
                      {error}
                    </span>

                    <span
                      className="text-sm ml-2 hover:text-blue-500 cursor-pointer text-white"
                      onClick={() => {
                        setForgotPassword(false);
                        setLoader(false);
                      }}
                    >
                      Back to Login
                    </span>
                  </div>
                </div>
              )
            ) : (
              <div className="bg-black text-white text-center">
                <h1 className="text-white font-bold text-2xl mb-4">
                  Forgot Password
                </h1>
                <p className="text-sm font-normal text-white mb-4">
                  Enter verification code you received.
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
                {loader ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <button
                    onClick={handleConfirmFormSubmit}
                    className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                  >
                    Verify
                  </button>
                )}
                <div className="flex flex-col">
                  <span className="text-lg ml-2 cursor-pointer text-red-600 mt-4">
                    {error}
                  </span>

                  <span
                    className="text-sm ml-2 hover:text-blue-500 cursor-pointer text-white"
                    onClick={() => {
                      setForgotPassword(false);
                      setLoader(false);
                    }}
                  >
                    Back to Login
                  </span>
                </div>
              </div>
            )
          ) : (
            <div className="bg-black text-white text-center">
              <h1 className="text-white font-bold text-2xl mb-4">
                Forgot Password
              </h1>
              <p className="text-sm font-normal text-white mb-4">
                Enter your registered email address and then you will receive a
                confirmation code on your email shortly.
              </p>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none bg-black text-white"
                  onChange={(e) => {
                    setVerifyEmail(e.target.value);
                  }}
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                />
              </div>
              {loader ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <button
                  onClick={sendCode}
                  className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                >
                  Send Code
                </button>
              )}
              <span className="text-lg ml-2 cursor-pointer text-red-600 mt-4">
                {error}
              </span>

              <span
                className="text-sm ml-2 hover:text-blue-500 cursor-pointer text-white"
                onClick={() => {
                  setForgotPassword(false);
                }}
              >
                Back to Login
              </span>
            </div>
          )
        ) : (
          <>
            <form className="bg-black">
              <Link to="/">
                <img className="mx-auto w-44 mb-12" src={logo} alt="logo" />
              </Link>
              <h1 className="text-white font-bold text-2xl mb-1">
                Welcome Back to Creation Network.AI
              </h1>
              <p className="text-sm font-normal text-white mb-7">
                Login to your account
              </p>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none bg-black text-white w-full"
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
                  className="pl-2 outline-none border-none bg-black text-white w-full"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                />
              </div>
              {loader ? (
                <div
                  role="status"
                  className="text-center block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                >
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                >
                  Sign In
                </button>
              )}
              <div className="flex flex-row justify-between">
                <span
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer text-white"
                  onClick={() => {
                    setForgotPassword(true);
                  }}
                >
                  Forgot Password ?
                </span>
                <Link to="/sign-up">
                  <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer text-white">
                    Create an Account
                  </span>
                </Link>
              </div>

              <div className="text-md ml-2 text-red-600 mt-2">{error}</div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
