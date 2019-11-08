import React, { Component } from "react";
// components
import Modal from "components/modal";
import CheckboxCustom from "components/forms/checkbox";
// styles
import "./style.scss";

function TopComponent() {
  return (
    <>
      <h5 className="modal__title">Log in</h5>
    </>
  );
}

function BottomComponent() {
  return (
    <>
      <span>Don’t have an account?</span>
      <a href="#/">register</a>
    </>
  );
}

export default function LoginModal() {
  return (
    <Modal
      className="modal-auth modal-login"
      component={{
        topComponent: <TopComponent />,
        bottomComponent: <BottomComponent />
      }}
    >
      <form className="form-login was-validated">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">e-mail</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your name..."
          />
          <div className="invalid-feedback">Please enter a valid name!</div>
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
          <button className="flat-button forgot-pass">
            Forgot your password?
          </button>
        </div>
        <button type="submit" className="button btn-login">
          Log In
        </button>
      </form>
    </Modal>
  );
}
