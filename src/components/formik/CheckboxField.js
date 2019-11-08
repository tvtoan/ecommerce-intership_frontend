import React from "react";
// 3rd packages
import { getIn } from "formik";
// components
import CheckboxControl from "components/forms/checkbox";

export default function CheckboxField({
  field,
  form: { touched, errors },
  ...props
}) {
  return (
    <>
      <CheckboxControl
        {...field}
        {...props}
        checked={field.value || false}
        isInvalid={getIn(touched, field.name) && getIn(errors, field.name)}
      >
        {getIn(touched, field.name) && getIn(errors, field.name) && (
        <div className="invalid-feedback">{getIn(errors, field.name)}</div>
      )}
      </CheckboxControl>
    </>
  );
}
