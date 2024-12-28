import React, { useEffect, useRef } from "react";

const PayPalButton = ({ amount, onSuccess }) => {
  const paypalRef = useRef(null); // Create a ref for the PayPal button container

  useEffect(() => {
    if (!paypalRef.current) return;

    // Remove any previously rendered PayPal buttons to avoid duplication
    paypalRef.current.innerHTML = "";

    window.paypal
      .Buttons({
        style: {
          layout: "vertical", // Options: "vertical" or "horizontal"
          color: "black", // Options: "gold", "blue", "silver", etc.
          shape: "pill", // Options: "rect" or "pill"
          label: "pay", // Options: "pay", "checkout", "buynow", etc.
          tagline: false, // Removes "Powered by PayPal"
          height: 50, // Adjust the button height
        },
        funding: {
          allowed: [window.paypal.FUNDING.CARD, window.paypal.FUNDING.PAYPAL], // Enable card and PayPal funding sources
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount, // Dynamically update the amount
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("Order captured: ", order);
          onSuccess(order); // Trigger the success callback
        },
        onError: (err) => {
          console.error("PayPal Checkout Error: ", err);
        },
      })
      .render(paypalRef.current); // Render PayPal button into the container
  }, [amount, onSuccess]); // Re-render only when amount or onSuccess changes

  return (
    <div
      style={{
        backgroundColor: "transparent", // Set a custom background color for the container
        padding: "10px",
        borderRadius: "12px", // Add rounded corners
        display: "flex",
        justifyContent: "center", // Center the button horizontally
        alignItems: "center", // Center the button vertically
      }}
    >
      <div
        ref={paypalRef}
        style={{
          width: "100%", // Match the width of the container
          maxWidth: "400px", // Set a maximum width
        }}
      ></div>
    </div>
  );
};

export default PayPalButton;
