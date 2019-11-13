import React from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
// styles
import "./style.scss";

export default function ColorCheckbox({className, ...props}) {
  return (
    <>
      <div className={classNames("color-checkbox", className)}>
        {props.colors &&
          props.colors.map(color => (
            <div
              key={color._id}
              className="color-checkbox__item"
              style={{ backgroundColor: color.code }}
            ></div>
          ))}
      </div>
    </>
  );
}

ColorCheckbox.propTypes = {
  colors: PropTypes.array
};
