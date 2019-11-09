import * as types from "./types";

// action (Actions are payloads of information that send data from your application to your store)
export const aShowAuthModal = (typeModal, isShow) => ({
  type: types[typeModal],
  isShow
});
export const aCloseAllAuthModal = () => ({
  type: types.CLOSE_ALL_AUTH_MODAL_SHOW
});

// action creators (functions that create actions)
export const acShowAuthModal = (typeModal, isShow) => dispatch => {
  let type = typeModal.toUpperCase() + "_MODAL_SHOW";
  dispatch(aShowAuthModal(type, isShow));
};

export const acCloseAllAuthModal = () => dispatch => {
  dispatch(aCloseAllAuthModal());
};
