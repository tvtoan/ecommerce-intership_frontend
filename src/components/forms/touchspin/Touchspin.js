import React, { useState, useRef, useCallback } from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
// static resources
import { ReactComponent as PlusIcon } from "./plus.svg";
import { ReactComponent as MinusIcon } from "./minus.svg";
// styles
import "./style.scss";

const handleMinValue = (value, minValue, ...[setValue, changeValue]) => {
  if (value > minValue) {
    setValue(value);
    changeValue(value);
  }
};

export default function Touchspin({ minValue, onChange, className, ...props }) {
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
        onClick={() =>
          handleMinValue(value - 1, minValue, setValue, changeValue)
        }
      >
        <MinusIcon className="touchspin__button-icon" />
      </button>
      <input
        ref={refInput}
        className="touchspin__input"
        onChange={e => {
          console.log("input onchange");
          handleMinValue(parseInt(e.target.value), minValue, setValue, changeValue);
        }}
        disabled={!props.isEnter}
        type="text"
        value={value.toString()}
      />
      <button
        className="flat-button touchspin__button"
        onClick={() =>
          handleMinValue(value + 1, minValue, setValue, changeValue)
        }
      >
        <PlusIcon className="touchspin__button-icon" />
      </button>
    </div>
  );
}

Touchspin.propTypes = {
  value: PropTypes.number,
  minValue: PropTypes.number,
  isEnter: PropTypes.bool,
  onChange: PropTypes.func
};

Touchspin.defaultProps = {
  minValue: 0,
  isEnter: false,
};
