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
        <img src={icon} alt="Visa" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Payment = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 h-full">
        <div className="w-full">
          <motion.div variants={textVariant()} className="mb-5">
            <h2
              className={
                "text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[25px]"
              }
            >
              Payment Services:
            </h2>
          </motion.div>

          <ServiceCard
            key={1}
            index={1}
            title={"Card Services"}
            icon={"icon"}
          />
        </div>
      </div>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
       */}
    </div>
  );
};

export default SectionWrapper(Payment, "payment", "page");
