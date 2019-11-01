import React, { Component } from "react";
import './style.scss';

export default class index extends Component {
  render() {
    return (
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember password
        </label>
      </div>
    );
  }
}
