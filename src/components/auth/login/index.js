import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckboxCustom from "components/form/checkbox";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="modal modal-auth modal-login">
        <div className="modal__content">
          <div className="modal__header">
            <button
              type="button"
              className="flat-button modal__close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={["fas", "times"]} aria-hidden="true" />
            </button>
            <h5 className="modal__title">Log in</h5>
          </div>
          <div className="modal__body">
            <form className="form-login was-validated">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">e-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your name..."
                />
                <div className="invalid-feedback">
                  Please enter a valid name!
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your password…"
                />
              </div>
              <div className="form-login__method">
                <CheckboxCustom />
                <button className="flat-button forgot-pass">Forgot your password?</button>
              </div>
              <button type="submit" className="button btn-login">
                Log In
              </button>
            </form>
          </div>
          <div className="modal__footer">
            <span>Don’t have an account?</span>
            <a href="#/">register</a>
          </div>
        </div>
      </div>
    );
  }
}
