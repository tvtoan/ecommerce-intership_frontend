import React from "react";
// 3rd packages
import { getIn } from "formik";
// components
import InputControl from "components/forms/input";

export default function InputField({
  field,
  form: { touched, errors },
  ...props
}) {
  return (
    <>
      <InputControl
        {...field}
        {...props}
        value={field.value || ""}
        isInvalid={getIn(touched, field.name) && getIn(errors, field.name)}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <div className="invalid-feedback">{getIn(errors, field.name)}</div>
      )}
    </>
  );
}
