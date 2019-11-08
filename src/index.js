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
import reducerApp from "./redux";
import thunk from "redux-thunk";
// stypes
import "./index.scss";
import "normalize.css";
import "assets/scss/grid.scss";
import "assets/scss/forms/forms.scss";
import "assets/scss/button/button.scss";
// Websites
import Loading from "components/loading";
const ShopWeb = React.lazy(() => import("./shop"));
const SellerWeb = React.lazy(() => import("./seller"));

// configs
library.add(fas, fab);
const middleware = [thunk];
const store = createStore(
  reducerApp,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

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
