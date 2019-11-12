import * as types from "./types";
import callApi from "helpers/api/CallApi";
import handleError from "helpers/handlers";

// action (Actions are payloads of information that send data from your application to your store)
export const aCreateSize = () => ({
  type: types.CREATE_SIZE_REQUEST
});

export const aUpdateSize = () => ({
  type: types.UPDATE_SIZE_REQUEST
});

export const aRemoveSize = () => ({
  type: types.REMOVE_SIZE_REQUEST
});

export const aGetSize = size => ({
  type: types.GET_SIZE_REQUEST,
  size
});

export const aGetSizes = sizes => ({
  type: types.GET_SIZES_REQUEST,
  size: sizes
});

// action creators (functions that create actions)
export const acCreateSize = (size, setFieldError) => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `sizes`,
      method: "POST",
      body: size
    });
    dispatch(aCreateSize());
    return res.size;
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acUpdateSize = (
  id,
  size,
  setFieldError
) => async dispatch => {
  try {
    await callApi({
      endpoint: `sizes/${id}`,
      method: "PATCH",
      body: size
    });
    dispatch(aUpdateSize());
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acRemoveSize = id => async dispatch => {
  try {
    await callApi({
      endpoint: `sizes/${id}`,
      method: "DELETE"
    });
    dispatch(aRemoveSize());
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetSize = id => async dispatch => {
  try {
    const size = await callApi({
      endpoint: `sizes/${id}`
    });
    dispatch(aGetSize(size));
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetSizes = () => async dispatch => {
  try {
    const data = await callApi({
      endpoint: `sizes`
    });
    const sizes = data.sizes;
    dispatch(aGetSizes(sizes));
    return sizes;
  } catch (error) {
    handleError(dispatch, error);
  }
};