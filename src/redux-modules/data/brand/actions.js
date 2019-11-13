import * as types from "./types";
import callApi from "helpers/api/CallApi";
import handleError from "helpers/handlers";

// action (Actions are payloads of information that send data from your application to your store)
export const aCreateBrand = () => ({
  type: types.CREATE_BRAND_REQUEST
});

export const aUpdateBrand = () => ({
  type: types.UPDATE_BRAND_REQUEST
});

export const aRemoveBrand = () => ({
  type: types.REMOVE_BRAND_REQUEST
});

export const aGetBrand = brand => ({
  type: types.GET_BRAND_REQUEST,
  brand
});

export const aGetBrands = brands => ({
  type: types.GET_BRANDS_REQUEST,
  brand: brands
});

// action creators (functions that create actions)
export const acCreateBrand = (brand, setFieldError) => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `brands`,
      method: "POST",
      body: brand
    });
    dispatch(aCreateBrand());
    return res.brand;
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acUpdateBrand = (
  id,
  brand,
  setFieldError
) => async dispatch => {
  try {
    await callApi({
      endpoint: `brands/${id}`,
      method: "PATCH",
      body: brand
    });
    dispatch(aUpdateBrand());
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acRemoveBrand = id => async dispatch => {
  try {
    await callApi({
      endpoint: `brands/${id}`,
      method: "DELETE"
    });
    dispatch(aRemoveBrand());
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetBrand = id => async dispatch => {
  try {
    const brand = await callApi({
      endpoint: `brands/${id}`
    });
    dispatch(aGetBrand(brand));
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetBrands = () => async dispatch => {
  try {
    const data = await callApi({
      endpoint: `brands`
    });
    const brands = data.brands;
    dispatch(aGetBrands(brands));
    return brands;
  } catch (error) {
    handleError(dispatch, error);
  }
};