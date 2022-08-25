import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Sidebar from "../../components/theme/sidebar/Sidebar";
import Header from "../../components/theme/header/Header";

const AuthRouts = () => {
  const navigate = useNavigate();

  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  // if (!localStorage.getItem("token")) return navigate("/");
  return (
    <div
      style={{ overflowY: "scroll !important", overflowX: "hidden !important" }}
    >
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <div className="container-fluid app__main bg-chalchitram">
          {localStorage.getItem("token") || true ? (
            <Outlet />
          ) : (
            <Navigate to="/" replace />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthRouts;
