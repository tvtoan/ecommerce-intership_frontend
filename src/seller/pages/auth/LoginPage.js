import React from "react";
// 3rd packages
import { Formik, Field } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
// components
import { InputField } from "components/formik";
// styles
import "./LoginPage.style.scss";

const handleSubmit = async (
  values,
  setSubmitting,
  setFieldError,
  resetForm,
  ...[handleAuth, history]
) => {
  setSubmitting(true);
  console.log("values:", values);
  try {
    await handleAuth(values, setFieldError);
    setSubmitting(false);
    resetForm();
    history.push("./");
  } catch (error) {
    console.error("[LOGIN SELLER]:", error);
  }
};

export default function LoginPage(props) {
  let history = useHistory();

  return (
    <div className="flex-wrapper login-page__wrapper">
      <h3 className="auth-page__heading">log in</h3>
      <Formik
        initialValues={{
          email: "",
          password: ""
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
          handleSubmit(
            values,
            setSubmitting,
            setFieldError,
            resetForm,
            props.handleLogin,
            history
          );
        }}
      >
        {({ isValid, handleSubmit, isSubmitting }) => (
          <form className="auth-page__form form-login" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fieldEmail">Email</label>
              <Field
                id="fieldEmail"
                type="email"
                name="email"
                placeholder="email@sample.com"
                component={InputField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fieldPassword">Password</label>
              <Field
                id="fieldPassword"
                type="password"
                name="password"
                placeholder="Enter password"
                component={InputField}
              />
            </div>
            <button
              type="submit"
              className={classNames("button btn-login", {
                "button-primary": isValid
              })}
              disabled={isSubmitting}
            >
              Log in
            </button>
          </form>
        )}
      </Formik>
      <Link to="./forgot-password" className="connect-link">
        Forgot password
      </Link>
    </div>
  );
}
