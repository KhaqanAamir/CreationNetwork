// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../Context/AuthContext";
// import Lottie from "react-lottie";
// import image_generator_img from "../Assets/Animations/image_generator_img.json";
// import image_generate_scanning from "../Assets/Animations/image_generate_scanning.json";

// const ImageGenerator = () => {
//   const baseurl = "https://web-production-73c6.up.railway.app";
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [text, setText] = useState("What Image would you like to generate?");
//   const [lottieAnimation, setLottieAnimation] = useState(image_generator_img);
//   const { token } = useContext(AuthContext);
//   const authToken = token;
//   const headers = {
//     Authorization: authToken,
//   };

//   // Simulated API response
//   const simulateApiResponse = async (message) => {
//     return axios
//       .post(
//         `${baseurl}/image_generator`,
//         { prompt: message },
//         {
//           headers: headers,
//         }
//       )
//       .then((response) => {
//         // Handle the API response data here
//         return response.data.image[0];
//       });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!inputMessage) return;

//     // Add the user's message to the chat
//     const userMessage = { text: inputMessage, user: "user", id: Date.now() };
//     console.log("User Message:", userMessage); // Debug line
//     setMessages((prevMessages) => [...prevMessages, userMessage]); // Update state
//     setInputMessage("");

//     try {
//       // Simulate an API request and response
//       setText("Your Requested Image is Loading...");
//       setLottieAnimation(image_generate_scanning);
//       const responseText = await simulateApiResponse(inputMessage);
//       const responseMessage = {
//         text: responseText,
//         user: "api",
//         id: Date.now() + 1,
//       };
//       console.log("API Response:", responseMessage); // Debug line
//       setMessages((prevMessages) => [...prevMessages, responseMessage]); // Update state with API response
//       setText("What Image would you like to generate?");
//       setLottieAnimation(image_generator_img);
//     } catch (error) {
//       // Handle API error here
//       const responseMessage = {
//         text: "Please try again later, unable to load your query",
//         user: "api",
//         id: Date.now() + 1,
//       };
//       console.log("API Error:", responseMessage); // Debug line
//       setMessages((prevMessages) => [...prevMessages, responseMessage]); // Update state with error message
//       // You can set an error message in the chat or handle it in your UI as needed
//     }
//   };
//   useEffect(() => {
//     // Scroll to the bottom of the chat when new messages arrive
//     if (messages.length > 0) {
//       const chatContainer = document.getElementById("chat-container");
//       if (chatContainer) {
//         chatContainer.scrollTop = chatContainer.scrollHeight;
//       }
//     }
//   }, [messages]);

//   return (
//     <div className="w-full flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly fixed h-full left-0 right-0 items-center bg-gray-200">
//       <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
//         {messages.length > 1 ? (
//           messages.map((message) => (
//             <div
//               key={message.id}
//               className="lg:w-full mt-4 sm:w-64 justify-center"
//             >
//               {message.user === "api" && (
//                 <img
//                   className="w-96 rounded-xl"
//                   src={message.text}
//                   alt="image"
//                 />
//               )}
//             </div>
//           ))
//         ) : (
//           <Lottie
//             options={{
//               loop: true,
//               autoplay: true,
//               animationData: lottieAnimation,
//               isClickToPauseDisabled: false,
//               rendererSettings: {
//                 preserveAspectRatio: "xMidYMid slice",
//               },
//             }}
//             height={400}
//             width={400}
//           />
//         )}
//       </div>

//       <div className="lg:w-1/4 sm:w-full flex items-center justify-center mt-8 lg:mt-0 h-56 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
//         <form onSubmit={handleSubmit} className="p-4 xl:pb-8 w-full mx-auto">
//           <h1 className="my-4 ml-2 text-center justify-center text-dark text-lg">
//             {text}
//           </h1>
//           <div className="flex">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1 bg-white text-black rounded-full px-4 outline-none"
//             />
//             <button
//               type="submit"
//               className="ml-2 bg-blue-500 text-white rounded-full px-4 py-3"
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>

//     // <>
//     //   <AppDrawer />
//     //   <div className="xl:ml-64 sm:ml-48 fixed h-full left-0 right-0">
//     //     <div className="w-full text-center h-full" id="content">
//     //       <div className="bg-gray-100 rounded-xl h-full">
//     //         <div className="flex flex-col h-[100vh]">
//     //           <div className="flex-1 overflow-auto px-4" id="chat-container">
//     //             <div className="space-y-4 p-4">
//     //               {messages.map((message) => (
//     //                 <div
//     //                   key={message.id}
//     //                   className={`flex ${
//     //                     message.user === "user"
//     //                       ? "justify-end"
//     //                       : "justify-start"
//     //                   }`}
//     //                 >
//     //                   {message.user === "user" ? (
//     //                     <div
//     //                       className={`${
//     //                         message.user === "user"
//     //                           ? "bg-blue-500"
//     //                           : "bg-green-500"
//     //                       } text-white px-4 py-2 rounded-lg`}
//     //                     >
//     //                       {message.text}
//     //                     </div>
//     //                   ) : (
//     //                     <img
//     //                       className="w-96 rounded-xl"
//     //                       src={message.text}
//     //                       alt="image"
//     //                     />
//     //                   )}
//     //                 </div>
//     //               ))}
//     //             </div>
//     //           </div>
//     //           <form onSubmit={handleSubmit} className="p-4 xl:pb-8">
//     //             <div className="flex">
//     //               <input
//     //                 type="text"
//     //                 value={inputMessage}
//     //                 onChange={(e) => setInputMessage(e.target.value)}
//     //                 placeholder="Type your message..."
//     //                 className="flex-1 bg-white text-black rounded-full px-4 outline-none"
//     //               />
//     //               <button
//     //                 type="submit"
//     //                 className="ml-2 bg-blue-500 text-white rounded-full px-4 py-3"
//     //               >
//     //                 Send
//     //               </button>
//     //             </div>
//     //           </form>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </>
//   );
// };

// export default ImageGenerator;
