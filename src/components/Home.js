import React from "react";
import "./Home.css";
import Product from "./Product";
import fakeData from "../fakeData";
import { useState, useEffect } from "react";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../utilities/databaseManager";

function Home(props) {
  const { cart, setCart } = props;

  const row1 = fakeData.slice(0, 4);
  const row2 = fakeData.slice(5, 9);
  const row3 = fakeData.slice(10, 14);
  const [products1, setProducts1] = useState(row1);
  const [products2, setProducts2] = useState(row2);
  const [products3, setProducts3] = useState(row3);

  // const handleAddProduct = (product) => {
  //   console.log("Product added", product);

  //   const newCart = [...cart, product];
  //   setCart(newCart);
  //   const sameProduct = newCart.filter((pd) => pd.key === product.key);
  //   const count = sameProduct.length;
  //   addToDatabaseCart(product.key, count);
  // };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    console.log(cartProducts);
    setCart(cartProducts);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const otherProduct = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...otherProduct, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        {products1.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="home__row">
        {products2.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="home__row">
        {products3.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>
    </div>
  );
}

export default Home;
