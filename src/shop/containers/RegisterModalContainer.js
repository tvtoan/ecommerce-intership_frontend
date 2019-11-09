// 3rd packages
import { connect } from "react-redux";
// components
import RegisterModal from "../components/auth/register";
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
    setShowLoginModal: (typeModal, isShow) =>
      dispatch(acShowAuthModal(typeModal, isShow)),
    closeAllAuthModal: () => dispatch(acCloseAllAuthModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);
