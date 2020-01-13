import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  // stripe uses price in cents
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_CBAMmsQ0I09iJG3Vg3s3bAAU00Ez8U0hYc";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment Successful");
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please use the credit card provided"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="crwn clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
