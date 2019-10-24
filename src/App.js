import React from 'react';
import HeaderPage from './components/header';
import FooterPage from './components/footer';
import HomePage from './components/homepage';
// import RegisterModal from './components/auth/register';
// import LoginModal from './components/auth/login';
import ForgotPassModal from './components/auth/forgot-pass';

import './App.css';

function App() {
  return (
    <div className="web-shop">
      <HeaderPage />
      <HomePage />
      <FooterPage />
      {/* <RegisterModal /> */}
      {/* <LoginModal /> */}
      <ForgotPassModal />
    </div>
  );
}

export default App;
