import React from "react";
import "./BasketItem.css";

export default function BasketItem(props) {
  const { name, seller, price, img, star, starCount, quantity, key } =
    props.cart;

  return (
    <div className="basket_item_product">
      <div className="basket_item_details">
        <p className="item_name">{name}</p>
      </div>
      <div className="">
        <div className="basket_item_image">
          <img src={img} alt="" />
          <div className="basket_item_rating">
            <p>Rating:</p>
            {Array(star)
              .fill(<p>🌟</p>)
              .map((star) => star)}{" "}
            <p>({starCount})</p>
          </div>
          <div className="basket_item_quantity">
            <p>
              <small>by: {seller}</small>
            </p>
            <p className="basket_item_price">
              <small>$</small>
              <strong className="basket_item_price">{price}</strong>
            </p>
            Quantity: <button className="arrow_btn">&#60;</button>
            {quantity}
            <button className="arrow_btn">&#62;</button>
          </div>
          <button
            className="arrow_btn"
            onClick={() => props.removeProduct(key)}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
}
