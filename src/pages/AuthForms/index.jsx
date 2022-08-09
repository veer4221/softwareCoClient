import React, { useState, useEffect } from "react";
import "./style.scss";
import logo from "../../assets/images/minilogo.png";
import DynamicForm from "../../components/DynamicForm";
import { loginFormJSON, signupFormJSON } from "../../forms";

const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formDataJSON, setFormDataJSON] = useState(loginFormJSON);
  useEffect(() => {
    if (isLogin) return setFormDataJSON(loginFormJSON);
    return setFormDataJSON(signupFormJSON);
  }, [isLogin]);
  return (
    <div className="login bg-chalchitram">
      <div className="login__container">
        <img src={logo} alt="" />
        <DynamicForm formData={formDataJSON} isReRender={isLogin} />
        <div style={{ color: "white" }}>
          Not yet member?
          <span
            style={{ color: "#00ffb4", cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            Signup Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;
