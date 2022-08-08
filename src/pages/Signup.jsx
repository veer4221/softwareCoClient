import React from "react";
import DynamicForm from "../components/DynamicForm";
import { signupFormJSON } from "../forms/SignupForm";

const Signup = () => {
  return (
    <div className="">
      <DynamicForm formData={signupFormJSON} />
    </div>
  );
};

export default Signup;
