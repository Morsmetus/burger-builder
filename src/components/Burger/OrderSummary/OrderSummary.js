import React from "react";
import Aux from "../../../hoc/Auxilary";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKeys => {
    return (
      <li key={igKeys}>
        <span
          style={{
            textTransform: "capitalize"
          }}
        >
          {igKeys}
        </span>{" "}
        : {props.ingredients[igKeys]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
          {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
