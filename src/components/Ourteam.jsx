import React from "react";

import ourteam from "../assets/projects/ourteam.svg";

const Ourteam = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-end bg-[#000000]">
        <div className="flex w-full md:w-1/2">
          <div className="pl-5 md:pl-20 mt-10 md:mt-[320px]">
            <p className="text-[#FAFAFA] text-[30px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-[krona one] text-left">
              Our team
            </p>
            <p className="text-[#FAFAFA] text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] xl:text-[36px] mt-5 pr-5 md:pr-24 font-semibold text-left">
              Since our inception, we’ve assembled a powerhouse team of experts
              in AI, blockchain, and full-stack development.
              <br />
              <br />
              We've helped startups secure investment, enterprises streamline
              operations, and visionary leaders bring their ideas to life.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-1/2">
          <img
            className="w-full h-auto md:h-screen object-cover"
            src={ourteam}
            alt="A monkey representing innovation"
          />
        </div>
      </div>
    </>
  );
};

export default Ourteam;
