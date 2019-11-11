// 3rd packages
import { connect } from "react-redux";
// components
import HeaderPage from "../components/header";
// Redux actions
import { acLogout } from "redux-modules/auth/actions";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(acLogout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderPage);
