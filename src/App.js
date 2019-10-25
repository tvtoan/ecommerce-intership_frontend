import React from 'react';
import HeaderPage from './components/header';
import FooterPage from './components/footer';
// import HomePage from './pages/homepage';
// import RegisterModal from './components/auth/register';
// import LoginModal from './components/auth/login';
// import ForgotPassModal from './components/auth/forgot-pass';
// import ProductListPage from "./pages/product-list";
// import AccountPage from './pages/account-page';
import CartPage from './pages/cart';

import './App.css';

function App() {
  return (
    <div className="web-shop">
      <HeaderPage />
      <CartPage />
      <FooterPage />
      {/* <RegisterModal /> */}
      {/* <LoginModal /> */}
      {/* <ForgotPassModal /> */}
    </div>
  );
}

export default App;
