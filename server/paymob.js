import express from "express"; 
const router = express.Router();
import fetch from 'node-fetch';
import crypto from 'crypto'

const API = process.env.PAYMOB_API_KEY; // Add your Paymob API Key here
const PAYMOB_HMAC = process.env.PAYMOB_HMAC; // Add your Paymob API Key here

// Helper Functions
const firstStep = async () => {
    const data = { api_key: API };
    const response = await fetch('https://accept.paymob.com/api/auth/tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result.token;
};

const secondStep = async (token, amountCents) => {
    const data = {
        auth_token: token,
        delivery_needed: 'false',
        amount_cents: amountCents,
        currency: 'EGP',
        items: [],
    };

    const response = await fetch('https://accept.paymob.com/api/ecommerce/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result.id;
};

const thirdStep = async (token, orderId, amountCents, integrationId) => {
    const data = {
        auth_token: token,
        amount_cents: amountCents,
        expiration: 3600,
        order_id: orderId,
        billing_data: {
            apartment: '803',
            email: 'claudette09@exa.com',
            floor: '42',
            first_name: 'Clifford',
            street: 'Ethan Land',
            building: '8028',
            phone_number: '+86(8)9135210487',
            shipping_method: 'PKG',
            postal_code: '01898',
            city: 'Jaskolskiburgh',
            country: 'CR',
            last_name: 'Nicolas',
            state: 'Utah',
        },
        currency: 'EGP',
        integration_id: integrationId,
    };

    const response = await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result.token;
};

// Routes
router.post('/create-payment', async (req, res) => {
    try {
        let { amount, integration_id } = req.body;
        amount=Number(amount)*100

        if (!amount || !integration_id) {
            return res.status(400).json({ error: 'amount and integration_id are required.' });
        }

        const token = await firstStep();
        const orderId = await secondStep(token, amount);
        const paymentToken = await thirdStep(token, orderId, amount, integration_id);

        const iframeUrl = `https://accept.paymob.com/api/acceptance/iframes/891016?payment_token=${paymentToken}`;
        res.json({ iframeUrl });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

function calculateHMAC(secretKey, dataString) {
  return crypto
    .createHmac('SHA512', secretKey) // Use 'sha512' as specified by Paymob
    .update(dataString)
    .digest('hex');
}

// Routes
router.post('/payment-success', async (req, res) => {
    try {
        const {
            amount_cents,
            created_at,
            currency,
            error_occured,
            has_parent_transaction,
            id,
            integration_id,
            is_3d_secure,
            is_auth,
            is_capture,
            is_refunded,
            is_standalone_payment,
            is_voided,
            order : { id: orderid },
            owner,
            pending,
            source_data: { pan, sub_type, type },
            success
        } = req.body.obj;

        // Concatenate the variables into a string if they exist
        const resultStringVars = [
            amount_cents,
            created_at,
            currency,
            error_occured,
            has_parent_transaction,
            id,
            integration_id,
            is_3d_secure,
            is_auth,
            is_capture,
            is_refunded,
            is_standalone_payment,
            is_voided,
            orderid,
            owner,
            pending,
            pan,
            sub_type,
            type,
            success
        ]
        
        let resultString=""
        const invalidVars = resultStringVars.filter(varValue => 
          varValue === null || varValue === undefined || varValue === 'extra'
        );

        if (invalidVars.length > 0) {
          console.error('Error: Invalid values found for the following variables:', invalidVars);
        } else {
          resultString = resultStringVars.join('');
          console.log('Result string:', resultString);
        }

        const receivedHMAC  = req.query.hmac;
        const computedHMAC = calculateHMAC(PAYMOB_HMAC, resultString);
        
        if (computedHMAC == receivedHMAC) {
          console.log('HMAC verification successful.');
          // Proceed with processing the callback data
          res.json({ hmac_status: "verified", result: resultString });
          // should send an email with the success details
          
        } else {
          console.log('HMAC verification failed.');
          // Handle the error accordingly
          res.json({ hmac_status: "unverified", result: resultString });
        }
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

// Export the router
export default router;