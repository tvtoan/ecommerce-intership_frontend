import React from "react";
// 3rd packages
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDropdownMenu } from "react-overlays";

export default function DropdownMenu({
  className,
  as: Component = "div",
  ...props
}) {
  const { show, props: menuProps } = useDropdownMenu({ flip: true });
  return (
    <Component
      className={classNames("menu-container", className, { 'show': show })}
      {...props}
      {...menuProps}
    >
      {props.children}
    </Component>
  );
}

DropdownMenu.propTypes = {
  as: PropTypes.elementType
};
