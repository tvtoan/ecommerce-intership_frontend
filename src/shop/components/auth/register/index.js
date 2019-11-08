import React from "react";
// components
import Modal from "components/modal";
// styles
import "./style.scss";

function TopComponent() {
  return (
    <>
      <h5 className="modal__title">Register</h5>
    </>
  );
};

function BottomComponent() {
  return (
    <>
      <span>Do you have an account?</span>
      <a href="#/">Log in</a>
    </>
  );
};

export default function RegisterModal() {
  return (
    <Modal
      className="modal-auth modal-register"
      component={{
        topComponent: <TopComponent />,
        bottomComponent: <BottomComponent />
      }}
    >
      <form className="form-register was-validated">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your name..."
          />
          <div className="invalid-feedback">Please enter a valid name!</div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your email..."
          />
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
        <div className="term">
          By creating an account you agree to the{" "}
          <a href="#/">Terms of Service</a> and <a href="#/">Privacy Policy</a>
        </div>
        <button type="button" className="button btn-register">
          register
        </button>
      </form>
    </Modal>
  );
}
