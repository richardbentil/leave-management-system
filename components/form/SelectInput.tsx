import { useField } from "formik";

function SelectInput({ ...props }: any) {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const err = error && touched;

  return (
    <>
      <select
        {...field}
        {...props}
        className={`form-select mb-1 ${err ? "is-invalid" : ""}`}
      />
      {err && <small className="form-text text-danger">{error}</small>}
    </>
  );
}

export default SelectInput;
