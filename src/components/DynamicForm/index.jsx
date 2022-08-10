import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormComponents from "./FormComponents";
import { submitLoginFunction, signupFunction } from "../../utils/submitHandlerFunctions";
import { useNavigate } from "react-router-dom";
const DynamicForm = ({ formData, isReRender }) => {
  const navigate = useNavigate();

  const submitHandle = (values) => {
    switch (formData["form-slug"]) {
      case "signup-form-user":
        return signupFunction(values).then((data) => alert(data));
      case "login-form-user":
        return submitLoginFunction(values).then((data) => {
          alert(data?.message);
          if (data?.result) return navigate(`/`);
        });
    }
  };
  useEffect(() => {
    console.log("useERKJVBSD,MFBVGM,SADF");
  }, [isReRender]);
  return (
    <div className="container-fluid">
      <Formik
        initialValues={Object.assign({}, ...formData?.Fields.map((x) => ({ [x.name]: x.initValue })))}
        validationSchema={Yup.object(Object.assign({}, ...formData?.Fields.map((x) => ({ [x.name]: x.validateField }))))}
        onSubmit={submitHandle}
      >
        {(formik) => (
          <div className="container-fluid p-3 mt-1" style={formData?.card?.style}>
            {console.log("formik::", formik)}
            <div className="row">
              <div className="col12">
                <h3>{formData?.formName}</h3>
              </div>
            </div>

            <Form>
              <div className="container-fluid ">
                <div className="row">
                  {formData?.Fields?.map((field) => (
                    <FormComponents field={field} formik={formik} fieldStyle={formData?.fieldStyle} />
                  ))}
                </div>

                <div className="row">
                  <div className={`col-12 d-flex justify-content-${formData?.submitButton?.position || "end"}`}>
                    {formData?.resetButton?.required && (
                      <button className="btn mt-3 " type="reset" style={formData?.resetButton?.style}>
                        <span className="ml-3 ">{formData?.resetButton?.label}</span>
                      </button>
                    )}
                    <button className="btn  mt-3" type="submit" style={formData?.submitButton?.style}>
                      <span className="ml-3 ">{formData?.submitButton?.label}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
