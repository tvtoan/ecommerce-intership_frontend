// 3rd packages
import { connect } from "react-redux";
// components
import FormAddSelect from "components/forms/select/custom-component/FormAddSelect";
// Redux actions
import { acCreateCategory } from "redux-modules/data/category/actions";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    addCategory: (category) => dispatch(acCreateCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddSelect);
