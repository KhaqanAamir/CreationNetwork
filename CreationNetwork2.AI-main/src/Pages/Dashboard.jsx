import AppDrawer from "../Components/AppDrawer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [savedmessages, getsavedmessages] = useState([]);

  // Simulated API response
  const simulateApiResponse = async (message) => {
    // Simulate an API request here with axios.post and replace this with the actual API call
    // For now, just returning a simulated response
    return axios
      .post(
        "https://apistagingcn-com.onrender.com/copywriting",
        { input_text: message },
        {
          headers: {
            Authorization:
              "e070421eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDcwNDIxIn0.guzPcjFzvHjG3Gv5NNARIRPKPjT7vyShjPM4GcCTKyI_!-@_#-$_%-^_&-*_(-)16092023210407",
          },
        }
      )
      .then((response) => {
        // Handle the API response data here
        return response.data.generated_copy;
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage) return;

    // Add the user's message to the chat
    const userMessage = { text: inputMessage, user: "user", id: Date.now() };
    console.log("User Message:", userMessage); // Debug line
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Update state
    setInputMessage("");

    try {
      // Simulate an API request and response
      const responseText = await simulateApiResponse(inputMessage);
      const responseMessage = {
        text: responseText,
        user: "api",
        id: Date.now() + 1,
      };
      console.log("API Response:", responseMessage); // Debug line
      setMessages((prevMessages) => [...prevMessages, responseMessage]); // Update state with API response
    } catch (error) {
      // Handle API error here
      const responseMessage = {
        text: "Please try again later, unable to load your query",
        user: "api",
        id: Date.now() + 1,
      };
      console.log("API Error:", responseMessage); // Debug line
      setMessages((prevMessages) => [...prevMessages, responseMessage]); // Update state with error message
      // You can set an error message in the chat or handle it in your UI as needed
    }
  };

  // useEffect(() => {
  //   try {
  //     axios
  //       .get(
  //         "https://apistagingcn-com.onrender.com/copywriting/get_saved_data",
  //         {
  //           headers: {
  //             Authorization:
  //               "e070421eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDcwNDIxIn0.guzPcjFzvHjG3Gv5NNARIRPKPjT7vyShjPM4GcCTKyI_!-@_#-$_%-^_&-*_(-)16092023210407",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response.data.saved_data);
  //         getsavedmessages(response.data.saved_data);
  //         console.log(messages.length);
  //       });
  //   } catch (error) {
  //     console.log("error agya hai");
  //   }
  // }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages arrive
    if (messages.length > 0) {
      const chatContainer = document.getElementById("chat-container");
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <>
      <AppDrawer />
      <div className="xl:ml-64 sm:ml-48 fixed h-full left-0 right-0">
        <div className="w-full text-center h-full" id="content">
          <div className="bg-gray-100 rounded-xl h-full">
            <div className="flex flex-col h-[100vh]">
              <div className="flex-1 overflow-auto px-4" id="chat-container">
                <div className="space-y-4 p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.user === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`${
                          message.user === "user"
                            ? "bg-blue-500"
                            : "bg-green-500"
                        } text-white px-4 py-2 rounded-lg`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <form onSubmit={handleSubmit} className="p-4 xl:pb-8">
                <div className="flex">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-white text-black rounded-full px-4 outline-none"
                  />
                  <button
                    type="submit"
                    className="ml-2 bg-blue-500 text-white rounded-full px-4 py-3"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
