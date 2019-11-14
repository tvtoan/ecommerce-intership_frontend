// 3rd packages
import { connect } from "react-redux";
// components
import HeaderPage from "../components/header";
// redux actions
import { acShowAuthModal } from "redux-modules/user/ui/actions";
import { acLogout } from "redux-modules/auth/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated,
    userInfo: state.AuthReducer.user,
    amountProductCart: state.CartReducer.cart ? state.CartReducer.cart.length : 0,
    cart: state.CartReducer.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setShowRegisterModal: isShow =>
      dispatch(acShowAuthModal("register", isShow)),
    setShowLoginModal: isShow => dispatch(acShowAuthModal("login", isShow)),
    handleLogout: () => dispatch(acLogout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderPage);
