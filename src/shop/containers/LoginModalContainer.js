// 3rd packages
import { connect } from "react-redux";
// components
import LoginModal from "../components/auth/login";
// Redux actions
import {
  acShowAuthModal,
  acCloseAllAuthModal
} from "redux-modules/shop/ui/actions";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setShowForgotModal: isShow =>
      dispatch(acShowAuthModal("forgot_pass", isShow)),
    setShowRegisterModal: isShow =>
      dispatch(acShowAuthModal("register", isShow)),
    closeAllAuthModal: () => dispatch(acCloseAllAuthModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
