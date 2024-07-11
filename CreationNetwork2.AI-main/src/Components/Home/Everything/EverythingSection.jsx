import ArrowRight from "../../../Assets/Images/Home/Arrow_Right.png";
import Animation from "./Animation";
const EverythingSection = () => {
  return (
    <div className="bg-[url('Assets/Images/Home/Everything_Section_Bg.png')] bg-cover overflow-hidden">
      <section className="dark:bg-gray-800 text-light xl:my-[-200px] xl:px-64 sm:py-16 sm:mb-[-400px]">
        <div className="container flex flex-col justify-center sm:justify-start mx-auto lg:flex-row lg:justify-between">
          <div className="flex flex-col xl:justify-center sm:justify-start rounded-sm lg:max-w-sm xl:ml-[-50px] sm:ml-[-30px] sm:pr-[400px] xl:max-w-lg lg:text-left lg:pr-0 lg:mt-[-50px] py-8">
            <h1 className="xl:text-5xl font-bold leadi lg:text-5xl text-2xl lg:px-0 px-4">
              Ethan does
              <br /> EVERYTHING for you
            </h1>
            <p className="mt-6 mb-8 lg:text-lg text-sm sm:mb-12 sm:text-sm lg:px-0 px-4">
              Ethan has been trained to be a solution to all your marketing
              assets needs.
              <br />
              <br />
              ‍ No need to spend thousands of dollars and waste time on
              untrustworthy freelancers or over-complicated tools.
              <br />
              <br />
              Ethan does everything for you, plus you have 100% control with the
              inbuilt AI tools.
              <br />
              <br />
              What would take you days or even weeks to do, is now possible in
              just a few minutes with AI.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="py-3 text-md text-[#efc07e] font-bold uppercase rounded-3xl flex lg:px-0 px-4"
              >
                Start for Free
                <img
                  className="translate-x-[-5px] text-[#efc07e]"
                  src={ArrowRight}
                  style={{
                    marginLeft: "30px",
                  }}
                />
              </a>
            </div>
          </div>
          <Animation />
        </div>
      </section>
    </div>
  );
};

export default EverythingSection;
