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
    setShowForgotModal: (typeModal, isShow) =>
      dispatch(acShowAuthModal(typeModal, isShow)),
    setShowRegisterModal: (typeModal, isShow) =>
      dispatch(acShowAuthModal(typeModal, isShow)),
    closeAllAuthModal: () => dispatch(acCloseAllAuthModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
