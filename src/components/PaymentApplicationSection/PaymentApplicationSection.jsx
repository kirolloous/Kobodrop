import React from "react";
import Airtel from "../../assets/Payment Method/Airtel.svg";
import Bedc from "../../assets/Payment Method/Bedc.svg";
import Dstv from "../../assets/Payment Method/Dstv.svg";
import IKEJA from "../../assets/Payment Method/IKEJA.svg";
import Klarna from "../../assets/Payment Method/Klarna.svg";
import Mastercard from "../../assets/Payment Method/Mastercard.svg";
import Mobile9 from "../../assets/Payment Method/Mobile9.svg";
import MTN from "../../assets/Payment Method/MTN.svg";
import Payoneer from "../../assets/Payment Method/Payoneer.svg";
import Stripe from "../../assets/Payment Method/Stripe.svg";
import VISA from "../../assets/Payment Method/VISA.svg";
import PayPal from "../../assets/Payment Method/PayPal.svg";
const PaymentApplicationSection = () => {
  return (
    <div className="w-full md:h-[572px] h-[512px] flex-col md:px-[72px] ">
      <div className="w-full bg-[#FAFAFA] md:py-24 py-16 flex flex-col items-center gap-16 text-center text-darkJungleGreen">
        <div className=" w-[768px] flex gap-3 flex-col items-center">
          <h1 className="  font-inter font-semibold md:text-4xl md:leading-[44px] text-3xl leading-[38px]">
            Transact seamlessly with...
          </h1>
          <p className="md:w-[600px] w-[340px] font-inter md:text-xl md:leading-[30px] text-lightGray text-bases ">
            Connect your other accounts to Kobodrop seamlessly. Kobodrop
            supports 200+ integrations with other payment platforms like stripe,
            paypal, payoneer and others
          </p>
        </div>
        <div className="w-full flex flex-col  items-center md:px-0 px-4">
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-6 text-center">
            <img src={Klarna} alt="" />
            <img src={Stripe} alt="" />
            <img src={PayPal} alt="" />
            <img src={Bedc} alt="" />
            <img src={Mastercard} alt="" />
            <img src={MTN} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-6 text-center">
            <img src={Airtel} alt="" />
            <img src={Payoneer} alt="" />
            <img src={VISA} alt="" />
            <img src={Mobile9} alt="" />
            <img src={IKEJA} alt="" />
            <img src={Dstv} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentApplicationSection;
