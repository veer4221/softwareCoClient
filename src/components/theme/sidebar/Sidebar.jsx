import "./_sidebar.scss";
import React from "react";
import { useNavigate } from "react-router";
import { sidebarObject } from "../../../utils/staticObjects";
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const navigate = useNavigate();
  const onClickFunc = (menu) => {
    switch (menu?.slug) {
      case "logout":
        return () => {
          localStorage.clear();
          return navigate(menu?.path);
        };
      default:
        return navigate(menu?.path);
    }
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      {sidebarObject.map((menu) => (
        <>
          {menu.slug === "logout" && <hr />}
          <li onClick={() => onClickFunc(menu)}>
            {menu.icons}
            <span>{menu.name}</span>
          </li>
          {menu.slug === "logout" && <hr />}
        </>
      ))}
    </nav>
  );
};

export default Sidebar;
