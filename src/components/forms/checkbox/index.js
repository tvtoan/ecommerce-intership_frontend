import React, { useState, useEffect } from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
// styles
import "./style.scss";

export default function CheckboxControl({
  className,
  label,
  isInvalid,
  children,
  ...props
}) {
  useEffect(() => {
    console.log("Props CheckboxControl:", props);
  }, [props]);

  return (
    <div className={classNames("custom-control form-check-input", className)}>
      <input
        type="checkbox"
        className={classNames("custom-control-input", {
          "is-invalid": isInvalid || false
        })}
        {...props}
      />
      {children}
      <label className="custom-control-label" htmlFor={props.id}>
        {label}
      </label>
    </div>
  );
}

CheckboxControl.propTypes = {
  label: PropTypes.string.isRequired,
  isInvalid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  // functions
  onChange: PropTypes.func
};

CheckboxControl.defaultProps = {
  // function
  onChange: () => {}
};
