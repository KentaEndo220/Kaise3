import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[350px] w-full">
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

        <h3 className="text-white text-[36px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <motion.div variants={textVariant()}>
          <h2 className="text-white font-[krona one] md:text-[55px] sm:text-[50px] xs:text-[40px] text-center">
            Our Services
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 max-w-7xl mx-auto text-[#FAFAFA] text-[33px] font-semibold  text-center"
        >
          Disrupting markets is old news, thinking smart and collaborating with
          innovators allows for integration and adaption of available technology
          to supercharge our ability to deliver results.
        </motion.p>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-20">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
