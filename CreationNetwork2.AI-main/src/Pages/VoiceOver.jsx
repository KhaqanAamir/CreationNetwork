// import React, { useState, useContext } from "react";
// import axios from "axios";
// import Lottie from 'react-lottie';
// import animationData from '../Assets/Animations/animation_lmneme1m.json';
// import loadanimation from '../Assets/Animations/texttoaudio.json';
// import { AuthContext } from "../Context/AuthContext";
// import ReactAudioPlayer from 'react-audio-player';

// const voices = [
//     { voice_id: "21m00Tcm4TlvDq8ikWAM", name: "Rachel" },
//     { voice_id: "2EiwWnXFnvU5JabPnv8n", name: "Clyde" },
//     { voice_id: "AZnzlk1XvdvUeBnXmlld", name: "Domi" },
//     { voice_id: "CYw3kZ02Hs0563khs1Fj", name: "Dave" },
//     { voice_id: "D38z5RcWu1voky8WS1ja", name: "Fin" },
//     { voice_id: "EXAVITQu4vr4xnSDxMaL", name: "Bella" },
//     { voice_id: "ErXwobaYiN019PkySvjV", name: "Antoni" },
//     { voice_id: "GBv7mTt0atIp3Br8iCZE", name: "Thomas" },
//     { voice_id: "LcfcDJNUP1GQjkzn1xUU", name: "Emily" },
//     { voice_id: "MF3mGyEYCl7XYWbV9V6O", name: "Elli" },
//     { voice_id: "TX3LPaxmHKxFdv7VOQHJ", name: "Liam" },
//     { voice_id: "ThT5KcBeYPX3keUQqHPh", name: "Dorothy" },
//     { voice_id: "TxGEqnHWrfWFTfGW9XjX", name: "Josh" },
//     { voice_id: "VR6AewLTigWG4xSOukaG", name: "Arnold" },
//     { voice_id: "XB0fDUnXU5powFXDhCwa", name: "Charlotte" },
//     { voice_id: "XrExE9yKIg1WjnnlVkGX", name: "Matilda" },
//     { voice_id: "Yko7PKHZNXotIFUBG7I9", name: "Michael" },
//     { voice_id: "ZQe5CZNOzWyzPSCn5a3c", name: "James" },
//     { voice_id: "Zlb1dXrM653N07WRdFW3", name: "Joseph" },
//     { voice_id: "bVMeCyTHy58xNoL34h3p", name: "Jeremy" },
//     { voice_id: "flq6f7yk4E4fJM5XTYuZ", name: "Michael" },
//     { voice_id: "g5CIjZEefAph4nQFvHAz", name: "Ethan" },
//     { voice_id: "jBpfuIE2acCO8z3wKNLl", name: "Gigi" },
//     { voice_id: "jsCqWAovK2LkecY7zXl4", name: "Freya" },
//     { voice_id: "jsCqWAovK2LkecY7zXl4", name: "Grace" },
//     { voice_id: "oWAxZDx7w5VEj9dCyTzz", name: "Grace" },
//     { voice_id: "onwK4e9ZLuTAKqWW03F9", name: "Daniel" },
//     { voice_id: "pMsXgVXv3BLzUgSXRplE", name: "Serena" },
//     { voice_id: "pNInz6obpgDQGcFmaJgB", name: "Adam" },
//     { voice_id: "piTKgcLEGmPE4e6mEKli", name: "Nicole" },
//     { voice_id: "t0jbNlBVZ17f02VDIeMI", name: "Jessie" },
//     { voice_id: "wViXBPUzp2ZZixB1xQuM", name: "Ryan" },
//     { voice_id: "yoZ06aMxZJJ28mfd3POQ", name: "Sam" },
//     { voice_id: "z9fAnlkpzviPz146aGWa", name: "Glinda" },
//     { voice_id: "zcAOhNBS3c14rBihAFp1", name: "Giovanni" },
//     { voice_id: "zrHiDhphv9ZnVXBqCLjz", name: "Mimi" }
// ];

// const VoiceOver = () => {
//     const [selectedVoice, setSelectedVoice] = useState(voices[0].voice_id);
//     const [settings, setSettings] = useState({
//       stability: 50,
//       CSEnhancement: 50,
//       StyleExaggeration: 50,
//     });
//     const [selectedType, setSelectedType] = useState(1);
//     const [textInput, setTextInput] = useState("");
//     const [audioUrl, setAudioUrl] = useState("");
//     const [playing, setPlaying] = useState(false);
//     const [settingsVisible, setSettingsVisible] = useState();
//     const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
//     const [file, setFile] = useState(null);
//     const { token } = useContext(AuthContext);
//     const [isLoading, setIsLoading] = useState(false);
  
//     const baseurl = "https://web-production-73c6.up.railway.app";
  
