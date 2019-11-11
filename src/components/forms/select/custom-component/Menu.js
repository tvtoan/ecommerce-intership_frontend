import React, { useRef, useState } from "react";
// 3rd packages
import classNames from "classnames";
import { components } from "react-select";
// components
import FormAddSelect from "./FormAddSelect";
// static resources
import { ReactComponent as AddIcon } from "assets/images/seller/icons/add.svg";
// style
import styles from "./Menu.module.scss";

const Menu = ({ innerProps, ...props }) => {
  const refInput = useRef();
  const [isDisplayFormAdd, setIsDisplayFormAdd] = useState(false);

  /*
   * onMouseDown function: default call e.preventDefault() and e.stopPropagation() and focusInput()
   * => to not close menu
   */
  const mouseDown = e => {
    // ????
    // Why? call stopPropagation = select.blur(). Blur focus input
    props.selectProps.blurInputSelect();
    // To not close by handle menuIsOpen value
    props.selectProps.onSetMenuOpen(true);
  };

  return (
    <components.Menu
      innerProps={{
        ...innerProps,
        onMouseDown: mouseDown
      }}
      {...props}
    >
      {props.children}
      <div className={styles["hr-split"]}></div>
      <div>
        {!isDisplayFormAdd && (
          <button
            className={classNames(
              "flat-button",
              styles["react-select__button-add"]
            )}
            onClick={e => {
              e.preventDefault();
              setIsDisplayFormAdd(!isDisplayFormAdd);
            }}
          >
            <AddIcon className={styles["icons"]} />
            <span>Add new category</span>
          </button>
        )}
        {isDisplayFormAdd && (
          <FormAddSelect ref={refInput} onCloseAdd={setIsDisplayFormAdd} />
        )}
      </div>
    </components.Menu>
  );
};

export default Menu;
