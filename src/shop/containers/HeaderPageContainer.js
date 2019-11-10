// 3rd packages
import { connect } from "react-redux";
// components
import HeaderPage from "../components/header";
// redux actions
import { acShowAuthModal } from "redux-modules/shop/ui/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated,
    userInfo: state.AuthReducer.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setShowRegisterModal: isShow =>
      dispatch(acShowAuthModal("register", isShow)),
    setShowLoginModal: isShow => dispatch(acShowAuthModal("login", isShow))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderPage);
