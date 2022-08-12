import { FieldTypes } from "../../utils/staticObjects";
import * as Yup from "yup";

export const productFormJSON = {
  ["form-slug"]: "product-form-dynamic",
  formName: "Product",
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
      validateField: Yup.string().max(15, "Must be 15 characters or less").required("Product Name is Requird"),
      fieldType: FieldTypes.TEXT,
      label: "Product Name",
      placeholder: "Product Name",
      name: "product_name",
      fildSize: {
        md: "4",
        xs: "12",
        sm: "12",
        lg: "4",
      },
    },
    {
      initValue: "",
      validateField: Yup.number().required("M.R.P is Requird"),
      fieldType: FieldTypes.NUMBER,
      label: "M.R.P",
      placeholder: "MRP",
      name: "m_r_p",
      fildSize: {
        md: "4",
        xs: "12",
        sm: "12",
        lg: "4",
      },
    },
    {
      initValue: "",
      validateField: Yup.mixed().required("Image is required"),
      fieldType: FieldTypes.FILE,
      label: "file",
      placeholder: "Image",
      name: "product_image",
      fildSize: {
        md: "4",
        xs: "12",
        sm: "12",
        lg: "4",
      },
    },
    {
      initValue: "",
      validateField: Yup.string().required("Product Information is Requird"),
      fieldType: FieldTypes.TEXTAREA,
      label: "Product Information",
      placeholder: "product_information",
      name: "product_information",
      fildSize: {
        md: "12",
        xs: "12",
        sm: "12",
        lg: "12",
      },
    },
  ],
};
