import * as types from "./types";
// storage methods
import setupDB, {
  addItemCart,
  removeItemCart,
  updateItemCart
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
export const aUpdateQuantityItemCart = (id, quantity) => ({
  type: types.UPDATE_QUANTITY_ITEM_CART,
  id,
  quantity
});
export const aResetCart = () => ({
  type: types.RESET_CART
});

// action creators (functions that create actions)
export const acAddProduct = product => dispatch => {
  setupDB().then(
    addItemCart(product).then(idNew => {
      product.id = idNew;
      dispatch(aAddProduct(product));
    })
  );
};

export const acRemoveProduct = itemCart => dispatch => {
  setupDB().then(removeItemCart(itemCart.id));
  dispatch(aRemoveProduct(itemCart));
};

export const acGetCart = cart => dispatch => {
  dispatch(aGetCart(cart));
};

export const acChangeQuantityItemCart = (id, quantityValue) => dispatch => {
  setupDB().then(updateItemCart("quantity", quantityValue, id));
  dispatch(aUpdateQuantityItemCart(id, quantityValue));
};

export const acResetCart = () => dispatch => {
  dispatch(aGetCart());
};
