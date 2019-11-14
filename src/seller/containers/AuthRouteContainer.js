// 3rd packages
import { connect } from "react-redux";
// routes
import AuthRoute from "../routes/AuthRoute";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
