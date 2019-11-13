// 3rd packages
import { connect } from "react-redux";
// component
import CategoryPage from "../pages/category";
// Redux actions
import { acGetProducts } from "redux-modules/data/product/actions";

const mapStateToProps = state => {
  return {
    products: state.ProductReducer.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProductByCategory: query => dispatch(acGetProducts(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
