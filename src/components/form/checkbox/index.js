import React, { Component } from "react";
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">
          Remember password
        </label>
      </div>
    );
  }
}
