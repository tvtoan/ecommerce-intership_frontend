import * as types from "./types";
//
import setupDB, {
  addItemCart,
  removeItemCart
} from "helpers/auth/StorageIndexedDB";

// action (Actions are payloads of information that send data from your application to your store)
export const aAddProduct = product => ({
  type: types.ADD_PRODUCT_CART,
  product
});
export const aRemoveProduct = product => ({
  type: types.REMOVE_PRODUCT_CART,
  product
});
export const aGetCart = cart => ({
  type: types.GET_CART,
  cart
});

// action creators (functions that create actions)
export const acAddProduct = product => dispatch => {
  setupDB().then(addItemCart(product));
  dispatch(aAddProduct(product));
};

export const acRemoveProduct = itemCart => dispatch => {
  setupDB().then(removeItemCart(itemCart.id));
  dispatch(aRemoveProduct(itemCart));
};

export const acGetCart = cart => dispatch => {
  dispatch(aGetCart(cart));
};
