import EverythingSectionAnimation from "../../../Assets/Images/Home/Everything_Section_Animation.png";
const Animation = () => {
  return (
    <div className="flex-col lg:block hidden">
      <div className="flex  justify-end relative xl:-right-[230px] sm:-right-28 xl:pr-0 sm:pr-[50px] pb-2">
        <img
          src={EverythingSectionAnimation}
          alt=""
          className="object-contain animate-translateUp h-72 sm:h-96 xl:h-[650px] 2xl:h-128 lg:mt-40"
        />
        <img
          src={EverythingSectionAnimation}
          alt=""
          className="object-contain animate-translateDown h-72 sm:h-96 xl:h-[650px] 2xl:h-128 lg:mt-40"
        />
        <img
          src={EverythingSectionAnimation}
          alt=""
          className="object-contain animate-translateUp h-72 sm:h-96 xl:h-[650px] 2xl:h-128 lg:mt-40"
        />
      </div>
      <div className="flex justify-end relative xl:-right-[230px] sm:-right-28 xl:pr-0 sm:pr-[50px]">
        <img
          src={EverythingSectionAnimation}
          alt=""
          className="object-contain animate-translateUp h-72 sm:h-96 xl:h-[650px] 2xl:h-128"
        />
        <img
          src={EverythingSectionAnimation}
          alt=""
          className="object-contain animate-translateDown h-72 sm:h-96 xl:h-[650px] 2xl:h-128"
        />
        <img
          src={EverythingSectionAnimation}
          alt=""
          className="object-contain animate-translateUp h-72 sm:h-96 xl:h-[650px] 2xl:h-128"
        />
      </div>
    </div>
  );
};

export default Animation;
