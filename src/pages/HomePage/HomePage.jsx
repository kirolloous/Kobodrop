import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import PaymentApplicationSection from "../../components/PaymentApplicationSection/PaymentApplicationSection";
import MultipleFeatureSection from "../../components/MultipleFeaturesSection/MultipleFeatureSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <section>
      <HeroSection />
      <FeaturesSection />
      <PaymentApplicationSection />
      <MultipleFeatureSection />
      <CtaSection />
      <Footer />
    </section>
  );
};

export default HomePage;
