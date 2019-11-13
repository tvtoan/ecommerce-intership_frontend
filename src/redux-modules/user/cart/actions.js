import * as types from "./types";

// action (Actions are payloads of information that send data from your application to your store)
export const aAddProduct = product => ({
  type: types.ADD_PRODUCT_CART,
  product
});
export const aRemoveProduct = product => ({
  type: types.REMOVE_PRODUCT_CART,
  product
});

// action creators (functions that create actions)
export const acAddProduct = product => dispatch => {
  dispatch(aAddProduct(product));
};

export const acRemove = product => dispatch => {
  dispatch(aRemoveProduct(product));
};
