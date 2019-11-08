import React from 'react';
// 3rd packages
import { Switch, Route } from 'react-router-dom';
// Components
import HeaderPage from './components/header';
import FooterPage from './components/footer';
// import RegisterModal from './components/auth/register';
import LoginModal from './components/auth/login';
// import ForgotPassModal from './components/auth/forgot-pass';
// Pages
import HomePage from './pages/homepage';
import ProductListPage from "./pages/product-list";
import AccountPage from './pages/account-page';
import CartPage from './pages/cart';
// Demo Upload
// import SingleUpload from './pages/upload-page/SingleUpload';
// import AddProductPage from './pages/add-product';

import './shop-styles.scss';

function App() {
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
      {/* <RegisterModal /> */}
      <LoginModal />
      {/* <ForgotPassModal /> */}
    </div>
  );
}

export default App;
