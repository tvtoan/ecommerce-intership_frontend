import React, { useState } from "react";
// 3rd packages
import { Formik, Field } from "formik";
import * as yup from "yup";
import classNames from "classnames";
// components
import Modal from "components/modal";
import { InputField, CheckboxField } from "components/formik";
// styles
import "./style.scss";

function TopComponent() {
  return (
    <>
      <h5 className="modal__title">Log in</h5>
    </>
  );
}

function BottomComponent(props) {
  return (
    <>
      <span>Don’t have an account?</span>
      <button
        className="flat-button link-other"
        onClick={() => {
          props.closeAllAuthModal();
          props.setShowRegisterModal(true);
        }}
      >
        register
      </button>
    </>
  );
}

const handleSubmit = async (values, setSubmitting, setFieldError, resetForm, ...[handleAuth, closeModal]) => {
  setSubmitting(true);
  console.log("values:", values);
  try {
    await handleAuth(values, setFieldError);
    setSubmitting(false);
    resetForm();
    if (closeModal) {
      closeModal(false);
    }
  } catch (error) {
    console.error("[LOGIN]:", error);
  }
};

export default function LoginModal({ className, ...props }) {
  return (
    <>
      <Modal
        className={classNames("modal-auth modal-login", className)}
        component={{
          topComponent: <TopComponent />,
          bottomComponent: (
            <BottomComponent
              closeAllAuthModal={props.closeAllAuthModal}
              setShowRegisterModal={props.setShowRegisterModal}
            />
          )
        }}
        {...props}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
            isRemember: ""
          }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email("Please enter a valid e-mail!")
              .required("Please enter a valid e-mail!"),
            password: yup
              .string()
              .min(6, "Your passwords must be more than 6 characters!")
              .required("Please enter a valid password!")
          })}
          onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
            handleSubmit(values, setSubmitting, setFieldError, resetForm, props.handleLogin, props.setShowLoginModal);
          }}
        >
          {({ isValid, handleSubmit, isSubmitting }) => (
            <form className="form-login" onSubmit={handleSubmit}>
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
              <div className="form-group">
                <label htmlFor="fieldPassword">Password</label>
                <Field
                  id="fieldPassword"
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  component={InputField}
                />
              </div>
              <div className="form-login__method">
                <Field
                  id="fieldIsRemember"
                  name="isRemember"
                  label="Remember password"
                  component={CheckboxField}
                />
                <button
                  className="flat-button forgot-pass"
                  onClick={e => {
                    e.preventDefault();
                    props.setShowForgotModal(true);
                  }}
                >
                  Forgot your password?
                </button>
              </div>
              <button
                type="submit"
                className={classNames("button button-lg btn-login", {
                  "button-primary": isValid
                })}
                disabled={isSubmitting}
              >
                Log In
              </button>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
}
