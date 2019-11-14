import React, { useState, useEffect } from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "lodash";
// styles
import "./style.scss";

export default function SizeCheckbox({ className, onChange, ...props }) {
  const [selected, setSelected] = useState();

  const handleSelect = (e, itemSelected) => {
    if (onChange) {
      onChange(e, itemSelected);
    }
    setSelected(itemSelected);
  };

  useEffect(() => {
    if (props.sizes && props.sizes.length >= 1) {
      setSelected(props.sizes[0]);
      if (onChange) {
        onChange(null, props.sizes[0]);
      }
    }
    // eslint-disable-next-line
  }, [props.sizes]);
  
  return (
    <>
      <div className={classNames("size-checkbox", className)}>
        {props.sizes &&
          props.sizes.map(size => (
            <div
              key={size._id}
              className={classNames("size-checkbox__item", {
                selected: selected &&
                _.get(size, props.pathIdentifier) ===
                  _.get(selected, props.pathIdentifier)
              })}
              onClick={e => handleSelect(e, size)}
            >
              {_.get(size, props.pathName)}
            </div>
          ))}
      </div>
    </>
  );
}

SizeCheckbox.propTypes = {
  sizes: PropTypes.array,
  onChange: PropTypes.func,
  pathIdentifier: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired
};
