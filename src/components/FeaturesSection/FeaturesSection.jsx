import React from "react";

import FeaturesHeader from "./FeaturesHeader/FeaturesHeader";
import FeatureTestimonial from "./FeatureTestimonial/FeatureTestimonial";
import FeaturesFooter from "./FeaturesFooter/FeaturesFooter";
const FeaturesSection = () => {
  return (
    <div className="w-full xl:h-[1244px] md:h-[2300px]  py-24 flex flex-col justify-start gap-12">
      <FeaturesHeader />
      <FeatureTestimonial />
      <FeaturesFooter />
    </div>
  );
};

export default FeaturesSection;
