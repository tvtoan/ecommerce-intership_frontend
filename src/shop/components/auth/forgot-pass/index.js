import React, { Component } from "react";
// components
import Modal from "components/modal";
// styles
import "./style.scss";

function TopComponent() {
  return (
    <>
      <h5 className="modal__title">forgot password</h5>
      <span className="modal__description">
        Enter your e-mail address below and we’ll get you back on track.
      </span>
    </>
  );
}

function BottomComponent() {
  return (
    <>
      <span>I remember my password now.</span>
      <a href="#/">Log in</a>
    </>
  );
}

export default class index extends Component {
  render() {
    return (
      <Modal
        className="modal-auth modal-forgot-pass"
        component={{
          topComponent: <TopComponent />,
          bottomComponent: <BottomComponent />
        }}
      >
        <form className="form-forgot-pass">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email..."
            />
          </div>
          <button type="submit" className="button btn-forgot-pass">
            submit
          </button>
        </form>
      </Modal>
    );
  }
}
