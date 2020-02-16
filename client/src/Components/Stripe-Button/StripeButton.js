import React from "react";
import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // price in cents
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ARRs62BJKtfjfEV3KkqV4X4y00Mh63TIlf";

  // process the payment
  const onToken = token => {
    axios({
      method: "POST",
      url: "/payment",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        // eventually change this into an animated toast
        alert("Payment Successful!");
      })
      .catch(err => {
        console.error("Payment error!", JSON.parse(err));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Example Clothing E-Commerce Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
