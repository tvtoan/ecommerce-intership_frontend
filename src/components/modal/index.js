import React from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import "./style.scss";

export default function Modal(props) {
  return (
    <div className={classNames("modal", props.className)}>
      <div className="modal__content">
        <div className="modal__header">
          <button
            type="button"
            className="flat-button modal__close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={["fas", "times"]} aria-hidden="true" />
          </button>
          {props.component.topComponent}
        </div>
        <div className="modal__body">{props.children}</div>
        <div className="modal__footer">{props.component.bottomComponent}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  component: PropTypes.shape({
    topComponent: PropTypes.element.isRequired,
    bottomComponent: PropTypes.element.isRequired
  }).isRequired
};
