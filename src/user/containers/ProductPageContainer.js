// 3rd packages
import { connect } from "react-redux";
// component
import ProductPage from "../pages/product";
// Redux actions
import { acGetProductBySlug } from "redux-modules/data/product/actions";
import {
  acAddProduct,
  acChangeQuantityItemCart
} from "redux-modules/user/cart/actions";

const mapStateToProps = state => {
  return {
    product: state.ProductReducer.product,
    cart: state.CartReducer.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProductBySlug: slug => dispatch(acGetProductBySlug(slug)),
    addProductCart: product => dispatch(acAddProduct(product)),
    updateQuantityProduct: (id, quantityValue) =>
      dispatch(acChangeQuantityItemCart(id, quantityValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
