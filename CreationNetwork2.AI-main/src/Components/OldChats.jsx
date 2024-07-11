import React, { useEffect, useState, useContext } from "react";
import GetCopyWritingContext from "../Context/Tools/CopyWriting/GetCopyWritingContext";

const OldChats = () => {
  const { getsaveddata, saveddata,  setclickedmessage } = useContext(GetCopyWritingContext);

  // State to store categorized messages
  const [categorizedMessages, setCategorizedMessages] = useState({
    today: [],
    yesterday: [],
    previous7Days: [],
  });

  useEffect(() => {
    getsaveddata();
  }, []);

  // Function to categorize messages by date
  const categorizeMessagesByDate = () => {
    if (!saveddata) {
      return; // Exit early if saveddata is undefined
    }

    const today = new Date().toLocaleDateString();
    const yesterday = new Date(new Date() - 86400000).toLocaleDateString();

    const categorized = {
      today: [],
      yesterday: [],
      previous7Days: [],
    };

    saveddata.forEach((message) => {
      const messageDate = new Date(message.created_at).toLocaleDateString();
      if (messageDate === today) {
        categorized.today.push(message);
      } else if (messageDate === yesterday) {
        categorized.yesterday.push(message);
      } else {
        categorized.previous7Days.push(message);
      }
    });

    setCategorizedMessages(categorized);
  };

  useEffect(() => {
    categorizeMessagesByDate();
  }, [saveddata]);

  return (
    <div style={{ height: 'calc(100vh - 100px)', overflowY: 'auto', overflowX:'hidden' }} >
    {saveddata ? 
      <>
      <h2 style={{width:'fit-content'}} className="m-2 px-4 rounded-xl mt-2 text-slate-200 bg-blue-700 hover:bg-violet-700">Today</h2>
      <ul>
        {categorizedMessages.today.map((message) => (
          <>
          <span className="mr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
          <button
            className="text-white p-2 truncate hover:bg-purple-800 rounded-xl w-full text-left"
            key={message.id}
            onClick={() => setclickedmessage(message.input_text.slice("Copywrite the following".length).trim())} // Call the prop function on click
          >
            {message.input_text.slice("Copywrite the following".length).trim()}
          </button>
          </>
        ))}
      </ul>

      <h2 style={{width:'fit-content'}} className="m-2 px-4 rounded-xl mt-2 text-slate-200 bg-blue-700 hover:bg-violet-700">Yesterday</h2>
      <ul>
        {categorizedMessages.yesterday.map((message) => (
          <>
          <span className="mr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-gray-700 dark:[&>svg]:fill-gray-300">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
          <button
            className="text-white p-2 truncate hover:bg-purple-800 rounded-xl w-full text-left"
            key={message.id}
            onClick={() => setclickedmessage(message.input_text.slice("Copywrite the following".length).trim())} // Call the prop function on click
          >
            {message.input_text.slice("Copywrite the following".length).trim()}
          </button></>
        ))}
      </ul>

      <h2 style={{width:'fit-content'}} className="m-2 px-4 rounded-xl mt-2 text-slate-200 bg-blue-700 hover:bg-violet-700">Previous 7 Days</h2>
      <ul>
        {categorizedMessages.previous7Days.map((message) => (
          <>
          <span className="mt-2 max-h-fit max-w-fit inline-block">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
          <button
            className="text-white p-1 truncate hover:bg-purple-800 rounded-xl  text-left inline-block"
            key={message.id}
            onClick={() => setclickedmessage(message.input_text.slice("Copywrite the following".length).trim())} // Call the prop function on click
          >
            {message.input_text.slice("Copywrite the following".length).trim()}
          </button>
          </>
        ))}
      </ul> </>: <>
      <p>no chats to display</p>
      </>
      }
    </div>
  );
};

export default OldChats;