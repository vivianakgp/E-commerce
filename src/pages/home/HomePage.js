import React, { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
// actions thunk
import { getProductsThunk, addProductToCartThunk } from "../../redux/actions";
// components
import FilterCategory from "../../components/filters/filter-category/Filter.category";
import FilterProduct from "../../components/filters/filter-product/Filter.product";
import ProductCard from "../../components/product-cards/Product.cards";
// assets
import gif404 from "../../assets/404.gif";

import "./home.css";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);
  console.log(products);
  const allProducts = () => {
    dispatch(getProductsThunk());
  };
  // add product to cart fromm home page
  // const addProductToCart = (e) => {
  //   const product = {
  //     id: parseInt(e.target.attributes.dataid.value),
  //     quantity: 1,
  //   };
  //   if (localStorage.getItem("token")) {
  //     dispatch(addProductToCartThunk(product))
  //       .then(() => {
  //         setMsgAddToCart("Product added to cart");
  //         setTimeout(() => {
  //           setMsgAddToCart("");
  //         }, 5000);
  //       })
  //       .catch(() => {
  //         setMsgAddToCart("Error to add to cart");
  //         setTimeout(() => {
  //           setMsgAddToCart("");
  //         }, 5000);
  //       });
  //   } else {
  //     setMsgAddToCart("Please login to add to cart");
  //     setTimeout(() => {
  //       setMsgAddToCart("");
  //     }, 4000);
  //   }
  // };
  return (
    <div className="Home">
      <div className="subMenu__Container">
        <button onClick={allProducts}>All</button>
        <hr className="separate" />
        <FilterCategory />
        <hr className="separate" />
        <FilterProduct />
      </div>
      <hr className="breack" />
      {/* condiional render */}
      <div className="cards__Container">
        {products.length === 0 ? (
          <div className="cards__Container">
            <p>Products Not Found</p>
            <img src={gif404} alt="404error"></img>
          </div>
        ) : (
          products.map((product) => (
            <div className="productList" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
