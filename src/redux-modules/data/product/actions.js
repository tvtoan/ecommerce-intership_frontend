import * as types from "./types";
import callApi from "helpers/api/CallApi";
import handleError from "helpers/handlers";

// action (Actions are payloads of information that send data from your application to your store)
export const aCreateProduct = () => ({
  type: types.CREATE_PRODUCT_REQUEST
});

export const aUpdateProduct = () => ({
  type: types.UPDATE_PRODUCT_REQUEST
});

export const aRemoveProduct = () => ({
  type: types.REMOVE_PRODUCT_REQUEST
});

export const aGetProduct = product => ({
  type: types.GET_PRODUCT_REQUEST,
  product
});

export const aGetProducts = products => ({
  type: types.GET_PRODUCTS_REQUEST,
  products
});

// action creators (functions that create actions)
export const acCreateProduct = (product, setFieldError) => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `products`,
      method: "POST",
      body: product,
    });
    dispatch(aCreateProduct());
    return res.product;
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acUpdateProduct = (
  id,
  product,
  setFieldError
) => async dispatch => {
  try {
    await callApi({
      endpoint: `products/${id}`,
      method: "PATCH",
      body: product,
    });
    dispatch(aUpdateProduct());
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acRemoveProduct = id => async dispatch => {
  try {
    await callApi({
      endpoint: `products/${id}`,
      method: "DELETE"
    });
    dispatch(aRemoveProduct());
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetProduct = id => async dispatch => {
  try {
    const product = await callApi({
      endpoint: `products/${id}`
    });
    dispatch(aGetProduct(product));
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetProductBySlug = slug => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `products/${slug}`
    });
    console.log("acGetSLug:", res.product);
    dispatch(aGetProduct(res.product));
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetProducts = (query) => async dispatch => {
  try {
    const data = await callApi({
      endpoint: `products`,
      queryParams: query,
    });
    dispatch(aGetProducts(data));
  } catch (error) {
    handleError(dispatch, error);
  }
};
