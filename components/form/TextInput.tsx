import { useField } from "formik";

function TextInput({ ...props }: any) {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const err = error && touched;

  return (
    <>
      <input
        {...field}
        {...props}
        className={`form-control mb-1 ${err ? "is-invalid" : ""}`}
      />
      {err && <small className="form-text text-danger">{error}</small>}
    </>
  );
}

export default TextInput;
