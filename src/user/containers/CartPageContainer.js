// 3rd packages
import { connect } from "react-redux";
// component
import CartPage from "../pages/cart";
// Redux actions
import { acRemoveProduct } from "redux-modules/user/cart/actions";

const mapStateToProps = state => {
  return {
    cart: state.CartReducer.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeProduct: product => dispatch(acRemoveProduct(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
