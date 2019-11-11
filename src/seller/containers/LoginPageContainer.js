// 3rd packages
import { connect } from "react-redux";
// routes
import LoginPage from "../pages/auth/LoginPage";
// Redux actions
import { acLogin } from "redux-modules/auth/actions";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (seller, setFieldError) => dispatch(acLogin(seller, setFieldError))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
