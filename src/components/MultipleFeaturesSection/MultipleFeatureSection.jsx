import React from "react";
import iphoneMockUp from "../../assets/Herosection Assets/iPhone_12_Pro_mockup_herosection.png";
import supportIcon from "../../assets/Feature Assets/24-support.svg";
import currencyIcon from "../../assets/Feature Assets/Currency Exchange.svg";
import MoneyIcon from "../../assets/Feature Assets/Money.svg";
import secuirtyIcon from "../../assets/Feature Assets/security-user.png";
import Card from "./Card/Card";
const MultipleFeatureSection = () => {
  return (
    <div className="w-full h-[1083px] py-[96px] px-[120px] hidden lg:flex flex-col items-center gap-[50px]">
      <h1 className=" font-inter font-bold text-[40px] leading-[48px]">
        Multiple Features we Offer
      </h1>
      <div className="flex flex-row gap-16 justify-between">
        <div className="w-full h-full  p-16 bg-[#F5F5F5] rounded-[20px] text-center flex items-center justify-center ">
          <img src={iphoneMockUp} alt="" />
        </div>
        <div className="w-[10px] h-full relative ">
          <div className="w-full h-[143px] bg-black absolute rounded-[100px] top-0"></div>
        </div>
        <div className="w-full h-full flex flex-col gap-6">
          <Card
            title="24*7 Customer Support"
            icon={supportIcon}
            description="Receive fast and friendly support from our knowledgeable customer support team whenever you need"
            color="#F5F5F5"
          />
          <Card
            title="Global Currency Exchange"
            icon={currencyIcon}
            description="Convert your money into the currency of your choice with competitive exchange rates"
          />
          <Card
            title="Bank-level Security"
            icon={secuirtyIcon}
            description="Rest easy knowing that your data and transactions are protected by the same level of security used"
          />
          <Card
            title="Multiple Payment Methods"
            icon={MoneyIcon}
            description="Choose from a variety of payment methods to suit your needs, including credit/debit cards, bank"
          />
        </div>
      </div>
    </div>
  );
};

export default MultipleFeatureSection;
