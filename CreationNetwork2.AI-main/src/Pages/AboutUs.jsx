import React, { useEffect, useState } from "react";
// import backgroundImage from '../Assets/Images/bg1.jpg';
import backgroundImage2 from "../Assets/Images/bg2.png";
import Logo from "../Assets/Images/HeaderLogo.png";
import Image1 from "../Assets/Images/image1.png";
import Image2 from "../Assets/Images/image2.png";
import Image3 from "../Assets/Images/image3.png";
import Image4 from "../Assets/Images/image4.png";
import bot from "../Assets/Images/A-closer-look-at-the-advantages-of-Chatbots.svg";
import VideoSlider from "../Components/VideoSlider";
// import user from '../Assets/Images/user.png';
import Comments from "../Components/Comments";

const AboutUs = () => {
  const [showImages, setShowImages] = useState(false);

  // Use useEffect to trigger the transition when the component mounts
  useEffect(() => {
    setShowImages(true);
  }, []);

  // const headingStyle = {
  //     fontFamily: 'Matter, sans-serif',
  //   };

  //   const textStyle = {
  //     fontFamily: 'Matter, sans-serif',
  //     color: "white"
  //   };

  return (
    <>
      <section className="text-light bg-[url('Assets/Images/bg1.png')] bg-repeat bg-cover mt-[-100px] pt-[100px] xl:pt-[100px]">
        <div className="p-6 md:p-9">
          <div className="md:grid md:grid-cols-4 gap-1">
            <div className="md:col-span-1">
              {/* <img
                src={Logo}
                className="w-full h-auto rounded-lg mb-9"
                alt="Logo"
              /> */}
            </div>
            <div className="md:col-span-2 flex flex-col items-center justify-center h-screen  md:mt-0">
              <h1 className="text-4xl md:text-7xl font-bold text-white text-center  md: mb-4">
                About Us
              </h1>
              <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 text-center mt-6 pb-4">
                Revolutionizing Marketing with AI
              </h1>
              <p className="text-lg md:text-2xl text-white text-center mt-4 md:mt-9 mb-6">
                We are MarketingBlocks, a trailblazing AI SaaS company shaping
                the future of marketing. Driven by the belief that every
                business deserves to thrive, we're revolutionizing the way
                marketing is done.
              </p>
            </div>
            <div className="md:col-span-1">
              <img
                src={bot}
                className="w-1/2 h-auto rounded-lg mt-9"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className="bg-black p-6 md:p-9"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="md:flex md:flex-wrap">
          <div className="w-full md:w-1/3">
            {showImages && (
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4 transition-transform transform scale-100">
                  <img
                    src={Image1}
                    alt="Img 1"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 p-4 transition-transform transform scale-100">
                  <img
                    src={Image2}
                    alt="Img 2"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full p-4 transition-transform transform scale-70">
                  <img
                    src={Image4}
                    alt="Img 4"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="w-full md:w-2/3 p-4">
            <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 rounded-lg p-6 text-white">
              <h1 className="text-xl md:text-2xl font-bold text-center">
                WE ARE ON A MISSION
              </h1>
            </div>
            <div className="flex flex-wrap mt-4 md:mt-14">
              <p className="text-base md:text-lg text-white mt-4 md:mt-9">
                Our mission is to empower businesses, freelancers, and marketing
                professionals to harness the full potential of AI. We're
                combining our passion for technology and marketing... ... to
                break down creative and execution barriers and transform the
                digital landscape.
              </p>
              <div className="w-full md:w-1/2 p-4">
                <p className="text-base md:text-lg text-white mt-4">
                  We've engineered our software to handle a myriad of marketing
                  tasks. From creating landing pages and promotional videos to
                  writing marketing copy and designing graphics - all in a
                  matter of minutes.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <p className="text-base md:text-lg text-white mt-4">
                  Since our inception, we have been committed to delivering
                  innovative solutions that simplify marketing and drive growth.
                  Today, our software is a game-changer for businesses,
                  freelancers, and agencies around the globe.
                </p>
              </div>
            </div>
            <div className="w-full p-4 transition-transform transform scale-70">
              <img
                src={Image3}
                alt="Img 3"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Comments />

      <div className="bg-black">
        <VideoSlider />
      </div>
    </>
  );
};

export default AboutUs;
