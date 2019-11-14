import React, {useEffect} from "react";
// 3rd packages
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// components
import HeaderPage from "./containers/HeaderPageContainer";
import FooterPage from "./components/footer";
import RegisterModal from "./containers/RegisterModalContainer";
import LoginModal from "./containers/LoginModalContainer";
import ForgotPassModal from "./containers/ForgotPassModalContainer";
import SuccessRegisterModal from "./components/auth/success";
// pages
import HomePage from "./pages/homepage";
import ProductPage from "./containers/ProductPageContainer";
import CategoryPage from "./containers/CategoryPageContainer";
import AccountPage from "./pages/account-page";
import CartPage from "./containers/CartPageContainer";
// helper methos
import setupDB, { getCart } from "helpers/auth/StorageIndexedDB";
// redux actions
import {
  acShowAuthModal,
  acCloseAllAuthModal
} from "redux-modules/user/ui/actions";
import { acGetCart } from "redux-modules/user/cart/actions";
// Demo Upload
// import SingleUpload from './pages/upload-page/SingleUpload';
// import AddProductPage from './pages/add-product';

import "./UserWeb.style.scss";

function ShopWeb(props) {
  useEffect(() => {
    setupDB()
      .then(db => getCart(db))
      .then(cart => {
        props.getCartFromStorage(cart);
      });
  });

  return (
    <div className="user-web">
      <HeaderPage />
      <Switch>
        <Route path="/product/:slug" component={ProductPage} />
        <Route path="/category" component={CategoryPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <FooterPage />
      <RegisterModal
        show={props.isShowRegister}
        onHide={() => props.setShowRegisterModal(false)}
      />
      <LoginModal
        show={props.isShowLogin}
        onHide={() => props.setShowLoginModal(false)}
      />
      <ForgotPassModal
        show={props.isShowForgotPass}
        onHide={() => props.setShowForgotModal(false)}
        onOpen={() => props.setShowLoginModal(false)}
      />
      <SuccessRegisterModal
        show={props.isShowSuccess}
        messageSuccess="register successfull!"
        buttonInfo={{
          name: "log in",
          handleClick: () => {
            props.closeAllAuthModal();
            props.setShowLoginModal(true);
          }
        }}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isShowRegister: state.UIReducer.isShowRegister,
    isShowLogin: state.UIReducer.isShowLogin,
    isShowForgotPass: state.UIReducer.isShowForgotPass,
    isShowSuccess: state.UIReducer.isShowSuccess
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setShowRegisterModal: isShow =>
      dispatch(acShowAuthModal("register", isShow)),
    setShowLoginModal: isShow => dispatch(acShowAuthModal("login", isShow)),
    setShowForgotModal: isShow =>
      dispatch(acShowAuthModal("forgot_pass", isShow)),
    closeAllAuthModal: () => dispatch(acCloseAllAuthModal()),
    getCartFromStorage: cart => dispatch(acGetCart(cart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopWeb);
