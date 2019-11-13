import React from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
// styles
import "./style.scss";

export default function SizeCheckbox({className, ...props}) {
  return (
    <>
      <div className={classNames("size-checkbox", className)}>
        {props.sizes &&
          props.sizes.map(size => (
            <div key={size._id} className="size-checkbox__item">{size.name}</div>
          ))}
      </div>
    </>
  );
}

SizeCheckbox.propTypes = {
  sizes: PropTypes.array
};
