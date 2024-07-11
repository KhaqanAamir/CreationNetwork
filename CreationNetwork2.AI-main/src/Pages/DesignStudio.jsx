// import React, { useState, useContext } from "react";
// import AppDrawer from "../Components/AppDrawer";
// import axios from "axios";
// import Lottie from "react-lottie";
// import loadanimation from '../Assets/Animations/graphicdesignloading.json';
// import logoanimation from '../Assets/Animations/logoanimation.json';
// import graphicsanimation from '../Assets/Animations/graphicsanimation.json';
// import { AuthContext } from "../Context/AuthContext";

// const DesignStudio = () => {

//   const baseurl = "https://web-production-73c6.up.railway.app";
//   const [step, setStep] = useState(0);
//   const [designType, setDesignType] = useState(""); // "logo" or "graphics"
//   const [designInfo, setDesignInfo] = useState({
//     color: "",
//     companyName: "",
//     tagline: "",
//     description: "",
//   });
//   const [generatedImageUrl, setGeneratedImageUrl] = useState("");
//   const [errors, setErrors] = useState({
//     color: "",
//     companyName: "",
//     tagline: "",
//     description: "",
//   });
//   const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
//   const [loadingAnimation, setLoadingAnimation] = useState(true);
//   const [isHovered1, setIsHovered1] = useState(true);
//   const [isHovered2, setIsHovered2] = useState(false);
//   const { token } = useContext(AuthContext);

//   const steps = [
//     {
//       title: "Select Design Type",
//       content: (
//         <>
//          <div className="flex flex-col items-center justify-center ">
//            {isHovered1 && (
//               <div className="relative">
//                 <Lottie 
//                   options={{
//                       loop: true,
//                       autoplay: true,
//                       animationData: logoanimation,
//                       isClickToPauseDisabled:false,
//                       rendererSettings: {
//                         preserveAspectRatio: "xMidYMid slice"
//                       }
//                       }}
                      
//                   height={300}
//                   width={300}
//                 />
//               </div>
//             )}
//             {isHovered2 && (
//             <div className="relative">
//               <Lottie 
//                   options={{
//                       loop: true,
//                       autoplay: true,
//                       animationData: graphicsanimation,
//                       isClickToPauseDisabled:false,
//                       rendererSettings: {
//                         preserveAspectRatio: "xMidYMid slice"
//                       }
//                       }}
                      
//                   height={300}
//                   width={300}
//                 />
//             </div>
//       )}
     
//         <button
//           onClick={() => {
//             setDesignType("logo");
//             setStep(1);
//           }}
//           onMouseEnter={() => {
//             setIsHovered1(true)
//             setIsHovered2(false)
//           }
//           }
//           onMouseLeave={() => 
//             {
//               setIsHovered1(false)
//               setIsHovered2(true)
//             }
//           }
//           className={`bg-${isHovered2 ? "gradient-to-br" : "white"} from-yellow-400 to-yellow-600 h-16 w-64 rounded-full shadow-2xl cursor-pointer overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out mb-4`}
//         >
//           <span className={`text-${isHovered1 ? "black" : "white"} text-center font-semibold`}>Logo</span>
//         </button>
      
