import React, { useState } from "react";
// 3rd packages
import classNames from "classnames";
// static resources
import { ReactComponent as CloseIcon } from "assets/images/seller/icons/close-1.svg";
import { ReactComponent as DoneIcon } from "assets/images/seller/icons/done.svg";
// styles
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
        onFocus={e => e.target.focus()}
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

export default FormAddSelect;
