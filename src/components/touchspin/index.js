import React, { Component } from "react";
import { ReactComponent as PlusIcon } from './plus.svg';
import { ReactComponent as MinusIcon } from './minus.svg';
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="touchspin">
        <button className="flat-button touchspin__button">
          <MinusIcon className="touchspin__button-icon" />
        </button>
        <input
          className="touchspin__input"
          onChange={() => console.log('abc')}
          type="text"
          value="1"
        />
        <button className="flat-button touchspin__button">
          <PlusIcon className="touchspin__button-icon" />
        </button>
      </div>
    );
  }
}