//         <button
//           onClick={() => {
//             setDesignType("graphics");
//             setStep(1);
//           }}
//           onMouseEnter={() => {
//             setIsHovered2(true)
//             setIsHovered1(false)
//           }
//           }
//            onMouseLeave={() => 
//             {
//             setIsHovered1(true)  
//             setIsHovered2(false)
//            }
//           }
//           className={`bg-${isHovered1 ? "gradient-to-br" : "white"} text-white from-blue-400 to-blue-600 h-16 w-64 rounded-full shadow-2xl cursor-pointer overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out`}
//         >
//           <span className={`text-${isHovered2 ? "black" : "white"} text-center  font-semibold`}>Graphics</span>
//         </button>
//       </div>
//       </>
//       ),
//     },
//     {
//       title: "Select Color",
//       content: (
//         <div className="flex flex-col justify-center items-center h-full mt-8">
//           {/* <h2 className="text-4xl font-semibold mb-8">Select Color</h2> */}
//           <input
//             type="color"
//             value={designInfo.color || ""}
//             onChange={(e) =>
//               setDesignInfo({ ...designInfo, color: e.target.value })
//             }
//             onBlur={() => {
//               if (!designInfo.color) {
//                 setErrors({ ...errors, color: "Color is required." });
//               } else {
//                 setErrors({ ...errors, color: "" });
//               }
//             }}
//             className={`w-20 h-20 rounded-full mb-4 ${
//               errors.color ? "border-red-500" : ""
//             }`}
//           />
//           {errors.color && (
//             <p className="text-red-500 text-base">{errors.color}</p>
//           )}
//           <button
//             onClick={() => {
//               if (!errors.color) {
//                 setStep(2);
//               }
//             }}
//             className={`px-10 py-4 rounded-full bg-${isHovered1 ? "yellow" : "blue"}-500 hover:bg-${isHovered1 ? "blue" : "yellow"}-500 text-white font-semibold text-2xl `}
//           >
//             Next
//           </button>
//         </div>
//       ),
//     },
//     {
//       title: "Enter Company Name",
//       content: (
//         <div className="flex flex-col justify-center items-center h-full mt-8">
//           {/* <h2 className="text-4xl font-semibold mb-8">Enter Company Name</h2> */}
//           <input
//             type="text"
//             placeholder="Company Name"
//             value={designInfo.companyName || ""}
//             onChange={(e) =>
//               setDesignInfo({ ...designInfo, companyName: e.target.value })
//             }
//             onBlur={() => {
//               if (!designInfo.companyName) {
//                 setErrors({
//                   ...errors,
//                   companyName: "Company Name is required.",
//                 });
//               } else {
//                 setErrors({ ...errors, companyName: "" });
//               }
//             }}
//             className={`px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-600 text-2xl mb-4 ${
//               errors.companyName ? "border-red-500" : ""
//             }`}
//           />
//           {errors.companyName && (
//             <p className="text-red-500 text-base">{errors.companyName}</p>
//           )}
//           <button
//             onClick={() => {
//               if (!errors.companyName) {
//                 setStep(3);
//               }
//             }}
//             className={`px-10 py-4 rounded-full bg-${isHovered1 ? "yellow" : "blue"}-500 hover:bg-${isHovered1 ? "blue" : "yellow"}-500 text-white font-semibold text-2xl `}
//           >
//             Next
//           </button>
//         </div>
//       ),
//     },
//     {
//       title: "Enter Tagline",
//       content: (
//         <div className="flex flex-col justify-center items-center h-full mt-8">
//           {/* <h2 className="text-4xl font-semibold mb-8">Enter Tagline</h2> */}
//           <input
//             type="text"
//             placeholder="Tagline"
//             value={designInfo.tagline || ""}
//             onChange={(e) =>
//               setDesignInfo({ ...designInfo, tagline: e.target.value })
//             }
//             onBlur={() => {
//               if (!designInfo.tagline) {
//                 setErrors({
//                   ...errors,
//                   tagline: "Tagline is required.",
//                 });
//               } else {
//                 setErrors({ ...errors, tagline: "" });
//               }
//             }}
//             className={`px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-600 text-2xl mb-4 ${
//               errors.tagline ? "border-red-500" : ""
//             }`}
//           />
//           {errors.tagline && (
//             <p className="text-red-500 text-base">{errors.tagline}</p>
//           )}
//           <button
//             onClick={() => {
//               if (!errors.tagline) {
//                 setStep(4);
//               }
//             }}
//             className={`px-10 py-4 rounded-full bg-${isHovered1 ? "yellow" : "blue"}-500 hover:bg-${isHovered1 ? "blue" : "yellow"}-500 text-white font-semibold text-2xl `}
//           >
//             Next
//           </button>
//         </div>
//       ),
//     },
//     {
//       title: "Enter Description",
//       content: (
//         <div className="flex flex-col justify-center items-center h-full mt-8">
//           {/* <h2 className="text-4xl font-semibold mb-8">Enter Description</h2> */}
//           <textarea
//             rows="4"
//             placeholder="Description"
//             value={designInfo.description || ""}
//             onChange={(e) =>
//               setDesignInfo({ ...designInfo, description: e.target.value })
//             }
//             onBlur={() => {
//               if (!designInfo.description) {
//                 setErrors({
//                   ...errors,
//                   description: "Description is required.",
//                 });
//               } else {
//                 setErrors({ ...errors, description: "" });
//               }
//             }}
//             className={`px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-600 text-2xl mb-4 ${
//               errors.description ? "border-red-500" : ""
//             }`}
//           />
//           {errors.description && (
//             <p className="text-red-500 text-base">{errors.description}</p>
//           )}
//           <button
//             onClick={() => {
//               if (!errors.description) {
//                 setLoadingAnimation(false);
//                 handleGenerateDesign();
//               }
//             }}
//             className={`px-10 py-4 rounded-full bg-${isHovered1 ? "yellow" : "blue"}-500 hover:bg-${isHovered1 ? "blue" : "yellow"}-500 text-white font-semibold text-2xl `}
//           >
//             Generate
//           </button>
//         </div>
//       ),
//     },
//     {
//       title: "Generated Design",
//       content: (
//         <div className="flex flex-col justify-center items-center h-full">
//           {/* <h2 className="text-4xl font-semibold mb-8">Generated Design</h2> */}
//           <img
//             src={generatedImageUrl}
//             alt="Generated Design"
//             className="w-1/2 h-1/2 rounded-lg shadow-md mb-4"
//           />
//           <button
//             onClick={()=>{
//                   var imageUrl = generatedImageUrl;
                
