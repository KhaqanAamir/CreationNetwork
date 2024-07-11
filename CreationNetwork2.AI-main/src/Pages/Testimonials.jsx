import React, {useEffect, useState} from "react";
import backgroundImage from '../Assets/Images/bg1.jpg';
import Comments from "../Components/Comments";
import VideoGallery from "../Components/VideoGallery";

const AboutUs = () =>{

    const [showImages, setShowImages] = useState(false);

    // Use useEffect to trigger the transition when the component mounts
    useEffect(() => {
      setShowImages(true);
    }, []);

    const headingStyle = {
        fontFamily: 'Matter, sans-serif',
      };
    
      const textStyle = {
        fontFamily: 'Matter, sans-serif',
        color: "white"
      };

      return (
        <>
        <section className="text-light bg-[url('Assets/Images/bg1.png')] bg-repeat bg-cover mt-[-100px] pt-[100px] xl:pt-[100px]">
          <div
            className=" p-2 md:p-4"
          >

            
              <div className="md:col-span-1 flex flex-col items-center justify-center mt-9 mt-b md:mt-9 md:mb-9">
                <h1 className="text-4xl md:text-7xl font-bold text-white text-center  md: mb-4">
                Aw! We Are Blushing
                </h1>
                <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 text-center mt-6 mb-4">
                More Than 20k People Cannot Be Wrong!
                </h1>

              
                <a
                  href="/SignUp"
                  className="group relative rounded-lg p-6 text-white overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 rounded-lg group-hover:from-purple-600 group-hover:to-purple-500"></span>
                  <span className="relative z-10">Get Started!</span>
                </a>

                </div> 
                  </div>
                  </section>
          <div>
      
          <VideoGallery/>
        </div>
          
          <Comments/>

  </>
);
}

export default AboutUs;