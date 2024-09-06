import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] w-full">
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
        className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-8 md:px-10 lg:px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* Uncomment this if you want to include the icon */}
        {/* <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        /> */}
        <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Pledge = () => {
  return (
    <div className="flex flex-col items-center bg-[#000000] p-5 md:p-10">
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-[krona one] mt-20 md:mt-44 text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] text-center">
          Our Pledge
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-7xl mx-auto text-secondary text-[20px] sm:text-[25px] md:text-[30px] lg:text-[33px] leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[63px] text-center"
      >
        At Kaise3, we believe that those who think like innovators today will
        define the game-changing opportunities of tomorrow. This isn't just
        about AI, blockchain, or MVPs—it's about embracing a transformative
        shift in how businesses operate and grow. Those who fail to adapt will
        be left behind. Seize your share of the future with Kaise3.
      </motion.p>
    </div>
  );
};

export default Pledge;
