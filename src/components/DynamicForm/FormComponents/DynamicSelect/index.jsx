import React from "react";
import { ErrorMessage, Field, useField } from "formik";

const DynamicSelect = (props) => {
  const [field, meta] = useField(props);
  const { label, name } = props;
  console.log("valuesSelect::", field, meta, label, name);
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        label={label}
        {...field}
        {...props}
        autoComplete="off"
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
      >
        <option value=""></option>
        {props?.fieldData?.options?.map((option) => (
          <option value={option?.value}>{option?.label}</option>
        ))}
      </Field>

      <ErrorMessage component="div" name={name} className="text-danger" />
    </div>
  );
};

export default DynamicSelect;
