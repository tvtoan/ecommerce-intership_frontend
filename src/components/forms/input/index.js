import React, { useState } from "react";
// 3rd packages
import classNames from "classnames";
import PropTypes from "prop-types";

export default function InputControl({
  className,
  onChange,
  isInvalid,
  ...props
}) {
  const [, setValue] = useState(props.value || null);

  const handleChange = e => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      className={classNames("form-control", className, {
        "is-invalid": isInvalid || false
      })}
      onChange={handleChange}
      {...props}
    />
  );
}

InputControl.propTypes = {
  value: PropTypes.string,
  isInvalid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  // functions
  onChange: PropTypes.func
};

InputControl.defaultProps = {
  // function
  onChange: () => {}
};
