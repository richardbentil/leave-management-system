import { useField } from "formik";
import React from "react";

function TextArea({ ...props }: any) {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const err = error && touched;

  return (
    <>
      <textarea
        {...field}
        {...props}
        className={`form-control ${err ? "is-invalid" : ""}`}
      ></textarea>
      {err && <small className="form-text text-danger">{error}</small>}
    </>
  );
}

export default TextArea;
