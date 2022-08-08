import React from "react";
import { ErrorMessage, Field, useField } from "formik";

const DynamicInput = (props) => {
  const [field, meta] = useField(props);
  const { label, name } = props;
  console.log("values::", field, meta, label, name);
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <Field
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        label={label}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={name} className="text-danger" />
    </div>
  );
};

export default DynamicInput;
