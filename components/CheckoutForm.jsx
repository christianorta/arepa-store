import React, {useState} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from "axios";
import styled from "@emotion/styled";

import Break from "./Break";
import BillingDetailsFields from "./BillingDetailsFields";
import SubmitButton from "./SubmitButton";
import CheckoutError from "./CheckoutError";
import paymentintent from '../pages/api/paymentintent';


const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #fff;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const CheckoutForm = ({ onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  
  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      }
    };

    setProcessingTo(true);
 
    const cardElement = elements.getElement(CardElement);

    try {
    const { data: ClientSecret } = await axios.post("/api/paymentintent", {
      amount: 250
    });
  
    const paymentMethodReq = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails
    });

    if (paymentMethodReq.error) {
      setCheckoutError(paymentMethodReq.error.message);
      setProcessingTo(false);
      return;
    }

    const {error} = await stripe.confirmCardPayment(ClientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id
    });
  
    if(error){
      setCheckoutError(error.message);
      setProcessingTo(false);
      return;
    }
  
    console.log("Succeeded:", ClientSecret, paymentMethodReq.paymentMethod.id); 

    onSuccessfulCheckout();
  } catch (err) {
    setCheckoutError(err.message);
  }
};

const iframeStyles = {
  base: {
    fontSize: "16px",
    color: "#2e3631", 
    "::placeholder": {
    color: "#cae3d3"
    }
  },
  invalid: {
    iconColor: "#f53390",
    color: "#f53390"
  },
  complete: {
    iconColor: "#2e3631",
  }
};
  
const CardElementOptions = {
  iconStyle: "solid",  
  style: iframeStyles,
  hidePostalCode: true
};
  
return (
  <form onSubmit={handleSubmit}>
    <Break>
      <BillingDetailsFields />
        <CardElementContainer>
          <CardElement 
          options={CardElementOptions}
          onChange={handleCardDetailsChange}
          />
        </CardElementContainer>
        </Break>
        {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
        <Break>
          <SubmitButton disabled={isProcessing || !stripe}>
            {isProcessing ? "Processing..." : `Place Order`}
          </SubmitButton>
        </Break>
      </form>
    );
};
  
export default CheckoutForm;
  