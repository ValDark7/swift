import "./product-style.css";
import React from "react";

function ProductStore(props) {
  return (
    <div className="product" key={props.key}>
      <img src={props.image} alt="" />
      <p>
        {props.name}
        <br />
        {props.subName}
      </p>
      <p>Цена: {props.price}₽</p>
    </div>
  );
}

export default ProductStore;
