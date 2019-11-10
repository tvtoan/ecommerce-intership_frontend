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
    setIsShow(false);
    if (props.onHide) {
      props.onHide(e);
    }
  };

  useEffect(() => {
    if (props.show === true && props.onOpen) {
      props.onOpen();
    }
    if ("show" in props) {
      setIsShow(props.show);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.show]);

  if (!isShow) {
    return null;
  }
  return (
    <div className={classNames("modal", props.className, { show: isShow })}>
      <div className="modal__content">
        {!props.disableHeader && (
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
            {props.component && props.component.topComponent}
          </div>
        )}
        <div className="modal__body">{props.children}</div>
        {!props.disableFooter && (
          <div className="modal__footer">
            {props.component && props.component.bottomComponent}
          </div>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  component: PropTypes.shape({
    topComponent: PropTypes.element.isRequired,
    bottomComponent: PropTypes.element.isRequired
  }),
  disableHeader: PropTypes.bool,
  disableFooter: PropTypes.bool,
  // functions
  onOpen: PropTypes.func,
  onHide: PropTypes.func
};

Modal.defaultProps = {
  disableHeader: false,
  disableFooter: false
};
