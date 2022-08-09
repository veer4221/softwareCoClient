import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Sidebar from "../../components/theme/sidebar/Sidebar";
import Header from "../../components/theme/header/Header";

const AuthRouts = () => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <div
      style={{ overflowY: "scroll !important", overflowX: "hidden !important" }}
    >
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <div className="container-fluid app__main bg-chalchitram">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthRouts;
