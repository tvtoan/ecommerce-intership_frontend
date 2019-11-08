import React from "react";
// 3rd packages
import { getIn } from "formik";
// components
import { SelectMulti } from "components/forms/select";

export default function SelectMultiField({
  field,
  form: { touched, errors },
  ...props
}) {
  return (
    <>
      <SelectMulti {...field} {...props} />
    </>
  );
}