//     const handleGenerateAudio = async () => {
//         setIsLoading(true);
//         setAudioUrl("");
//         console.log(token)
//         await fetch(`${baseurl}/voiceover`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `${token}`
//             },
//             body: JSON.stringify({
//                 voice_id: selectedVoice,
//                 prompt: textInput,
//                 stability: settings.stability/100,
//                 similarity_boost: settings.CSEnhancement/100,
//                 style: settings.stability/100,
//                 use_speaker_boost: selectedType,
//             })
//         })
//         .then(response => response.blob())
//         .then(audioBlob => {
//             setIsLoading(false);
//             const audioUrl = URL.createObjectURL(audioBlob);
//             console.log(audioUrl);
//             setAudioUrl(audioUrl);
//             setPlaying(true);
//         })
//         .catch(error => {
//             setIsLoading(false);
//             console.error("Error:", error);
//             alert("Error generating audio. Please try again.");
//         });
//     };
  
//     return (

//         isAnimationLoaded?
    
//       <div className="w-full bg-gray-100 flex fixed h-full left-0 right-0 items-center flex flex-col md:flex-row ">
     
//      <Lottie 
//       options={{
//           loop: true,
//           autoplay: true,
//           animationData: animationData,
//           rendererSettings: {
//             preserveAspectRatio: "xMidYMid slice"
//           }
//           }}

//     />
//         <div className="md:mr-9 w-full  max-w-2xl p-4 bg-white rounded-md shadow-md">
//         {/* max-w-md */}
//           <h1 className="text-3xl mb-4">Voice Over</h1>
  
//           <div className="mb-4">
//             <label className="mr-2">Select Voice:</label>
//             <select
//               value={selectedVoice}
//               onChange={(e) => setSelectedVoice(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 w-full"
//             >
//               {voices.map((voice) => (
//                 <option key={voice.voice_id} value={voice.voice_id}>
//                   {voice.name}
//                 </option>
//               ))}
//             </select>
//           </div>
  
//           {/* Voice Settings */}
//           <div className="mb-4">
//             <button className="text-blue-500" onClick={() => setSettingsVisible(!settingsVisible)}>
//               Voice Settings {settingsVisible? '˅' : '\>'}
//             </button>
//             {settingsVisible && (
//               <div>
//                 <div className="mb-2 mt-4">
//           <label className="mr-2">Stability:</label>
//           <span className="ml-2">{settings.stability}%</span>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
//             value={settings.stability}
//             onChange={(e) =>
//               setSettings({ ...settings, stability: parseInt(e.target.value) })
//             }
//           />
          
//         </div>

//         <div className="mb-2">
//           <label className="mr-2">Clarity + Similarity Enhancement:</label>
//           <span className="ml-2">{settings.CSEnhancement}%</span>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
//             value={settings.CSEnhancement}
//             onChange={(e) =>
//               setSettings({ ...settings, CSEnhancement: parseInt(e.target.value) })
//             }
//           />
          
//         </div>

//         <div className="mb-2">
//           <label className="mr-2">Style Exaggeration:</label>
//           <span className="ml-2">{settings.StyleExaggeration}%</span>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
//             value={settings.StyleExaggeration}
//             onChange={(e) =>
//               setSettings({ ...settings, StyleExaggeration: parseInt(e.target.value) })
//             }
//           />
          
//         </div>
        
//               </div>
//             )}
//           </div>
  
//           <div className="mb-4">
//             <label className="mr-2">Use Speaker Boost:</label>
//             <select
//               value={selectedType}
//               onChange={(e) => setSelectedType(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 w-full"
//             >
//               <option value={1}>Yes</option>
//               <option value={0}>No</option>
//             </select>
//           </div>
  
//           <div className="mb-4">
//             <label className="mr-2">Enter Text:</label>
//             <textarea
//               rows="4"
//               value={textInput}
//               onChange={(e) => setTextInput(e.target.value)}
//               className="border border-gray-300 rounded-md p-2 w-full"
//             />
//           </div>
//           {isLoading?
//               <div role="status" className="text-center block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
//               <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
//                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
//               </svg>
//               <span class="sr-only">Loading...</span>
//               </div>
//               :
//           <button
//             onClick={handleGenerateAudio}
//             className="w-full group relative h-12 w-48 overflow-hidden rounded-lg bg-gray-100 text-lg shadow"
//           >
//             <div class="absolute inset-0 w-3 bg-indigo-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
//             <span class="relative text-black group-hover:text-white">Generate Audio</span>
//           </button>
//           }
          
//         </div>
//         {playing && (
//         <div className="md:absolute bottom-0 w-full audio-player bg-gray-200 p-4">
//           <div className="flex flex-row justify-between">
//           <h2 className="text-2xl mb-2">Generated Audio:</h2>
//           {/* <button onClick={() => setFile(null)}>Download File</button> */}
//           </div>
//           {/* <audio controls className="w-full"> */}
//             {/* <audio controls src={audioUrl} type="audio/mp3" />
//             Your browser does not support the audio element.
//           </audio> */}
//           <ReactAudioPlayer
//           className="w-full"
//             src={audioUrl}
//             autoPlay
//             controls
//             />
//         </div>
//       )}
        
//       </div>
//      :


//      <div className="w-full bg-gray-100 flex fixed h-full left-0 right-0 items-center flex flex-col md:flex-row ">
     
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
     
//      </div>
//     );
//   };
  
//   export default VoiceOver;