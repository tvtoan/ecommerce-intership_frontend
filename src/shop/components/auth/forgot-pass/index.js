import React from "react";
// 3rd packages
import { Formik, Field } from "formik";
import * as yup from "yup";
import classNames from "classnames";
// components
import Modal from "components/modal";
import { InputField } from "components/formik";
// styles
import "./style.scss";

const handleSubmit = (values, setSubmitting, setFieldError, resetForm) => {
  setSubmitting(true);
  console.log("values:", values);
  // resetForm();
  setSubmitting(false);
};

function TopComponent() {
  return (
    <>
      <h5 className="modal__title">forgot password</h5>
      <span className="modal__description">
        Enter your e-mail address below and we’ll get you back on track.
      </span>
    </>
  );
}

function BottomComponent(props) {
  return (
    <>
      <span>I remember my password now.</span>
      <button
        className="flat-button link-other"
        onClick={() => {
          props.closeAllAuthModal();
          props.setShowLoginModal("login", true);
        }}
      >
        Log in
      </button>
    </>
  );
}

export default function ForgotPassModal({ className, ...props }) {
  return (
    <Modal
      className={classNames("modal-auth modal-forgot-pass", className)}
      component={{
        topComponent: <TopComponent />,
        bottomComponent: (
          <BottomComponent
            closeAllAuthModal={props.closeAllAuthModal}
            setShowLoginModal={props.setShowLoginModal}
          />
        )
      }}
      {...props}
    >
      <Formik
        initialValues={{
          email: ""
        }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email("Please enter a valid e-mail!")
            .required("Please enter a valid e-mail!")
        })}
        onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
          handleSubmit(values, setSubmitting, setFieldError, resetForm);
        }}
      >
        {({ isValid, handleSubmit, isSubmitting }) => (
          <form className="form-forgot-pass" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fieldEmail">E-mail</label>
              <Field
                id="fieldEmail"
                type="email"
                name="email"
                placeholder="Enter your email..."
                component={InputField}
              />
            </div>
            <button
              type="submit"
              className={classNames("button button-lg btn-forgot-pass", {
                "button-primary": isValid
              })}
              disabled={isSubmitting}
            >
              submit
            </button>
          </form>
        )}
      </Formik>
    </Modal>
  );
}
