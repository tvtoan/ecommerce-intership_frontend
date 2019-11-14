import * as types from "./types";
// 3rd packages
import _ from "lodash/object";

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
        cart: state.cart.filter(item => item.id !== action.product.id)
      };
    case types.GET_CART:
      return {
        ...state,
        cart: action.cart
      };
      case types.UPDATE_QUANTITY_ITEM_CART:
        const indexItem = state.cart.findIndex((item => item.id === action.id));
        state.cart[indexItem].quantity = action.quantity;
        return {
          ...state,
          cart: state.cart
        }
    default:
      return state;
  }
};
