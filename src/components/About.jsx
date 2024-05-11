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
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-10 gap-10">
        <div className="w-full lg:w-3/4">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I am an adept software developer, well-versed in a variety of
            programming languages and frameworks. My primary focus is on Python
            and JavaScript, with specialized knowledge in frameworks such as
            Django, React.js and Node.js. Known for my quick learning ability, I
            actively engage with clients and technical consultants to craft
            efficient, scalable, and user-friendly solutions that effectively
            address real-world challenges. Let's collaborate to transform your
            ideas into reality!
          </motion.p>
        </div>
        <div className="w-full lg:w-1/4 ">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Education.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            <ul className="list-disc pl-4">
              <li>
                <b>Degree:</b> Bachelor of Science (B.Sc.) in 2019.
              </li>
              <li>
                <b>Institution:</b> Faculty of Informatics & Computer Science,
                British University in Egypt (BUE)
              </li>
              <li>
                <b>Major:</b> Computer Science.
              </li>
              <li>
                <b>Graduation Project:</b> Emergency Evacuation Process
                Simulator.
              </li>
            </ul>
          </motion.p>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
