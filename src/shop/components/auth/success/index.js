import React from "react";
// 3rd packages
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
// components
import Modal from "components/modal";
// styles
import "./style.scss";

export default function SuccessModal({
  className,
  messageSuccess,
  buttonInfo,
  ...props
}) {
  return (
    <Modal
      className={classNames("modal-auth modal-auth-success", className)}
      disableHeader={true}
      disableFooter={true}
      {...props}
    >
      <div className="modal-auth-success-wrapper">
        <div className="modal-auth-success__icon">
          <FontAwesomeIcon icon={["fas", "check"]} />
        </div>

        {messageSuccess && (
          <h4 className="modal-auth-success__message">{messageSuccess}</h4>
        )}
        {buttonInfo && (
          <button
            className="button button-primary modal-auth-success__button-link"
            onClick={buttonInfo.handleClick}
          >
            {buttonInfo.name}
          </button>
        )}
      </div>
    </Modal>
  );
}

SuccessModal.propTypes = {
  messageSuccess: PropTypes.string,
  buttonInfo: PropTypes.shape({
    name: PropTypes.string,
    handleClick: PropTypes.func
  })
};
