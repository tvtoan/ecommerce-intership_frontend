// 3rd packages
import { connect } from "react-redux";
// components
import RegisterModal from "../components/auth/register";
// Redux actions
import {
  acShowAuthModal,
  acCloseAllAuthModal
} from "redux-modules/shop/ui/actions";
import { acRegister } from "redux-modules/auth/actions";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setShowRegisterModal: isShow => dispatch(acShowAuthModal("register", isShow)),
    setShowLoginModal: isShow => dispatch(acShowAuthModal("login", isShow)),
    closeAllAuthModal: () => dispatch(acCloseAllAuthModal()),
    // auth
    handleRegister: (user, setFieldError) =>
      dispatch(acRegister(user, setFieldError))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);
