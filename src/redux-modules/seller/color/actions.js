import * as types from "./types";
import callApi from "helpers/api/CallApi";
import handleError from "helpers/handlers";

// action (Actions are payloads of information that send data from your application to your store)
export const aCreateColor = () => ({
  type: types.CREATE_COLOR_REQUEST
});

export const aUpdateColor = () => ({
  type: types.UPDATE_COLOR_REQUEST
});

export const aRemoveColor = () => ({
  type: types.REMOVE_COLOR_REQUEST
});

export const aGetColor = color => ({
  type: types.GET_COLOR_REQUEST,
  color
});

export const aGetColors = colors => ({
  type: types.GET_COLORS_REQUEST,
  color: colors
});

// action creators (functions that create actions)
export const acCreateColor = (color, setFieldError) => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `colors`,
      method: "POST",
      body: color
    });
    dispatch(aCreateColor());
    return res.color;
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acUpdateColor = (id, color, setFieldError) => async dispatch => {
  try {
    await callApi({
      endpoint: `colors/${id}`,
      method: "PATCH",
      body: color
    });
    dispatch(aUpdateColor());
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acRemoveColor = id => async dispatch => {
  try {
    await callApi({
      endpoint: `colors/${id}`,
      method: "DELETE"
    });
    dispatch(aRemoveColor());
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetColor = id => async dispatch => {
  try {
    const color = await callApi({
      endpoint: `colors/${id}`
    });
    dispatch(aGetColor(color));
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetColors = () => async dispatch => {
  try {
    const data = await callApi({
      endpoint: `colors`
    });
    const colors = data.colors;
    dispatch(aGetColors(colors));
    return colors;
  } catch (error) {
    handleError(dispatch, error);
  }
};
