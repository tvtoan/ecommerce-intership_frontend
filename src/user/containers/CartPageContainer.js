// 3rd packages
import { connect } from "react-redux";
// component
import CartPage from "../pages/cart";
// Redux actions
import {
  acRemoveProduct,
  acChangeQuantityItemCart
} from "redux-modules/user/cart/actions";
import { acAddOrder } from "redux-modules/data/order/actions";
import { acShowAuthModal } from "redux-modules/user/ui/actions";

const mapStateToProps = state => {
  return {
    cart: state.CartReducer.cart,
    isOrderSuccess: state.OrderReducer.isOrderSuccess,
    user: state.AuthReducer.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeProduct: product => dispatch(acRemoveProduct(product)),
    updateQuantityProduct: (id, quantityValue) =>
      dispatch(acChangeQuantityItemCart(id, quantityValue)),
    setShowLoginModal: isShow => dispatch(acShowAuthModal("login", isShow)),
    addOrder: order => dispatch(acAddOrder(order))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
