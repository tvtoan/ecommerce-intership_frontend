import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { components } from "react-select";

import { ReactComponent as AddIcon } from "assets/images/seller/icons/add.svg";
import { ReactComponent as CloseIcon } from "assets/images/seller/icons/close-1.svg";
import { ReactComponent as DoneIcon } from "assets/images/seller/icons/done.svg";

// style
import styles from "./Menu.module.scss";

const FormAddSelect = React.forwardRef((props, ref) => {
  const [isValidated, setIsValidated] = useState(false);

  return (
    <div className={styles["form-add-select"]}>
      <input
        ref={ref}
        type="text"
        placeholder="Enter"
        className={classNames(
          "form-control",
          styles["form-add-select__element"]
        )}
      />
      <button
        className={classNames(
          "flat-button",
          styles["form-add-select__element"]
        )}
        onClick={e => {
          e.preventDefault();
          props.onCloseAdd(false);
          console.log("button close onClick");
        }}
      >
        <CloseIcon />
      </button>
      <button
        type="submit"
        className={classNames(
          "flat-button",
          styles["form-add-select__element"],
          { [styles["valid"]]: isValidated }
        )}
      >
        <DoneIcon />
      </button>
    </div>
  );
});

const Menu = ({ innerProps, ...restProps }) => {
  const refInput = useRef();
  const [isDisplayFormAdd, setIsDisplayFormAdd] = useState(false);

  const mouseDown = e => {
    restProps.selectProps.onMenuInputFocus(true);
  };

  return (
    <components.Menu
      innerProps={{
        ...innerProps,
        onMouseDown: mouseDown
      }}
      {...restProps}
    >
      {restProps.children}
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
