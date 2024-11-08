import React from "react";
import supportIcon from "../../../assets/Feature Assets/24-support.svg";
const Card = ({ title, description, icon, color }) => {
  return (
    <div
      className={`max-h-[200px] flex flex-col gap-4 p-[20px] bg-[${color}] border-[#D5D7DA] border-[1px] rounded-[10px] justify-center  items-start drop-shadow-md shadow-sm`}
    >
      <img src={icon} alt="" width={30} />
      <h4 className="font-inter font-medium text-xl leading-[24px]">{title}</h4>
      <p className="font-inter font-normal text-xl leading-[24px]">
        {description}
      </p>
    </div>
  );
};

export default Card;
