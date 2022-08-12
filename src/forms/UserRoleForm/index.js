import { FieldTypes } from "../../utils/staticObjects";
import * as Yup from "yup";

export const userRoleFormJSON = {
  ["form-slug"]: "user-role-assign-form-dynamic",
  formName: "Assign User Role",
  formPosition: "start",
  card: {
    style: {
      background: "rgba(42, 53, 81, 0.3) !important",
      borderRadius: "16px !important",

      boxShadow: "inset 0 4px 30px rgba(0, 0, 0 , 0.10)",
      backdropFilter: "blur(5px) !important",
      border: "1px solid #ffffff4d",
      color: "white",
    },
    shadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  fieldStyle: {
    background: "#83839421",
    labelColor: "white",
    color: "white",
  },
  submitButton: {
    label: "Create",
    position: "around",
    style: {
      background: "#00800085",
      color: "white",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  resetButton: {
    required: true,
    label: "Reset",
    style: {
      background: "#d04040",
      color: "white",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  Fields: [
    {
      initValue: "",
      validateField: Yup.string().max(15, "Must be 15 characters or less").required("Role Name is Requird"),
      fieldType: FieldTypes.TEXT,
      disabled: true,
      label: "User Name",
      placeholder: "Role Name",
      name: "rolename",
      fildSize: {
        md: "6",
        xs: "12",
        sm: "12",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Role is required!"),
      fieldType: FieldTypes.SELECT,
      label: "Role",
      placeholder: "Role",
      name: "role",
      fildSize: {
        md: "6",
        xs: "12",
        sm: "12",
        lg: "6",
      },
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
  ],
};
