import React from "react";
// 3rd packages
import { Formik, Field } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import { Link } from "react-router-dom";
// components
import { InputField } from "components/formik";
// styles
import "./ForgotPassPage.style.scss";

const handleSubmit = (values, setSubmitting, setFieldError, resetForm) => {
  setSubmitting(true);
  console.log("values:", values);
  // resetForm();
  setSubmitting(false);
};

export default function ForgotPassPage(props) {
  return (
    <div className="flex-wrapper forgot-pass-page__wrapper">
      <h3 className="auth-page__heading">Forgot password</h3>
      <span className="auth-page__description">
        Enter your e-mail address below and we’ll get you back on track.
      </span>
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
          <form
            className="auth-page__form form-forgot-pass"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <Field
                id="fieldEmail"
                type="email"
                name="email"
                placeholder="Email"
                component={InputField}
              />
            </div>
            <button
              type="submit"
              className={classNames("button btn-forgot-pass", {
                "button-primary": isValid
              })}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Link to="./login" className="connect-link">
        Login
      </Link>
    </div>
  );
}
