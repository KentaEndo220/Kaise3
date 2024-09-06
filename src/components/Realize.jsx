import React from "react";

import RealizeIcon from "../assets/projects/realize.svg";

const Realize = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-end bg-[#000000]">
        <div className="flex w-full md:w-1/2">
          <div className="pl-5 md:pl-20 mt-10 md:mt-[320px]">
            <p className="text-[#FAFAFA] text-[40px] sm:text-[50px] md:text-[55px] lg:text-[60px] xl:text-[65px] 2xl:text-[70px] font-[krona one] text-left">
              Realise your company's vision...
            </p>
            <p className="text-[#FAFAFA] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mt-5 pr-5 md:pr-24 font-semibold text-left">
              Brands that start thinking like innovators now will define the
              once-in-a-generation opportunities that are coming next.
              <br />
              <br />
              It's about more than NFTs, tokens, or chains. This is a seismic
              paradigm shift in consumer behavior that brands need to embrace,
              or they'll be left behind.
              <br /> <br />
              Claim your share of the future with Flight3.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-1/2">
          <img
            className="w-full h-auto md:h-screen object-cover"
            src={RealizeIcon}
            alt="A monkey representing innovation"
          />
        </div>
      </div>
    </>
  );
};

export default Realize;
