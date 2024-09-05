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
    className="bg-black-200 p-10 rounded-3xl xs:w-[620px] h-[720px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
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
      className="h-screen bg-tertiary rounded-[20px] mx-auto flex flex-col items-center justify-center"
      id="testimonials"
    >
      <div
        className={`rounded-2xl min-h-[300px] flex items-center justify-center`}
      >
        <motion.div variants={textVariant()}>
          <h2 className="text-white font-[krona one] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Client Testimonials.
          </h2>
        </motion.div>
      </div>
      {/* Uncomment this section if you want to include the testimonials */}
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex justify-center gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
// export default SectionWrapper(Feedbacks, "testimonials");
