import { FieldTypes } from "../../utils/staticObjects";
import * as Yup from "yup";

export const loginFormJSON = {
  ["form-slug"]: "login-form-user",
  formName: "Login ",
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
    label: "Login",
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
        .email("Enter valid Email")
        .required("Email is Requird"),
      fieldType: FieldTypes.EMAIL,
      label: "Email",
      placeholder: "Email",
      name: "useremail",
      fildSize: {
        md: "6",
        xs: "12",
        sm: "12",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Password is Requird"),
      fieldType: FieldTypes.PASSWORD,
      label: "Password",
      placeholder: "Password",
      name: "password",
      fildSize: {
        md: "6",
        xs: "12",
        sm: "12",
        lg: "6",
      },
    },
  ],
};
