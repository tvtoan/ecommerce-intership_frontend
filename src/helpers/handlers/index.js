import { aLogout } from 'redux-modules/auth/actions';
import { aHandleMessage } from 'redux-modules/error/actions';
import { removeToken, removeUser } from 'helpers/auth/MethodStorage';

let logoutStatuses = [401, 403];

const handleError = (dispatch, error, methodFormik = undefined) => {
  if (logoutStatuses.indexOf(error.status) > -1) {
    removeToken();
    removeUser();
    dispatch(aLogout());
  } else {
    if (typeof error.json === 'function') {
      error.json().then(res => {
        if (res.details !== undefined) {
          for (let errorServer of res.details) {
            methodFormik(errorServer.field, errorServer.message);
          }
        } else {
          dispatch(aHandleMessage(error));
        }
      });
    } else {
      console.error("Fetch Error:" + error);
    }
  }
}

export default handleError;