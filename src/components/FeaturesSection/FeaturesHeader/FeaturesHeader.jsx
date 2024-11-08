import React from "react";

const FeaturesHeader = () => {
  return (
    <div className="px-8 flex flex-col gap-5 justify-center items-center text-center">
      <h1 className=" font-inter font-semibold md:text-4xl text-3xl text-darkJungleGreen md:w-auto w-[240px]">
        Make every penny count
      </h1>
      <p className=" font-inter font-normal md:text-xl md:leading-[30px] md:w-[768px] text-[18px]">
        Spend smarter, lower your bills, get cashback on everything you buy,
        <br />
        and unlock credit to grow your business.
      </p>
    </div>
  );
};

export default FeaturesHeader;
