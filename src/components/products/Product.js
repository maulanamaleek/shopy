import React from "react";

export default function Product(props) {
  return (
    <form className="product-container">
      <img src={props.image} alt="" />
      <h3 className="product-name">{props.name}</h3>
      <p className="product-price">{props.price}</p>
      <button value={props.name} onClick={props.submit}>
        Buy
      </button>
    </form>
  );
}
