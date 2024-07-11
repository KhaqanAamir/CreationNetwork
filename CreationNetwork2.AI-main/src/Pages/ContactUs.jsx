import React, {useEffect, useState} from "react";
// import backgroundImage from '../Assets/Images/bg1.jpg';
// import backgroundImage2 from '../Assets/Images/bg2.png';
// import Logo from '../Assets/Images/HeaderLogo.png';
// import user from '../Assets/Images/user.png';
import VideoSlider from "../Components/VideoSlider";
import Contact from '../Assets/Images/contact.png';
// import mul_users from '../Assets/Images/mul_users.png';
import whiteBg from '../Assets/Images/white-bg.png'
import Comments from "../Components/Comments";

const AboutUs = () =>{

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
         
          <div
            className="p-2 md:p-4"
          >

            
              <div className="md:col-span-1 flex flex-col items-center justify-center mt-9 mt-b md:mt-9 md:mb-9">
                <h1 className="text-4xl md:text-7xl font-bold text-white text-center  md: mb-4">
                Hello
                </h1>
                <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 text-center mt-6 mb-4">
                We’d Love To
                Hear From You
                </h1>
                <p className="text-lg md:text-2xl text-white text-center mt-4 md:mt-9 mb-6">
                Feel free to ask a question or simply leave a comment
                </p>
              </div>
            </div>
         
          </section>
          <div>
          <div className="text-black flex flex-col md:flex-row justify-center" style={{
              backgroundImage: `url(${whiteBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: 'cover'
            }}>
          <div className="text-black flex flex-col md:flex-row justify-center" >
  {/* Left Side (Contact Details) */}
  <div className="md:w-1/2 p-4"   >
    <h2 className="text-2xl font-semibold bg-white text-black p-2">Contact Us</h2>
    <ul className="mt-4">
      <li className="mb-2">
        <i className="fas fa-map-marker-alt mr-2"></i>123 Main Street, City
      </li>
      <li className="mb-2">
        <i className="fas fa-phone mr-2"></i>(123) 456-7890
      </li>
      <li className="mb-2">
        <i className="fas fa-envelope mr-2"></i>contact@example.com
      </li>
    </ul>
  </div>

  {/* Right Side (Image) */}
  <div className="md:w-1/2 p-4">
    <img
      src={Contact}
      alt="Contact Imge"
      className="w-full h-auto rounded-lg"
    />
  </div>
</div>
</div>
</div>
          
          <Comments/>
        <div className="bg-black">
        <VideoSlider/>
        </div>
  </>
);
}

export default AboutUs;