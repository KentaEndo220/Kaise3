import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Arrow from "../assets/projects/arrow.svg";
import Arrow1 from "../assets/projects/arrow1.svg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[300px] 2xl:w-[350px]">
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
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[400px] flex justify-evenly items-center flex-col"
      >
        {/* <img 
          src={icon} 
          alt="web-development" 
          className="w-16 h-16 object-contain" 
        /> */}
        <h3 className="text-white text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <motion.div variants={textVariant()}>
          <h2 className="text-white font-[krona one] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[55px] xl:text-[60px] 2xl:text-[65px] text-center">
            Our Services
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 max-w-7xl mx-auto text-[#FAFAFA] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[33px] xl:text-[36px] 2xl:text-[40px] font-semibold text-center"
        >
          Disrupting markets is old news, thinking smart and collaborating with
          innovators allows for integration and adaption of available technology
          to supercharge our ability to deliver results.
        </motion.p>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          <img
            className="max-w-none w-32 sm:w-36 md:w-44 lg:w-48 xl:w-52"
            src={Arrow}
            alt="arrow"
          />

          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}

          <img
            className="max-w-none w-32 sm:w-36 md:w-44 lg:w-48 xl:w-52"
            src={Arrow1}
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
