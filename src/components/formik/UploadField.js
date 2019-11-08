import React from "react";
// 3rd packages
import { getIn } from "formik";
import { Form } from "react-bootstrap";
import classNames from "classnames";

export default function UploadField({
  field,
  form: { touched, errors },
  ...props
}) {
  return (
    <>
    <Form.Control
      {...field}
      {...props}
      value={field.value || ""}
      isInvalid={getIn(touched, field.name) && getIn(errors, field.name)}
    />
    {getIn(touched, field.name) && getIn(errors, field.name) && (
      <Form.Control.Feedback type="invalid">
        {getIn(errors, field.name)}
      </Form.Control.Feedback>
    )}
  </>
  );
}
