import { FieldTypes } from "../../utils/staticObjects";
import * as Yup from "yup";

export const userFormJSON = {
  ["form-slug"]: "user-Form-add",
  formName: "User Form ",
  formPosition: "start",
  card: {
    background: "#e8e8e8a3",
    shadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  fieldStyle: {
    background: "#0000ff21",
    labelColor: "blue",
  },
  submitButton: {
    label: "Submit",
    style: {
      background: "#00800085",
      color: "white",
    },
  },
  resetButton: {
    label: "Reset",
    style: {
      background: "#d04040",
      color: "white",
    },
  },
  Fields: [
    {
      initValue: "",
      validateField: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This Field is Requird"),
      fieldType: FieldTypes.TEXT,
      label: "userName",
      placeholder: "userName",
      name: "userName",
      // fildSize: {
      //   md: "6",
      //   xs: "12",
      //   sm: "12",
      //   lg: "6",
      // },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Color is required!"),
      fieldType: FieldTypes.SELECT,
      label: "Select",
      placeholder: "Select",
      name: "Select",
      options: [
        {
          label: "test",
          value: "test",
        },
        {
          label: "test1",
          value: "test1",
        },
        {
          label: "test2",
          value: "test2",
        },
        {
          label: "test3",
          value: "test3",
        },
        {
          label: "test4",
          value: "test4",
        },
      ],
    },
    {
      initValue: "",
      validateField: Yup.boolean().required("Color is required!"),
      fieldType: FieldTypes.CHECKBOX,
      label: "check123",
      placeholder: "check",
      name: "check",
      options: [
        {
          label: "check",
        },
      ],
    },
    {
      initValue: "",
      validateField: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      fieldType: FieldTypes.TEXT,
      label: "lastName",
      placeholder: "lastName",
      name: "lastName",
      fildSize: {
        md: "6",
        xs: "6",
        sm: "6",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Required"),
      fieldType: FieldTypes.DATE,
      label: "Date",
      placeholder: "Date",
      name: "Date",
      fildSize: {
        md: "6",
        xs: "6",
        sm: "6",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Required"),
      fieldType: FieldTypes.DATE,
      label: "Date",
      placeholder: "Date",
      name: "Date",
      fildSize: {
        md: "6",
        xs: "6",
        sm: "6",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Required"),
      fieldType: FieldTypes.TIME,
      label: "Time",
      placeholder: "Time",
      name: "Time",
      fildSize: {
        md: "6",
        xs: "6",
        sm: "6",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Required"),
      fieldType: FieldTypes.RADIO,
      label: "Radio",
      placeholder: "Radio",
      name: "Radio",
      options: [
        {
          label: "test",
          value: "test",
        },
        {
          label: "test1",
          value: "test1",
        },
        {
          label: "test2",
          value: "test2",
        },
        {
          label: "test3",
          value: "test3",
        },
        {
          label: "test4",
          value: "test4",
        },
      ],
      fildSize: {
        md: "6",
        xs: "6",
        sm: "6",
        lg: "6",
      },
    },
  ],
};
