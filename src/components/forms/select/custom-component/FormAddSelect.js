import React, { useRef, useState } from "react";
// 3rd packages
import classNames from "classnames";
// static resources
import { ReactComponent as CloseIcon } from "assets/images/seller/icons/close-1.svg";
import { ReactComponent as DoneIcon } from "assets/images/seller/icons/done.svg";
// styles
import styles from "./Menu.module.scss";

// const FormAddSelect = React.forwardRef((props, ref) => {

// });

export default function FormAddSelect(props) {
  const refInput = useRef(null);
  const [isValidated, setIsValidated] = useState(false);

  return (
    <div className={styles["form-add-select"]}>
      <input
        ref={refInput}
        type="text"
        placeholder="Enter"
        className={classNames(
          "form-control",
          styles["form-add-select__element"]
        )}
        onFocus={e => e.target.focus()}
        onBlur={() => setIsValidated(true)}
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
        onClick={async () => {
          // let valueInput = refInput.current.value;
          // const category = await props.addCategory({ name: valueInput });
          refInput.current.value = '';
          // props.setValueOption({_id: category._id, name: category.name}, "select-option");
          // props.onCloseAdd(false);
          // props.reloadSelect();
        }}
      >
        <DoneIcon />
      </button>
    </div>
  );
}
