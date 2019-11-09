import React, { useState, useEffect } from "react";
// 3rd packages
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import "./style.scss";

export default function Modal(props) {
  const [isShow, setIsShow] = useState(props.show || false);

  const handleHide = e => {
    if (props.onHide) {
      props.onHide(e);
    }
  };

  useEffect(() => {
    if (isShow === true && props.onOpen) {
      props.onOpen();
    }
    if ('show' in props) {
      setIsShow(props.show);
    }
  }, [isShow, props, props.show]);

  
  if (!isShow) {
    return null;
  }
  return (
    <div className={classNames("modal", props.className, { show: isShow })}>
      <div className="modal__content">
        <div className="modal__header">
          <button
            type="button"
            className="flat-button modal__close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleHide}
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
  show: PropTypes.bool,
  component: PropTypes.shape({
    topComponent: PropTypes.element.isRequired,
    bottomComponent: PropTypes.element.isRequired
  }).isRequired,
  // functions
  onOpen: PropTypes.func,
  onHide: PropTypes.func
};