//                 // Create an anchor tag for download
//                 var downloadLink = document.createElement('a');
//                 downloadLink.href = imageUrl;
                
//                 // Set the download attribute to specify the filename
//                 downloadLink.download = 'generated_image.jpg';
                
//                 // Simulate a click on the anchor tag to trigger the download
//                 downloadLink.click();
              
//             }}
//             download="generated-design.png"
//             className="text-white hover:text-indigo-900 text-2xl font-semibold mb-4"
//           >
//             Download
//           </button>
//           <button
//             onClick={() => {
//               setStep(0);
//               setDesignInfo({
//                 color: "",
//                 companyName: "",
//                 tagline: "",
//                 description: "",
//               });
//               setErrors({
//                 color: "",
//                 companyName: "",
//                 tagline: "",
//                 description: "",
//               });
//               setGeneratedImageUrl("");
//             }}
//             className={`px-10 py-4 hover:text-indigo-800 rounded-full bg-${isHovered1 ? "yellow" : "blue"}-500 hover:bg-${isHovered1 ? "blue" : "yellow"}-500 text-white font-semibold text-2xl `}
//           >
//             Restart
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const handleGenerateDesign = async () => {
    
//     let data ={};

//     if(designType=="logo"){
//         data = {
//             prompt:
//               "Act as a logo maker and give me a logo for a company named " +
//               designInfo.companyName +
//               " with its tagline being " +
//               designInfo.tagline +
//               ". Its description is " +
//               designInfo.description +
//               ". Use the color " +
//               designInfo.color +
//               " and the logo should have a white background",
//           };
//     }
//     else{
//     data = {
//         prompt:
//           "Act as a graphics designer and give me a poster for a company named " +
//           designInfo.companyName +
//           " with its tagline being " +
//           designInfo.tagline +
//           ". Description to make poster is " +
//           designInfo.description +
//           ". Use the color " +
//           designInfo.color
//       };
//     }

//       try {
//         const authToken = token;
//         const headers = {
//           Authorization: `${authToken}`,
//         };
      
//         const response = await axios.post(`${baseurl}/design_generator`, data, {
//           headers: headers,
//         });
      
//         setGeneratedImageUrl(response.data.images[0]);
//         console.log(generatedImageUrl)
//         setStep(5);
//         setLoadingAnimation(true);
//         console.log('Sign Up API response', response.data);
//       } catch (error) {
//         setLoadingAnimation(true);
//         console.log(data.description)
//         console.error(error);
//       }

//   };

//   return (
//     loadingAnimation? (isAnimationLoaded?
//     <>
     
//             <div className={`design-generator p-8 min-h-screen flex flex-col justify-center items-center bg-${isHovered1 ? "yellow" : "blue"}-500 transition-all duration-500`}>
//             <h1 className={` text-3xl mb-4 text-wrap w-44 rounded  bg-${isHovered1 ? "yellow" : "blue"}-500 text-center font-semibold text-white transition-all duration-500`}>{steps[step].title}</h1>
//               {steps[step].content}

//               {step !== 0 && step !== 6 && (
//                 <div className="absolute top-9 left-9">
//                   <button
//                     onClick={() => setStep(step - 1)}
//                     className={`px-4 py-2 rounded-full bg-${isHovered1 ? "yellow" : "blue"}-500 text-white  font-semibold text-lg `}
//                   >
//                     Back
//                   </button>
//                 </div>
//               )}
//             </div>
//     </>
//     :


//     <div className="w-full bg-gray-100 flex fixed h-full left-0 right-0 items-center flex flex-col md:flex-row ">

//     <Lottie 
//       options={{
//           loop: 0,
//           autoplay: true,
//           animationData: loadanimation,
//           isClickToPauseDisabled:false,
//           rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice"
//           }
//           }}
//       eventListeners={[{
//         eventName: 'complete',
//         callback: () => setIsAnimationLoaded(true)
//       }]}
//     />
    
//     </div>
//     )
//     : 


//     <div className="w-full bg-gray-100 flex fixed h-full left-0 right-0 items-center flex flex-col md:flex-row ">
   
//     <Lottie 
//       options={{
//           loop: true,
//           autoplay: true,
//           animationData: loadanimation,
//           isClickToPauseDisabled:false,
//           rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice"
//           }
//           }}
//     />
    
//     </div>
    
//   );
// };

// export default DesignStudio;
