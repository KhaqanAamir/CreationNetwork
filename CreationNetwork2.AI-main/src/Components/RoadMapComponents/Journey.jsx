import React from "react";
import "../../Styles/Pages/Company/RoadMap/Journey.css";
import Contact from "../../Assets/Images/contact.png";

const Journey = () => {
  return (
    <>
      <center>
        <div className="text-black" style={{ backgroundColor: "#f5f9ff" }}>
          {" "}
          <br /> <br />
          <br />
          <br />
          <div className="mb-32">
            <h1
              style={{ color: "#7842f3" }}
              className="tracking-widest font-semibold text-s text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              CHANGE LOG
            </h1>
            <h1 className="tracking-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              The Journey So Far
            </h1>
          </div>
          
          <div className="flex flex-wrap pb-6 justify-between max-[700px]:flex-col h-fit">
            

            <div className="flex-1 sm:m-2 max-[500px]:flex-col">
              <div className="max-w-sm h-fit text-left p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <p className="text-purple-500 uppercase text-sm font-semibold mb-3">
                  2021
                </p>
                <a href=".">
                  <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Sept 8th - First Customer
                  </h5>
                </a>
                <p className="text-gray-700 dark:text-gray-400 text-base leading-7">
                  On this momentous day, we celebrated a significant achievement
                  as our first customer joined us on our journey, igniting a
                  flame of success and inspiration. Their trust in our product
                  emboldened and inspired us to continue building.
                </p>
              </div>
            </div>

            <div className="flex-1 h-[60vh] max-[500px]:m-2">
              <div className="max-w-sm h-fit text-left p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <p className="text-purple-500 uppercase text-sm font-semibold mb-3">
                  2021
                </p>
                <a href=".">
                  <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Q1 - Igniting the Spark
                  </h5>
                </a>
                <p className="text-gray-700 dark:text-gray-400 text-base leading-7">
                  With excitement and ambition, we kickstarted our app
                  development journey.{" "}
                  <strong className="font-semibold">
                    This pivotal moment marked the start of a revolution in
                    marketing
                  </strong>
                  . Fueled by passion and guided by a clear roadmap, we set out
                  to create an app that would empower businesses to unleash
                  their marketing potential like never before. Brace yourself
                  for the incredible journey ahead!
                </p>
              </div>
            </div>
          </div>
        </div>
      </center>
      <div className="text-black flex flex-wrap sm:flex-col md:flex-row justify-center">
        {/* Left Side (Contact Details) */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold bg-white text-black p-2">
            Contact Us
          </h2>
          <ul className="mt-4">
            <li className="mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>123 Main Street,
              City
            </li>
            <li className="mb-2">
              <i className="fas fa-phone mr-2"></i>(123) 456-7890
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope mr-2"></i>contact@example.com
            </li>
          </ul>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 p-4">
          <img
            src={Contact}
            alt="Contact Imge"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Journey;
