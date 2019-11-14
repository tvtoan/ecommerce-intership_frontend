import * as types from "./types";
import callApi from "helpers/api/CallApi";
import handleError from "helpers/handlers";

// action (Actions are payloads of information that send data from your application to your store)
export const aUploadImage = () => ({
  type: types.UPLOAD_IMAGE_REQUEST
});

export const aRemoveImage = () => ({
  type: types.REMOVE_IMAGE_REQUEST
});

// action creators (functions that create actions)
export const acUploadImage = image => async dispatch => {
  try {
    const res = await callApi({
      endpoint: `images`,
      method: "POST",
      body: image,
      isMultiForm: true
    });
    dispatch(aUploadImage());
    return res;
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const acRemoveImage = id => async dispatch => {
  try {
    await callApi({
      endpoint: `images/${id}`,
      method: "DELETE",
    });
    dispatch(aRemoveImage());
  } catch (error) {
    handleError(dispatch, error);
  }
};
