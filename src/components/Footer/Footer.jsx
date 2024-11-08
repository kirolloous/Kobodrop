import React from "react";
import footerLogo from "../../assets/Footer Assets/Logo.svg";
import Facebook from "../../assets/Footer Assets/Facebook.svg";
import LinkedIn from "../../assets/Footer Assets/LinkedIn.svg";
import Twitter from "../../assets/Footer Assets/Twitter.svg";
import GooglePlaylogo from "../../assets/Footer Assets/Google Play.svg";
import AppleLogo from "../../assets/Herosection Assets/Apple Store.svg";
const Footer = () => {
  return (
    <div className="w-full h-full md:pt-16 pt-12 pb-12  md:px-16 flex flex-col  items-center bg-darkNavy text-white gap-12 ">
      <div className="w-full flex flex-col md:flex-row md:px-14 px-4  md:gap-0 gap-12">
        <div className="md:w-1/3 flex flex-col gap-8">
          <div className=" flex flex-row gap-2">
            <img src={footerLogo} alt="" width={28} className="inline" />
            <h1 className=" font-spaceGrotesk font-bold text-xl leading-[22px]">
              Kobodrop
            </h1>
          </div>
          <p className=" font-inter font-normal text-[16px] leading-[24px] text-[#E4E7EC]">
            Start spending the smart way
          </p>
        </div>
        <div className=" md:w-2/3 w-full flex md:flex-row flex-col-reverse md:gap-0 gap-12">
          <div className="w-full flex flex-row gap-8 ">
            <div className=" w-full flex flex-col gap-4">
              <a
                href="#"
                className=" font-inter font-semibold text-[14px] leading-[20px] text-[#98A2B3]"
              >
                Product
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Overview
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Features
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Solutions
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Contact
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Releases
              </a>
            </div>
            <div className="w-full flex flex-col gap-4">
              <a
                href="#"
                className=" font-inter font-semibold text-[14px] leading-[20px] text-[#98A2B3]"
              >
                Resources
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Blog
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Newsletter
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Events
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Help Center
              </a>
              <a
                href="#"
                className=" font-inter font-medium text-base text-[#E4E7EC]"
              >
                Support
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4  md:items-end">
            <h2 className="font-inter font-medium text-base">Get the app</h2>
            <div className="md:w-fit   gap-3 flex  md:flex-col w-full items-center   ">
              <div className=" w-[148.5px]  h-[44px] rounded-[7px] border-[1px] border-darkGray flex">
                <div className="w-1/3 flex items-center justify-center">
                  <img src={AppleLogo} width={20} alt="" className="" />
                </div>
                <div className="flex flex-col justify-center  text-left gap-0 ">
                  <p className="text-white text-[9px] font-inter h-[7px] ">
                    Download on the
                  </p>
                  <h4 className="text-white text-[17px] font-inter h-[17px]">
                    App Store
                  </h4>
                </div>
              </div>
              <div className="w-[148.5px]  h-[44px] rounded-[7px] border-[1px] border-darkGray flex">
                <div className="w-1/3 flex items-center justify-center">
                  <img src={GooglePlaylogo} width={25} alt="" className="" />
                </div>
                <div className="flex flex-col justify-center  text-left gap-0 ">
                  <p className="text-white text-[9px] font-inter h-[7px] ">
                    GET IT ON
                  </p>
                  <h4 className="text-white text-[17px] font-inter h-[17px]">
                    Google Play
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:px-14 px-4">
        <div className="w-full flex flex-col md:flex-row md:justify-between border-t-[1px] border-[#475467] pt-8">
          <div className="flex flex-row md:hidden pb-4 gap-4">
            <p className="font-inter font-normal text-base text-[#98A2B3]">
              Terms
            </p>
            <p className="font-inter font-normal text-base text-[#98A2B3]">
              Privacy
            </p>
            <p className="font-inter font-normal text-base text-[#98A2B3]">
              Cookies
            </p>
          </div>
          <p className=" font-inter font-normal text-base text-[#98A2B3]">
            © 2023 Kobodrop. All rights reserved.
          </p>
          <div className="lg:flex flex-row hidden gap-6 ">
            <img src={Twitter} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Facebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
