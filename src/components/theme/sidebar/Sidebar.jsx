import "./_sidebar.scss";
import React from "react";
import { useNavigate } from "react-router";
import { sidebarObject } from "../../../utils/staticObjects";
import { isSingalPermissionsAvailable } from "../../../utils/PermissionChecker";
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const navigate = useNavigate();
  const onClickFunc = (menu) => {
    switch (menu?.slug) {
      case "logout":
        // alert("logout");
        localStorage.clear();
        return navigate(`/`);
      // return () => {
      // };
      default:
        return navigate(menu?.path);
    }
  };
  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"} onClick={() => handleToggleSidebar(false)}>
      {sidebarObject.map((menu) => (
        <>
          {(isSingalPermissionsAvailable(menu.permissions) || menu.slug === "logout") && (
            <>
              {menu.slug === "logout" && <hr />}
              <li onClick={() => onClickFunc(menu)}>
                {menu.icons}
                <span>{menu.name}</span>
              </li>
              {menu.slug === "logout" && <hr />}
            </>
          )}
        </>
      ))}
    </nav>
  );
};

export default Sidebar;
