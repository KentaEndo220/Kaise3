import { motion } from "framer-motion";
import Earth from "./Earth";
import { useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  useEffect(() => {
    var typed = new Typed(".typing", {
      strings: ["AI", "MOBILE APPS", "WEBSITES", "BLOCKCHAIN"],
      loop: true,
      typeSpeed: 165,
      backSpeed: 165,
    });
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute z-50 inset-0 top-[120px] mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-col mt-10 md:mt-52">
          <h1
            className={`${styles.heroHeadText} text-white text-center md:text-left mt-10 ml-0 md:ml-8`}
          >
            WE&nbsp; BUILD&nbsp;&nbsp;{" "}
            <span className="text-[#6092CD] typing"></span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-5 md:mt-20 text-white-100 text-center md:text-left ml-0 md:ml-8`}
          >
            Kaise3 is at the forefront of technological evolution, driving
            <br /> <br />
            solutions that are as innovative as they are impactful.
            <br />
          </p>
          <button className="bg-[#151030] flex text-[2.3vh] w-full md:w-[20%] justify-center rounded-3xl mx-auto md:ml-16 p-1 mt-8 h-16">
            Speak to our team
          </button>
        </div>
      </div>
      <Earth />
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
