// 3rd packages
import { connect } from "react-redux";
// components
import ForgotPassModal from "../components/auth/forgot-pass";
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
    setShowLoginModal: isShow => dispatch(acShowAuthModal("login", isShow)),
    closeAllAuthModal: () => dispatch(acCloseAllAuthModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassModal);
