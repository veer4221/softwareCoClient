import { FieldTypes } from "../../utils/staticObjects";
import * as Yup from "yup";

export const signupFormJSON = {
  ["form-slug"]: "signup-form-user",
  formName: "SignUp ",
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
        .required("First Name is Requird"),
      fieldType: FieldTypes.TEXT,
      label: "First Name",
      placeholder: "First Name",
      name: "firstname",
      fildSize: {
        md: "4",
        xs: "12",
        sm: "12",
        lg: "4",
      },
    },
    {
      initValue: "",
      validateField: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Middle Name is Requird"),
      fieldType: FieldTypes.TEXT,
      label: "Middle Name",
      placeholder: "First Name",
      name: "middlename",
      fildSize: {
        md: "4",
        xs: "12",
        sm: "12",
        lg: "4",
      },
    },
    {
      initValue: "",
      validateField: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Last Name is Requird"),
      fieldType: FieldTypes.TEXT,
      label: "Last Name",
      placeholder: "Last Name",
      name: "lastname",
      fildSize: {
        md: "4",
        xs: "12",
        sm: "12",
        lg: "4",
      },
    },
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
    
    {
      initValue: "",
      validateField: Yup.number().required("Salary is Requird"),
      fieldType: FieldTypes.NUMBER,
      label: "Salary",
      placeholder: "Salary",
      name: "salary",
      fildSize: {
        md: "6",
        xs: "12",
        sm: "12",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Birthdate is Requird"),
      fieldType: FieldTypes.DATE,
      label: "BirthDate",
      placeholder: "birthDate",
      name: "birthDate",
      fildSize: {
        md: "6",
        xs: "6",
        sm: "6",
        lg: "6",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Study is required!"),
      fieldType: FieldTypes.SELECT,
      label: "Study",
      placeholder: "Study",
      name: "study",
      options: [
        {
          label: "10 Pass",
          value: "10pass",
        },
        {
          label: "12 Pass",
          value: "12pass",
        },
        {
          label: "Graduate",
          value: "graduate",
        },
        {
          label: "Post Graduate",
          value: "postgraduate",
        },
        {
          label: "test4",
          value: "test4",
        },
      ],
    },
  ],
};
