import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import AppDrawer from "../../Components/AppDrawer";
import { AuthContext } from "../../Context/AuthContext";
import GetCopyWritingContext from "../../Context/Tools/CopyWriting/GetCopyWritingContext";
import Loader from '../../Components/Loader'

const CopyWriting = () => {
  const { token } = useContext(AuthContext);
  const { clickedmessage, setclickedmessage } = useContext(
    GetCopyWritingContext
  );
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]); // Initialize messages as an empty array
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  // Simulated API response
  const simulateApiResponse = async (message) => {
    // Simulate an API request here with axios.post and replace this with the actual API call
    // For now, just returning a simulated response
    return axios
      .post(
        "https://web-production-73c6.up.railway.app/copywriting",
        { input_text: "Copywrite the following " + message },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        // Handle the API response data here
        return response.data.generated_copy;
      });
  };

  // Modify your handleSubmit function to fetch messages from the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage && !clickedmessage) return;
    if (clickedmessage) {
      setInputMessage((prevMessages) => [...prevMessages, clickedmessage]);
    }
    console.log("inputMessage " + inputMessage);

    // Add the user's message to the chat
    const userMessage = { text: inputMessage, user: "user", id: Date.now() };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Update state
    setInputMessage("");

    try {
      // Simulate an API request and response
      setIsLoading(true)
      const responseText = await simulateApiResponse(inputMessage);
      const responseMessage = {
        text: responseText,
        user: "api",
        id: Date.now() + 1,
      };
      setMessages((prevMessages) => [...prevMessages, responseMessage]); // Update state with API response
    } catch (error) {
      // Handle API error here
      const responseMessage = {
        text: "Please try again later, unable to load your query",
        user: "api",
        id: Date.now() + 1,
      };
      setMessages((prevMessages) => [...prevMessages, responseMessage]); // Update state with error message
    }finally {
      // Set isLoading to false when the API request is completed
      setIsLoading(false);

    }
  };
 

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages arrive
    if (messages.length > 0) {
      const chatContainer = document.getElementById("chat-container");
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [messages]);

  useEffect(() => {
    console.log("clickedMessageText " + clickedmessage);
    if (clickedmessage) {
      // Set the clicked message text in the input field
      setclickedmessage(clickedmessage);
      setInputMessage(clickedmessage)
    }
  }, [clickedmessage]);

  return (
    <>
    <AppDrawer />
      <div className="xl:ml-64 sm:ml-48 left-0 right-0 ">
        <div className="w-full text-center" id="content">
          <div className="rounded-xl">
            <div className="flex flex-col bg-gray-100 min-h-screen ">
              <div className="flex-1 px-4" id="chat-container">
                <div className="space-y-4 p-4">
                  { isLoading ? (
                    <Loader/>
                    ) :
                  (
                    <>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.user === "user"
                          ? "justify-end"
                          : "justify-start"
                      }
                      text-left `}
                    >
                      <div
                        className={`${
                          message.user === "user"
                            ? "bg-blue-500"
                            : "bg-green-500"
                        } text-white px-4 py-2 rounded-lg ${
                          message.user === "user"
                            ? " sm:max-w-[50%]"
                            : " sm:max-w-[50%]"
                        } 
                        ${
                          message.user === "user"
                            ? " max-w-[50%]"
                            : " max-w-[80%]"
                        } 
                         overflow-hidden `}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))} </> ) }
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 p-4 xl:pb-8">
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="text"
                    value={
                      clickedmessage !== null ? clickedmessage : inputMessage
                    }
                    onChange={(e) => {
                      if (clickedmessage !== null) {
                        setclickedmessage(null);
                        setInputMessage(e.target.value);
                      } else {
                        setInputMessage(e.target.value);
                      }
                    }}
                    placeholder="Write a story for..."
                    className="flex-1 bg-slate-300 text-black rounded-full px-4 outline-none mb-2 sm:mb-0"
                    ref={inputRef}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-full px-4 py-3"
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

export default CopyWriting;
