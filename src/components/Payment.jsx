import { React, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import PayPalButton from "./PayPalButton";

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

const handlePaymentSuccess = (order) => {
  console.log("Payment was successful!", order);
  // Handle success logic here, like updating the database or showing a confirmation message
};

const Payment = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <div className="w-full">
        <motion.div
          variants={textVariant()}
          className="mb-5 bg-hero-pattern bg-cover bg-no-repeat bg-center flex "
        >
          <h2
            className={
              "text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[25px]  "
            }
          >
            Amount:
          </h2>

          <input
            className="text-white ml-2 bg-hero-pattern bg-transparent border border-purple-500 bg-gray-800 rounded-lg shadow-lg max-w-full w-full md:text-[50px] sm:text-[50px] xs:text-[40px] text-[25px]"
            type="number"
            min={5}
            onChange={(e) => {
              console.log(e.target.value);
              setAmount(e.target.value);
            }}
            value={amount}
          />
          <span className="text-white ml-2 md:text-[50px] sm:text-[50px] xs:text-[40px] text-[25px]">
            $
          </span>
        </motion.div>

        <div className=" gap-10 h-full bg-white rounded-lg">
          <PayPalButton amount={amount} onSuccess={handlePaymentSuccess} />
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
