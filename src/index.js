import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'normalize.css';
import 'assets/scss/grid.scss';
// import App from './App';
import SellerWeb from './admin';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

ReactDOM.render(<SellerWeb />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
