import React, { useState, useContext } from "react";
import AppDrawer from "../../Components/AppDrawer";
import { AuthContext } from "../../Context/AuthContext";
import Loader from "../../Components/Loader";

const Transcriber = () => {
  const [transcription, setTranscription] = useState({});
  const [file, setFile] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(AuthContext);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleTranscription = async () => {
    setIsLoading(true);
    if (!file) {
      alert("Please select a file to transcribe.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "https://web-production-73c6.up.railway.app/transcribe",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
            token    
          },
        }
      );

      if (response.ok) {
        setIsLoading(false);
        const data = await response.json();
        setTranscription(data.transcription || {});
      } else {
        alert("Transcription failed.");
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert("An error occurred.");
    }
  };



  return (

        <div className="py-12 text-center bg-gray-100 mx-[20px] my-[10px] rounded-xl">
          <div className="flex-auto flex-col ">
            <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded">
              <h1 className="text-2xl font-bold mb-4 text-center ">
                Audio/Video Transcription
              </h1>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">
                  Upload an Audio/Video File
                </h2>
                <input
                  type="file"
                  accept=".mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm"
                  onChange={handleFileChange}
                  className="mt-2 py-2 px-4 border rounded w-full"
                />
              </div>
              {isLoading?
              <Loader/>
              :
              <button
                onClick={handleTranscription}
                className={`bg-blue-500 text-white px-4 py-2 rounded w-full ${
                  !file ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!file}
              >
                Transcribe
              </button>
              }
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Transcription Result</h2>
                <p className="mt-2 text-left">
                  {typeof transcription.text === "string"
                    ? readMore
                      ? transcription.text
                      : `${transcription.text.slice(0, 200)}...`
                    : "Transcription not available"}
                </p>
                {typeof transcription.text === "string" &&
                  transcription.text.length > 200 && (
                    <button
                      onClick={() => setReadMore(!readMore)}
                      className="text-blue-500  focus:outline-none active:#563cfb"
                    >
                      {readMore ? "Read Less" : "Read More"}
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
  );
};

export default Transcriber;
