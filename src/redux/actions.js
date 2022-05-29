import axios from "axios";
const API_URL = "https://ecommerce-api-react.herokuapp.com/api/v1";
export const actions = {
  setProducts: "SET_PRODUCTS",
  setProductsCart: "SET_PRODUCTSCART",
  setIsLoading: "SET_ISLOADING",
};

export const setProducts = (products) => ({
  type: actions.setProducts,
  payload: products,
});
export const setProductsCart = (productsCart) => ({
  type: actions.setProductsCart,
  payload: productsCart,
});
export const setIsLoading = (loading) => ({
  type: actions.setIsLoading,
  payload: loading,
});

// // getConfig to access the token with axios
const getConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

// REDUX THUNK FUNCTIONS
// all products
export const getProductsThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(`${API_URL}/products`)
      .then((res) => dispatch(setProducts(res.data.data.products)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
// products by category
export const getProductsByCategoryThunk = (category) => {
  return (dispatch) => {
    return axios
      .get(`${API_URL}/products?category=${category}`)
      .then((res) => dispatch(setProducts(res.data.data.products)));
  };
};
// product by name
export const getProductThunk = (name) => {
  return (dispatch) => {
    return axios
      .get(`${API_URL}/products?query=${name}`)
      .then((res) => dispatch(setProducts(res.data.data.products)));
  };
};
// add product to cart
export const addProductToCartThunk = (product) => {
  return () => {
    return axios.post(`${URL}/cart`, product, getConfig());
  };
};
// get products added to shopping cart
export const getCartThunk = () => {
  return (dispatch) => {
    return axios
      .get(`${API_URL}/cart`, getConfig())
      .then((res) => dispatch(setProductsCart(res.data.data.cart.products)));
  };
};
// log in users
export const loginThunk = (credentials) => {
  //return a fn
  return () => {
    return axios.post(`${URL}/users/login`, credentials);
  };
};
// sign up
export const signUpThunk = (newUser) => {
  return () => {
    return axios.post(`${URL}/users`, newUser);
  };
};

// export const deletCartThunk = (id) => {
//   return (dispatch) => {
//     return axios
//       .delete(`${URL}/cart/${id}`, getConfig())
//       .then(() => dispatch(getCartThunk()));
//   };
// };

// export const updateCartThunk = () => {
//   return (dispatch) => {
//     return axios
//       .post(`${URL}/purchases`, {}, getConfig())
//       .then(() => dispatch(getCartThunk()));
//   };
// };
