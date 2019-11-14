import React, { useState, useRef, useCallback } from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
// static resources
import { ReactComponent as PlusIcon } from "./plus.svg";
import { ReactComponent as MinusIcon } from "./minus.svg";
// styles
import "./style.scss";

export default function Touchspin({ onChange, className, ...props }) {
  const [value, setValue] = useState(props.value || 0);
  const refInput = useRef();

  const changeValue = useCallback(
    valueChange => {
      if (onChange) {
        onChange(valueChange);
      }
    },
    // eslint-disable-next-line
    [value]
  );

  return (
    <div className={classNames("touchspin", className)}>
      <button
        className="flat-button touchspin__button"
        onClick={() => {
          setValue(value - 1);
          changeValue(value - 1);
        }}
      >
        <MinusIcon className="touchspin__button-icon" />
      </button>
      <input
        ref={refInput}
        className="touchspin__input"
        onChange={() => console.log("input onchange")}
        type="text"
        value={value.toString()}
      />
      <button
        className="flat-button touchspin__button"
        onClick={() => {
          setValue(value + 1);
          changeValue(value + 1);
        }}
      >
        <PlusIcon className="touchspin__button-icon" />
      </button>
    </div>
  );
}

Touchspin.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};
