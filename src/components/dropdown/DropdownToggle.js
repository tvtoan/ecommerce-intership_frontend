import React from "react";
// 3rd packages
import PropTypes from "prop-types";
import { useDropdownToggle } from "react-overlays";

export default function DropdownToggle({ as: Component = "button", ...props }) {
  const [toggleProps, { toggle }] = useDropdownToggle();

  return (
    <Component {...toggleProps} {...props} onClick={toggle}>
      {props.children}
    </Component>
  );
}

DropdownToggle.propTypes = {
  as: PropTypes.elementType
};
