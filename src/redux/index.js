import { actions } from "./actions";

const INITIAL_STATE = {
  products: [],
  productsCart: [],
  isLoading: true,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.setProducts:
      return {
        ...state,
        products: action.payload,
      };
    case actions.setProductsCart:
      return {
        ...state,
        productsCart: action.payload,
      };
    case actions.setIsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
