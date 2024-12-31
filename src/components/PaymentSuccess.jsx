import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(true);
  const [paymentStatus, setPaymentStatus] = React.useState(null);
  const [amountEGP, setAmountEGP] = React.useState(null);
  const [hmac, setHmac] = React.useState(null);

  useEffect(() => {
    // Log the query parameters to the console
    const queryParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(queryParams.entries());
    console.log("Payment Success Parameters:", params);

    // Check if the transaction is finished and determine success or failure
    const isPending = params.pending === 'true';
    const isSuccess = params.success === 'true';

    if (isPending) {
      setLoading(true);
    } else {
      setLoading(false);
      const amountCents = params.amount_cents;
      const amountEGP = amountCents ? (amountCents / 100).toFixed(2) : null;
      setAmountEGP(amountEGP);
      setPaymentStatus(isSuccess ? 'success' : 'failed');
      setHmac(params.hmac)
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className={`flex flex-col items-center justify-center h-screen  
      ${paymentStatus === 'failed'?'bg-red-100':'bg-green-100'} `}>
      {paymentStatus === 'failed' ? (
        <>
          <h1 className="text-3xl font-bold text-red-600">Payment Failed!</h1>
          <p className="mt-4 text-lg text-gray-700">Unfortunately, your payment could not be processed.</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
          <p className="mt-4 text-lg text-gray-700">Thank you for your payment.</p>
          <p className="mt-2 text-md text-gray-500">Your transaction has been completed successfully.</p>
        </>
      )}
      {amountEGP && (
        <p className="mt-2 text-md text-gray-500">Amount: {amountEGP} EGP</p>
      )}
    </div>
  );
};

export default PaymentSuccess; 