import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="modal modal-auth modal-register">
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
            <h5 className="modal__title">Register</h5>
          </div>
          <div className="modal__body">
            <form className="form-register was-validated">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
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
                <a href="#/">Terms of Service</a> and{" "}
                <a href="#/">Privacy Policy</a>
              </div>
              <button type="button" className="button btn-register">
                register
              </button>
            </form>
          </div>
          <div className="modal__footer">
            <span>Do you have an account?</span>
            <a href="#/">Log in</a>
          </div>
        </div>
      </div>
    );
  }
}
