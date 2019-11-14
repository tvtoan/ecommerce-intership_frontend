import * as types from "./types";
import callApi from "helpers/api/CallApi";
import handleError from "helpers/handlers";
// storage methods
import setupDB, {
  removeCart
} from "helpers/auth/StorageIndexedDB";
// actions
import {acResetCart} from "../../user/cart/actions";

// action (Actions are payloads of information that send data from your application to your store)
export const aAddOrder = isOrderSuccess => {
  if (isOrderSuccess) {
    return {
      type: types.ADD_ORDER_REQUEST_SUCCESS
    };
  } else {
    return {
      type: types.ADD_ORDER_REQUEST_FAIL
    };
  }
};

// action creators (functions that create actions)
export const acAddOrder = order => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `orders`,
      method: "POST",
      body: order
    });
    dispatch(aAddOrder(true));
    dispatch(acResetCart());
    setupDB().then(db => removeCart(db));
    return res.brand;
  } catch (error) {
    dispatch(aAddOrder(false));
    handleError(dispatch, error);
  }
};
