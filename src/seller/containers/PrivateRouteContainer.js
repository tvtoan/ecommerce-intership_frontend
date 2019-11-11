// 3rd packages
import { connect } from "react-redux";
// routes
import PrivateRoute from "../routes/PrivateRoute";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated,
    isSeller: state.AuthReducer.user ? state.AuthReducer.user.isSeller : false
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
