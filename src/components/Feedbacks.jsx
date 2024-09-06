import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-3xl xs:w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-2">
      <p className="text-white tracking-wider text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
        {testimonial}
      </p>
      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px] sm:text-[18px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px] sm:text-[14px] md:text-[16px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section
      className=" bg-tertiary rounded-[20px] mx-auto flex flex-col items-center justify-center"
      id="testimonials"
    >
      <div className="rounded-2xl min-h-[300px] flex items-center justify-center">
        <motion.div variants={textVariant()}>
          <h2 className="text-white font-[krona one] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
            Client Testimonials.
          </h2>
        </motion.div>
      </div>
      {/* Uncomment this section if you want to include the testimonials */}
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-col md:flex-row justify-center gap-5 md:gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
