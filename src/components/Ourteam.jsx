import React from "react";

import ourteam from "../assets/projects/ourteam.svg";

const Ourteam = () => {
  return (
    <>
      <div className="flex flex-row justify-end bg-[#000000]">
        <div className="flex w-1/2">
          <div>
            <p className="pl-20 mt-[320px] text-[#FAFAFA] text-[55px] font-[krona one] text-left">
              Our team
            </p>
            <p className="text-[#FAFAFA] text-[32px] mt-5 pl-20 pr-24 font-semibold text-left">
              Since our inception, we’ve assembled a powerhouse team of experts
              in AI, blockchain, and full-stack development.
              <br />
              <br />
              We've helped startups secure investment, enterprises streamline
              operations, and visionary leaders bring their ideas to life.
            </p>
          </div>
        </div>
        <div className="flex w-1/2">
          <img
            className="w-full h-screen object-cover"
            src={ourteam}
            alt="A monkey representing innovation"
          />
        </div>
      </div>
    </>
  );
};

export default Ourteam;
