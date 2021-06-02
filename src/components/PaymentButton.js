import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_live_51HzlWcFFMiEVh3vskToWDl4qSwl82007MGiLyKXI6dH02xcBZw9GvLaqxd8KLhvHqDtkpJFEYEM6W2FMvp0UbwEF00iXRU8Hmu";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Donate"
      name="Direct expenses donation"
      billingAddress
      shippingAddress
      description={`This donation of ${price} goes towards helping directly with day to day expenses. i.e flight travel, volunteer vacination e.t.c`}
      amount={priceForStripe}
      panelLabel="Donate Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <button
        id="gallery-btn"
        className="rounded-3"
        style={{
          margin: 15
        }}
      >
        DONATE
      </button>

      <div
        style={{
          fontSize: 20,
          marginBottom: 15,
          fontStyle: "italic"
        }}
      >
        {`*These donations go toward keeping us going so that we can continue helping those that need us. Donate as little as £${price}`}
      </div>
    </StripeCheckout>
  );
};
