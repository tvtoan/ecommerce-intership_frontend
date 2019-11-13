import React from "react";
// 3rd packages
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";
// components
import AccountSetting from "./AccountSetting";
import ChangePass from "./ChangePass";
// styles
import "./style.scss";

export default function AccountPage() {
  let match = useRouteMatch();

  return (
    <main className="container">
      <div className="account-page">
        <div className="account-page__side-left">
          <div className="account-page__side__item">
            <h5 className="account-page__side-item__title">My account</h5>
            <ul className="account-page__side-item__list">
              <li className="account-page__side-item__list-item active">
                <Link to={`${match.url}`}>Account setting</Link>
              </li>
              <li className="account-page__side-item__list-item">
                <Link to={`${match.url}/change-password`}>Change password</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="account-page__main">
          <Switch>
            <Route path={`${match.path}/change-password`} component={ChangePass} />
            <Route path={`${match.path}`} component={AccountSetting} />
          </Switch>
        </div>
      </div>
    </main>
  );
}
