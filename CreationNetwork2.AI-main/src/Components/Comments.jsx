import React from "react";
import user from "../Assets/Images/user.png";
import backgroundImage from "../Assets/Images/bg1.jpg";

const Comments = () => {
  return (
    <>
      <div
        className="bg-black text-white p-6 md:p-9"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:ml-9 md:mr-9 md:pl-9 md:pr-9">
          <div className="md:col-span-1">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Real People. Real Results!
            </h2>

            <p>Put AI to work in your marketing</p>

            <div
              className="grid grid-cols-1
                md:grid-cols-4 gap-4 mt-6 md:mt-9"
            >
              <h2 className="text-lg md:text-xl font-bold mb-2">
                4.9 out of 5 based on 1450 reviews
              </h2>
              <div className="bg-white w-0.5 h-16 "></div>
              <div className="flex flex-row justify-start">
                <img
                  src={user}
                  alt="User 4"
                  className="w-10 h-10 rounded-full"
                  style={{ tintColor: "white" }}
                />
                <img
                  src={user}
                  alt="User 4"
                  className="w-10 h-10 rounded-full"
                  style={{ tintColor: "white" }}
                />
                <img
                  src={user}
                  alt="User 4"
                  className="w-10 h-10 rounded-full"
                  style={{ tintColor: "white" }}
                />
              </div>
              <p className="mr-9 md:mr-9 ml-0 md:mx-8 mt-1">
                40k+ people cannot be wrong
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            {/* User Comments in a Row */}
            <div className="flex flex-wrap space-y-4 space-x-4 md:space-y-0 md:space-x-0">
              <div className="w-full md:w-1/2">
                {/* User Comment 1 */}
                <div className="bg-white md:bg-white p-4 md:rounded-lg shadow-md mb-4 mx-2">
                  <div className="flex items-center mb-2">
                    <img
                      src={user}
                      alt="User 1"
                      className="w-10 h-10 rounded-full md:mr-2"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-dark">
                        User 1
                      </h3>
                      <p className="text-gray-600">John Doe</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {/* Add your star rating component here */}
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                  <p className="text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla at est eu dui suscipit laoreet.
                  </p>
                </div>

                {/* User Comment 3 */}
                <div className="bg-white md:bg-white p-4 md:rounded-lg shadow-md mx-2">
                  <div className="flex items-center mb-2">
                    <img
                      src={user}
                      alt="User 3"
                      className="w-10 h-10 rounded-full md:mr-2"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-dark">
                        User 3
                      </h3>
                      <p className="text-gray-600">Alice Johnson</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {/* Add your star rating component here */}
                    <p className="text-yellow-500">★★★★☆</p>
                  </div>
                  <p className="text-gray-800">
                    Another comment goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                {/* User Comment 2 */}
                <div className="bg-white md:bg-white p-4 md:rounded-lg shadow-md mb-4 mt-9 mx-2">
                  <div className="flex items-center mb-2">
                    <img
                      src={user}
                      alt="User 2"
                      className="w-10 h-10 rounded-full md:mr-2"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-dark">
                        User 2
                      </h3>
                      <p className="text-gray-600">Jane Smith</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {/* Add your star rating component here */}
                    <p className="text-yellow-500">★★★☆☆</p>
                  </div>
                  <p className="text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla at est eu dui suscipit laoreet.
                  </p>
                </div>

                {/* User Comment 4 */}
                <div className="bg-white md:bg-white p-4 md:rounded-lg shadow-md mx-2">
                  <div className="flex items-center mb-2">
                    <img
                      src={user}
                      alt="User 4"
                      className="w-10 h-10 rounded-full md:mr-2"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-dark">
                        User 4
                      </h3>
                      <p className="text-gray-600">David Wilson</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {/* Add your star rating component here */}
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                  <p className="text-gray-800">
                    Yet another comment goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
