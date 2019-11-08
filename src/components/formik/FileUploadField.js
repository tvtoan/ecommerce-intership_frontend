import React from "react";
// 3rd packages
import { getIn } from "formik";
// import classNames from "classnames";
// components
import FileUpload from "components/forms/file-upload";

export default function FileUploadField({
  field,
  form: { touched, errors, setFieldValue, setFieldTouched, handleBlur },
  ...props
}) {
  return (
    <>
      <FileUpload
        {...field}
        {...props}
        files={field.value || ""}
        onBlur={setFieldTouched}
        onChangeFormik={setFieldValue}
        validateMessage={
          (getIn(touched, field.name) && getIn(errors, field.name)) ? getIn(errors, field.name) : ""
        }
      />
    </>
  );
}
