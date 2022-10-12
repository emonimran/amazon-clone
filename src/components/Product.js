import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function product(props) {
  const { key, img, name, seller, price, star, starCount } = props.product;

  return (
    <div className="product">
      <div className="product__info">
        <p>
          <Link to={"/product/" + key}>{name}</Link>
        </p>
        <p>
          <small>by: {seller}</small>
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={img} alt="" />
      <div className="product__rating">
        <p>Rating:</p>
        {Array(star)
          .fill(<p>🌟</p>)
          .map((star) => star)}{" "}
        <p>({starCount})</p>
      </div>
      {props.showAddToCart && (
        <button onClick={() => props.handleAddProduct(props.product)}>
          Add to Basket
        </button>
      )}
    </div>
  );
}

export default product;
