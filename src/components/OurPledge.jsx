import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        /> */}

        <h3 className="text-white text-[16px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Pledge = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-[#000000]">
        <motion.div variants={textVariant()}>
          <h2 className="text-white font-[krona one] mt-44 md:text-[55px] sm:text-[50px] xs:text-[40px] text-center text-[30px]">
            Our pledge
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 max-w-7xl mx-auto text-secondary text-[33px] leading-[63px] text-center"
        >
          At Kaise3, we believe that those who think like innovators today will
          define the game-changing opportunities of tomorrow. This isn't just
          about AI, blockchain, or MVPs—it's about embracing a transformative
          shift in how businesses operate and grow. Those who fail to adapt will
          be left behind. Seize your share of the future with Kaise3.
        </motion.p>
      </div>
    </>
  );
};

export default Pledge;
