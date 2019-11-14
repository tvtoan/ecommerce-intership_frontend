import * as types from "./types";

// initial state for reducer
const initialState = {
  cart: []
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_CART:
      return {
        ...state,
        cart: [...state.cart, action.product]
      };
    case types.REMOVE_PRODUCT_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product._id !== action.product._id)
      };
    case types.GET_CART:
      return {
        ...state,
        cart: action.cart
      };
    default:
      return state;
  }
};
