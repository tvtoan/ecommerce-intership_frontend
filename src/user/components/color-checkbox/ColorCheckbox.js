import React, {useState, useEffect} from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
// styles
import "./style.scss";

export default function ColorCheckbox({className, onChange, ...props}) {
  const [selected, setSelected] = useState();

  const handleSelect = (e, itemSelected) => {
    if (onChange) {
      onChange(e, itemSelected);
    }
    setSelected(itemSelected);
  };

  useEffect(() => {
    if (props.colors && props.colors.length >= 1) {
      setSelected(props.colors[0]);
      if (onChange) {
        onChange(null, props.colors[0]);
      }
    }
    // eslint-disable-next-line
  }, [props.colors])

  return (
    <>
      <div className={classNames("color-checkbox", className)}>
        {props.colors &&
          props.colors.map(color => (
            <div
              key={color._id}
              className={classNames("color-checkbox__item", {selected: selected && color._id === selected._id})}
              style={{ backgroundColor: color.code }}
              onClick={e => handleSelect(e, color)}
            ></div>
          ))}
      </div>
    </>
  );
}

ColorCheckbox.propTypes = {
  colors: PropTypes.array,
  onChange: PropTypes.func,
};
