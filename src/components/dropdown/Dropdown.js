import React from "react";
// 3rd packages
import classNames from "classnames";
import PropTypes from "prop-types";
import { Dropdown as BaseDropdown } from "react-overlays";
// components
import DropdownToggle from "./DropdownToggle";
import DropdownMenu from "./DropdownMenu";
// styles
import "./style.scss";

export default function Dropdown({
  drop,
  focusFirstItemOnShow,
  itemSelector,
  alignEnd,
  show,
  defaultShow,
  onToggle,
  className,
  as: Component = "div",
  ...props
}) {
  return (
    <BaseDropdown
      drop={drop}
      focusFirstItemOnShow={focusFirstItemOnShow}
      itemSelector={itemSelector}
      alignEnd={alignEnd}
      show={show}
      defaultShow={defaultShow}
      onToggle={onToggle}
    >
      {({ props: dropdownProps }) => (
        <Component
          {...props}
          {...dropdownProps}
          className={classNames(className, { show: show })}
          style={{ position: "relative" }}
        >
          {props.children}
        </Component>
      )}
    </BaseDropdown>
  );
}

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;

Dropdown.propTypes = {
  as: PropTypes.elementType
};
