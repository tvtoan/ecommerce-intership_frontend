import React from 'react';
import HeaderPage from './components/header';
import FooterPage from './components/footer';

import './App.css';

function App() {
  return (
    <div>
      <HeaderPage />
      <main className="body-demo"></main>
      <FooterPage />
    </div>
  );
}

export default App;
