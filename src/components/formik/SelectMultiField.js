import React from "react";
// 3rd packages
import { getIn } from "formik";
// components
import { SelectMulti } from "components/forms/select";

export default function SelectMultiField({
  field,
  form: { touched, errors, setFieldTouched, setFieldValue },
  ...props
}) {
  return (
    <>
      <SelectMulti
        {...field}
        {...props}
        onChange={value => setFieldValue(field.name, value)}
        onBlur={() => setFieldTouched(field.name, true)}
        value={field.value || ""}
        isInvalid={getIn(touched, field.name) && getIn(errors, field.name)}
      />
      {getIn(touched, field.name) && getIn(errors, field.name) && (
        <div className="invalid-feedback">{getIn(errors, field.name)}</div>
      )}
    </>
  );
}
