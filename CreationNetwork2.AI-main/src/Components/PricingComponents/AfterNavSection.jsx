import React from "react";

const AfterNavSection = () => {
  return (
<section className="text-light bg-black bg-cover bg-center mt-[-100px] pt-[100px] md:pt-[150px]">
  <div className="text-center p-4 md:p-0">
    <div className="mt-10 mb-12 sm:mb-20 md:mb-28 max-w-screen-md mx-auto overflow-x-hidden"> {/* Limit content width and hide horizontal overflow */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl mb-4 md:mb-6">Choose the plan that’s right for you</h1>
      <p className="text-base md:text-lg" style={{ color: "#86819f" }}>
        Put AI to work in your marketing and say <br /> goodbye to manually creating marketing assets
      </p>
    </div>
    <div className="mt-4 sm:mt-6 flex flex-col items-center"> {/* Center buttons and adjust margin */}
      <button className="mb-4 sm:mb-0 px-4 sm:px-6 py-2 w-full sm:w-auto">Monthly</button> {/* Make button full width on small screens */}
      <button className="px-4 sm:px-6 py-2 rounded-xl bg-secondary hover:bg-hover_color w-full sm:w-auto">Yearly</button>
    </div>
  </div>
</section>
  );
};

export default AfterNavSection;
