import React from "react";
import { FieldTypes } from "../../../utils/staticObjects";
import DynamicCheckBox from "./DynamicCheckBox";
import DynamicInput from "./DynamicInput";
import DynamicRadioBox from "./DynamicRadioBox";
import DynamicSelect from "./DynamicSelect";

const FormComponents = ({ field, fieldStyle, formik }) => {
  var cname = `col-md-${
    !!field?.fildSize?.md ? field?.fildSize?.md : "6"
  } col-xs-${!!field?.fildSize?.xs ? field?.fildSize?.xs : "12"} col-sm-${
    !!field?.fildSize?.sm ? field?.fildSize?.sm : "12"
  } col-lg-${!!field?.fildSize?.lg ? field?.fildSize?.lg : "6"}`;

  switch (field?.fieldType) {
    case FieldTypes?.TEXT:
    case FieldTypes?.DATE:
    case FieldTypes?.NUMBER:
    case FieldTypes?.TIME:
    case FieldTypes?.PASSWORD:
    case FieldTypes?.EMAIL:
      // const { md, xs, sm, lg } = field?.fildSize;
      return (
        <div className={cname}>
          <DynamicInput
            style={{
              background: fieldStyle?.background
                ? fieldStyle?.background
                : `white`,
            }}
            fieldStyle={fieldStyle}
            fieldData={field}
            label={field?.label}
            name={field?.name}
            type={field?.fieldType}
          />
        </div>
      );
    case FieldTypes?.SELECT:
      return (
        <div className={cname}>
          <DynamicSelect
            style={{
              background: fieldStyle?.background
                ? fieldStyle?.background
                : `white`,
            }}
            formik={formik}
            fieldStyle={fieldStyle}
            fieldData={field}
            label={field?.label}
            name={field?.name}
            type={field?.fieldType}
          />
        </div>
      );
    case FieldTypes?.RADIO:
      return (
        <div className={cname}>
          <DynamicRadioBox
            style={{
              background: fieldStyle?.background
                ? fieldStyle?.background
                : `white`,
            }}
            formik={formik}
            fieldStyle={fieldStyle}
            fieldData={field}
            label={field?.label}
            name={field?.name}
            type={field?.fieldType}
          />
        </div>
      );
    case FieldTypes?.CHECKBOX:
      return (
        <div className={cname}>
          <DynamicCheckBox
            style={{
              background: fieldStyle?.background
                ? fieldStyle?.background
                : `white`,
            }}
            formik={formik}
            fieldStyle={fieldStyle}
            fieldData={field}
            label={field?.label}
            name={field?.name}
            type={field?.fieldType}
          />
        </div>
      );
  }
  return null;
};

export default FormComponents;
