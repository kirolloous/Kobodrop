import React from "react";
import CoinLogo from "../../../assets/Testimonial Assets/coins.svg";
import PaymentFooter from "../../../assets/Testimonial Assets/payment_applications.png";
const FeaturesFooter = () => {
  return (
    <div className="w-full flex xl:flex-row flex-col gap-12 md:px-[80px] px-[15px]">
      <div className="xl:w-1/3 w-full xl:h-full h-fit bg-lightGold  rounded-[20px] flex flex-col justify-start items-start p-12 gap-8 ">
        <div className=" w-[96px] h-[96px] rounded-[200px] p-4 bg-[#F6E6CB] relative flex items-center justify-center">
          <img src={CoinLogo} alt="" className="" />
        </div>
        <div className="w-full flex flex-col gap-3">
          <h1 className=" font-inter font-semibold text-3xl text-darkCetaceanBlue">
            Bank level security
          </h1>
          <p className=" font-inter font-normal text-lg leading-[26px] text-lightDark ">
            Your money is 100% safe and secure on Kobodrop. No hassles, no
            glitches, get access to your money anytime.
          </p>
        </div>
      </div>
      <div className="xl:w-2/3 w-full xl:h-[400px] h-[600px]  bg-darkGray  flex xl:flex-row flex-col  rounded-[20px] md:justify-between  gap-10 overflow-hidden   ">
        <div className="md:p-12 px-6 pt-10 flex flex-col gap-3 ">
          <h1 className=" w-full font-inter font-semibold md:text-3xl text-[28px] text-cetaceanBlue ">
            Send, recieve and <br /> Exchange money
          </h1>
          <p className="font-inter font-normal text-lg leading-[26px] text-lightDark w-[316px] ">
            Paying your bills on Kobdrop has never been easier. Whether you are
            Transfers, payments all work on Kobodrop. Get your alert message
            immediately after a completed transaction.
          </p>
        </div>
        <div className=" w-full  relative   flex items-center   mt-12 px-12  ">
          <img
            src={PaymentFooter}
            alt=""
            className=" absolute md:bottom-0 top-0 md:top-auto  right-0   px-8   "
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesFooter;
