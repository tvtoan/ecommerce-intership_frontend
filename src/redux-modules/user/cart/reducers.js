import * as types from "./types";

// initial state for reducer
const initialState = {
  cartProducts: []
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.product]
      };
    case types.REMOVE_PRODUCT_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          product => product._id !== action.product._id
        )
      };
    default:
      return state;
  }
};