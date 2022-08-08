import React from "react";
import DynamicForm from "../components/DynamicForm";
import { loginFormJSON } from "../forms/LoginForm";

const LoginForm = () => {
  return (
    <div className="">
      <DynamicForm formData={loginFormJSON} />
    </div>
  );
};

export default LoginForm;
