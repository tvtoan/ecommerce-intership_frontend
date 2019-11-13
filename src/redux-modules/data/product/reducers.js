import * as types from "./types";

// initial state for reducer
const initialState = {
  product: null,
  products: []
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_REQUEST:
      return {
        ...state,
        product: action.product
      };
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        products: action.products
      };
    case types.UPDATE_PRODUCT_REQUEST:
      return {
        ...state
      };
    case types.CREATE_PRODUCT_REQUEST:
      return {
        ...state
      };
    case types.REMOVE_PRODUCT_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
};
