// 3rd packages
import { connect } from "react-redux";
// components
import AddProductPage from "../pages/add-product";
// Redux actions
import { acGetCategories } from "redux-modules/data/category/actions";
import { acGetBrands } from "redux-modules/data/brand/actions";
import { acGetColors } from "redux-modules/data/color/actions";
import { acGetSizes } from "redux-modules/data/size/actions";
import { acUploadImage, acRemoveImage } from "redux-modules/image/actions";
import { acCreateProduct } from "redux-modules/data/product/actions";

const mapStateToProps = state => {
  return {
    category: state.CategoryReducer.category,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(acGetCategories()),
    getBrands: () => dispatch(acGetBrands()),
    getColors: () => dispatch(acGetColors()),
    getSizes: () => dispatch(acGetSizes()),
    uploadImage: (image) => dispatch(acUploadImage(image)),
    removeImage: (id) => dispatch(acRemoveImage(id)),
    addProduct: (product, setFieldError) => dispatch(acCreateProduct(product, setFieldError)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductPage);
