import React, { useState } from "react";
import {  toast } from 'react-toastify';

// Reusable PaymobPayment Component
const PaymobPayment = ({ amount, integrationID, children }) => {

  // Step 1: Get authentication token
  const callPaymob = async () => {
    if (isNaN(amount) || amount < 0) return toast.error("Must Enter A Valid Amount");

    try {
      const data = { amount, integration_id:integrationID };
      const host_url = process.env.NODE_ENV === 'development' 
        ? process.env.REACT_APP_BE_LOCAL_URL 
        : process.env.REACT_APP_BE_PROD_URL;
      const request = await fetch(`${host_url}/api/paymob/create-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const response = await request.json();
      console.log(response)
      window.location.href = response?.iframeUrl;

    } catch (error) {
      console.error("Error in firstStep:", error);
    }
  };

  // Start the payment process
  const handlePayment = () => {
    callPaymob();
  };

  return (
      <span onClick={handlePayment}>
        {children}
      </span>
  );
};

export default PaymobPayment;
