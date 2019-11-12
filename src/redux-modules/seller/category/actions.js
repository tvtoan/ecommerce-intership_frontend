import * as types from "./types";
import callApi from "helpers/api/CallApi";
import handleError from "helpers/handlers";

// action (Actions are payloads of information that send data from your application to your store)
export const aCreateCategory = () => ({
  type: types.CREATE_CATEGORY_REQUEST
});

export const aUpdateCategory = () => ({
  type: types.UPDATE_CATEGORY_REQUEST
});

export const aRemoveCategory = () => ({
  type: types.REMOVE_CATEGORY_REQUEST
});

export const aGetCategory = category => ({
  type: types.GET_CATEGORY_REQUEST,
  category
});

export const aGetCategories = categories => ({
  type: types.GET_CATEGORIES_REQUEST,
  categories
});

// action creators (functions that create actions)
export const acCreateCategory = (category, setFieldError) => async dispatch => {
  try {
    await callApi({
      endpoint: `categoies`,
      method: "POST",
      body: category
    });
    dispatch(aCreateCategory());
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acUpdateCategory = (
  id,
  category,
  setFieldError
) => async dispatch => {
  try {
    await callApi({
      endpoint: `categoies/${id}`,
      method: "PATCH",
      body: category
    });
    dispatch(aUpdateCategory());
  } catch (error) {
    handleError(dispatch, error, setFieldError);
  }
};

export const acRemoveCategory = id => async dispatch => {
  try {
    await callApi({
      endpoint: `categoies/${id}`,
      method: "DELETE"
    });
    dispatch(aRemoveCategory());
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetCategory = id => async dispatch => {
  try {
    const category = await callApi({
      endpoint: `categoies/${id}`
    });
    dispatch(aGetCategory(category));
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acGetCategories = () => async dispatch => {
  try {
    const categories = await callApi({
      endpoint: `categoies`
    });
    dispatch(aGetCategories(categories));
  } catch (error) {
    handleError(dispatch, error);
  }
};