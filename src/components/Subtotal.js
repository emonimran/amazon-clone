import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal(props) {
  console.log(props.cart);
  const cart = props.cart;
  const totalPrice = cart.reduce(
    (total, cart) => total + cart.price * cart.quantity,
    0
  );
  const shippingCost = cart.reduce(
    (shippingCost, cart) => shippingCost + cart.shipping,
    0
  );
  const totalItem = cart.reduce(
    (totalItem, cart) => totalItem + cart.quantity,
    0
  );

  const subtotal = totalPrice + shippingCost;
  console.log(cart.length);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Product Price: {totalPrice.toFixed(2)}</p>
            <p>Shipping Cost: {shippingCost.toFixed(2)}</p>
            <p>
              Subtotal ({totalItem} items) : $
              <strong>{subtotal.toFixed(2)}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
