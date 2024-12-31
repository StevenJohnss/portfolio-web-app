import { React, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import PaymobPayment from "./PaymobPayment";

const PaymentCard = ({ title, description, icon, onClick }) => (
  <Tilt className="xs:w-[350px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-5" />
        <h3 className="text-white text-[20px] font-bold text-center mb-3">
          {title}
        </h3>
        <p className="text-secondary text-[14px] text-center">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Payment = () => {
  const [amount, setAmount] = useState();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Choose your preferred</p>
        <h2 className={styles.sectionHeadText}>Payment Method</h2>
      </motion.div>

      <div className="w-full flex flex-col mt-5 items-center">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[15px] max-w-2xl leading-[25px]"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 bg-tertiary rounded-2xl p-4 mb-4">
            <span className="text-white text-[20px] font-semibold">Amount:</span>
            <div className="relative flex-1">
              <input
                type="number"
                min={5}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full bg-primary py-2 px-4 text-[20px] text-white rounded-lg outline-none border-none font-medium"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                EGP
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-5 justify-center">
          <PaymobPayment amount={amount} integrationID={4913406}>
            <PaymentCard
              title="Card Payment"
              description="Secure payment via credit or debit card through Paymob"
              icon="/src/assets/tech/credit-card.png"
            />
          </PaymobPayment>

          {/* Keeping your commented PayPal section for reference */}
          {/* <PaymentCard
            title="PayPal"
            description="Quick and secure payment through PayPal (US Accounts Only)"
            icon="/src/assets/tech/paypal.png"
            onClick={() => {}}
          /> */}

          
          {/* <ServiceCard
            title={"paypal"}
            icon={"test"}
            button={
              paypal Not working with EG accounts but only With US account was working fine, this might be because banks refused paypal as it doesn't allwo an account with EGP as currncy in the wallet. 
              NO CODE CHANGES NEEDED. Just creat US account. But will need American LLC company. or american social security number (ssn).
              <PayPalButton amount={amount} onSuccess={handlePaymentSuccess} />
            }
          /> */}
          
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Payment, "payment", "page");