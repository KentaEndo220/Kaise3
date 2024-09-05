import React from "react";

import RealizeIcon from "../assets/projects/realize.svg";

const Realize = () => {
  return (
    <>
      <div className="flex flex-row justify-end bg-[#000000]">
        <div className="flex w-1/2">
          <div>
            <p className="pl-20 mt-[320px] text-[#FAFAFA] text-[55px] font-[krona one] text-left">
              Realise your companies vision...
            </p>
            <p className="text-[#FAFAFA] text-[32px] mt-5 pl-20 pr-24 font-semibold text-left">
              Brands that start thinking like innovators now will define the
              once-in-a-generation opportunities that are coming next.
              <br />
              <br />
              It's about more than NFTs, tokens or chains. This is a seismic
              paradigm shift in consumer behaviour that brands need to embrace,
              or they'll be left behind
              <br /> <br />
              Claim your share of the future with Flight3.
            </p>
          </div>
        </div>
        <div className="flex w-1/2">
          <img
            className="w-full h-screen object-cover"
            src={RealizeIcon}
            alt="A monkey representing innovation"
          />
        </div>
      </div>
    </>
  );
};

export default Realize;
