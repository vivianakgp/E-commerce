import React, { useState } from "react";
// import { Link } from "react-router-dom";
// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./productCard.css";

const ProductCards = ({ product }) => {
  const [msgAddToCart, setMsgAddToCart] = useState("");
  return (
    <div className="card">
      <div className="card__imgContainer">
        <img
          className="over"
          alt={product.title}
          src={product.productImgs[1]}
        ></img>
        <img alt={product.title} src={product.productImgs[2]}></img>
      </div>
      <hr className="breakSec"></hr>
      <div className="card__info">
        <h3>{product.title}</h3>
        <p>
          Price <span> {`$${product.price}`} </span>{" "}
        </p>
        {/* <Link to={`/productInfo/${product.id}`}>see more</Link> */}
        <p
          style={{
            width: "100%",
            textAlign: "center",
            color: "#F85555",
            height: "22px",
          }}
        >
          {msgAddToCart}
        </p>
        {/* conditional render */}
        {localStorage.getItem("token") ? (
          <button
            className="shoppingCar"
            dataid={product.id}
            // onClick={(e) => addProductToCart(e)}
          >
            <FontAwesomeIcon icon={faCartShopping} dataid={product.id} />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCards;
