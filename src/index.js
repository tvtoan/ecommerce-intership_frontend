// core
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// 3rd packages
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducerApp from "./redux-modules";
import thunk from "redux-thunk";
// helper methods
import isLogin from "helpers/auth/AuthChecker";
// import { getUser } from "helpers/auth/StorageMethods";
import setupDB, { getUser, getCart } from "helpers/auth/StorageIndexedDB";
// redux actions
import { aLogin } from "redux-modules/auth/actions";
import { acGetCart } from "redux-modules/user/cart/actions";
// stypes
import "./index.scss";
import "normalize.css";
import "assets/scss/grid.scss";
import "assets/scss/forms/forms.scss";
import "assets/scss/button/button.scss";
// Websites
import Loading from "components/loading";
const ShopWeb = React.lazy(() => import("./user"));
const SellerWeb = React.lazy(() => import("./seller"));

// configs
library.add(fas, fab);
const middleware = [thunk];
const store = createStore(
  reducerApp,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// check auth / get auth from localstorage
isLogin().then(result => {
  if (result) {
    store.dispatch(
      aLogin(
        setupDB()
          .then(db => getUser(db))
          .then(user => {
            return user;
          })
      )
    );
  }
});

setupDB()
  .then(db => getCart(db))
  .then(cart => {
    store.dispatch(acGetCart(cart));
  });

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/seller" component={SellerWeb} />
          <Route path="/" component={ShopWeb} />
        </Switch>
      </Router>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
