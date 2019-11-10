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

function TopComponent() {
  return (
    <>
      <h5 className="modal__title">Register</h5>
    </>
  );
}

function BottomComponent(props) {
  return (
    <>
      <span>Do you have an account?</span>
      <button
        className="flat-button link-other"
        onClick={() => {
          props.closeAllAuthModal();
          props.setShowLoginModal(true);
        }}
      >
        Log in
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
      closeModal("register", false);
    }
  } catch (error) {
    console.error("[REGISTER]:", error);
  }
};

export default function RegisterModal({ className, ...props }) {
  return (
    <Modal
      className={classNames("modal-auth modal-register", className)}
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
          fullname: "",
          email: "",
          password: ""
        }}
        validationSchema={yup.object().shape({
          fullname: yup.string().required("Please enter a valid name!"),
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
          handleSubmit(values, setSubmitting, setFieldError, resetForm, props.handleRegister, props.setShowRegisterModal);
        }}
      >
        {({ isValid, handleSubmit, isSubmitting }) => (
          <form className="form-register" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fieldName">Name</label>
              <Field
                id="fieldName"
                type="text"
                name="fullname"
                placeholder="Enter your name..."
                component={InputField}
              />
            </div>
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
            <div className="term">
              By creating an account you agree to the{" "}
              <a href="#/">Terms of Service</a> and{" "}
              <a href="#/">Privacy Policy</a>
            </div>
            <button
              type="submit"
              className={classNames("button button-lg btn-register", {
                "button-primary": isValid
              })}
              disabled={isSubmitting}
            >
              register
            </button>
          </form>
        )}
      </Formik>
    </Modal>
  );
}
