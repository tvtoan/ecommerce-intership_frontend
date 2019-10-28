import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

export default class index extends Component {
  render() {
    return (
      <div className="modal modal-auth modal-forgot-pass">
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
            <h5 className="modal__title">forgot password</h5>
            <span className="modal__description">Enter your e-mail address below and we’ll get you back on track.</span>
          </div>
          <div className="modal__body">
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
              <button
                type="submit"
                className="button btn-forgot-pass"
              >
                submit
              </button>
            </form>
          </div>
          <div className="modal__footer">
            <span>I remember my password now.</span>
            <a href="#/">Log in</a>
          </div>
        </div>
      </div>
    )
  }
}
