import React from 'react';
import HeaderPage from './components/header';
import FooterPage from './components/footer';
import HomePage from './components/homepage';

import './App.css';

function App() {
  return (
    <div>
      <HeaderPage />
      <HomePage />
      <FooterPage />
    </div>
  );
}

export default App;
