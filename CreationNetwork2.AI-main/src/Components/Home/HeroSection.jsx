import HomeHeroSection from "../../Assets/Images/Home/Home_Hero_Section-Listening.png";
import FordLogo from "../../Assets/Images/Home/Ford_Logo.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="text-light bg-[url('Assets/Images/Home/Hero_Section_bg.png')] bg-repeat bg-cover mt-[-100px] pt-[120px] xl:pt-[200px]">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="xl:text-6xl font-bold leadi text-4xl">
              The
              <span className="dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-[#be40ff] to-[#6835f0]">
                {" "}
                Future Of Marketing
              </span>{" "}
              Is Here
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Ethan Is A Futuristic AI Assistant That Creates All Your Marketing
              Assets In Minutes!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/tools/copywriting"
                className="px-8 py-3 text-md font-semibold rounded uppercase bg-secondary rounded-3xl hover:translate-y-[-5px] hover: duration-100 hover:bg-secondary_hover"
              >
                Start for free
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={HomeHeroSection}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[450px] xl:h-112 2xl:h-128 mt-16"
            />
          </div>
        </div>
        <h1 className="text-center mt-20 text-xl text-gray-500">
          Used by over 36,000+ Entrepreneurs, Agencies & Marketers working with
          companies including
        </h1>
        <div className="flex justify-center p-16 flex-shrink">
          <img src={FordLogo} alt="Logo1" />
          <img src={FordLogo} alt="Logo2" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
