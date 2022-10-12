import React, { useState, useEffect } from "react";
import fakeData from "../fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../utilities/databaseManager";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";

function Checkout() {
  const [cart, setCart] = useState([]);

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  console.log(cart);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://visme.co/blog/wp-content/uploads/2020/12/Digital-Advertising-Banner-Design-Ideas-14.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        <div>
          {cart.map((pd) => {
            return <BasketItem cart={pd} removeProduct={removeProduct} />;
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default Checkout;
