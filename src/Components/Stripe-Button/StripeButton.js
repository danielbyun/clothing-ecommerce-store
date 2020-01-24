import React from "react";
import PropTypes from "prop-types";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // price in cents
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ARRs62BJKtfjfEV3KkqV4X4y00Mh63TIlf";

  // where you process the payment
  const onToken = token => {
    console.log(token);

    // eventually change this into an animated toast
    alert("Payment Successful");
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

StripeCheckoutButton.propTypes = {};

export default StripeCheckoutButton;
