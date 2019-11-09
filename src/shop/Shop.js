import React from 'react';
// 3rd packages
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import HeaderPage from './containers/HeaderPageContainer';
import FooterPage from './components/footer';
import RegisterModal from "./containers/RegisterModalContainer";
import LoginModal from "./containers/LoginModalContainer";
import ForgotPassModal from "./containers/ForgotPassModalContainer";
// pages
import HomePage from './pages/homepage';
import ProductListPage from "./pages/product-list";
import AccountPage from './pages/account-page';
import CartPage from './pages/cart';
// redux actions
import {acShowAuthModal} from 'redux-modules/shop/ui/actions';
// Demo Upload
// import SingleUpload from './pages/upload-page/SingleUpload';
// import AddProductPage from './pages/add-product';

import './shop-styles.scss';

function ShopWeb(props) {
  return (
    <div className="web-shop">
      <HeaderPage />
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <FooterPage />
      <RegisterModal
        show={props.isShowRegister}
        onHide={() => props.setShowRegisterModal("register", false)}
      />
      <LoginModal
        show={props.isShowLogin}
        onHide={() => props.setShowLoginModal("login", false)}
      />
      <ForgotPassModal
        show={props.isShowForgotPass}
        onHide={() => props.setShowForgotModal("forgot_pass", false)}
        onOpen={() => props.setShowLoginModal("login", false)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isShowRegister: state.UIReducer.isShowRegister,
    isShowLogin: state.UIReducer.isShowLogin,
    isShowForgotPass: state.UIReducer.isShowForgotPass
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setShowRegisterModal: (typeModal, isShow) => dispatch(acShowAuthModal(typeModal, isShow)),
    setShowLoginModal: (typeModal, isShow) => dispatch(acShowAuthModal(typeModal, isShow)),
    setShowForgotModal: (typeModal, isShow) => dispatch(acShowAuthModal(typeModal, isShow)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopWeb);
