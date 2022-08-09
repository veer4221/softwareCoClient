import { FieldTypes } from "../../utils/staticObjects";
import * as Yup from "yup";

export const loginFormJSON = {
  ["form-slug"]: "login-form-user",
  formName: "Login ",
  formPosition: "start",
  card: {
    style: {
      background: "#121417",
      color: "#c5bdbd",
    },
    shadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  fieldStyle: {
    background: "#83839421",
    labelColor: "white",
    color: "white",
  },
  submitButton: {
    label: "Login",
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
      validateField: Yup.string()
        .email("Enter valid Email")
        .required("Email is Requird"),
      fieldType: FieldTypes.EMAIL,
      label: "Email",
      placeholder: "Email",
      name: "useremail",
      fildSize: {
        md: "12",
        xs: "12",
        sm: "12",
        lg: "12",
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
        md: "12",
        xs: "12",
        sm: "12",
        lg: "12",
      },
    },
  ],
};
