// 3rd packages
import { connect } from "react-redux";
// components
import LoginModal from "../components/auth/login";
// Redux actions
import {
  acShowAuthModal,
  acCloseAllAuthModal
} from "redux-modules/user/ui/actions";
import { acLogin } from "redux-modules/auth/actions";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setShowForgotModal: isShow =>
      dispatch(acShowAuthModal("forgot_pass", isShow)),
    setShowLoginModal: isShow => dispatch(acShowAuthModal("login", isShow)),
    setShowRegisterModal: isShow =>
      dispatch(acShowAuthModal("register", isShow)),
    closeAllAuthModal: () => dispatch(acCloseAllAuthModal()),
    // auth
    handleLogin: (user, setFieldError) => dispatch(acLogin(user, setFieldError))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
