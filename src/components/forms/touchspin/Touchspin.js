import React, { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
    // eslint-disable-next-line
  }, [value]);

  return (
    <div className={classNames("touchspin", className)}>
      <button
        className="flat-button touchspin__button"
        onClick={() => setValue(value - 1)}
      >
        <MinusIcon className="touchspin__button-icon" />
      </button>
      <input
        ref={refInput}
        className="touchspin__input"
        onChange={() => console.log("abc")}
        type="text"
        value={value.toString()}
      />
      <button
        className="flat-button touchspin__button"
        onClick={() => setValue(value + 1)}
      >
        <PlusIcon className="touchspin__button-icon" />
      </button>
    </div>
  );
}

Touchspin.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};
