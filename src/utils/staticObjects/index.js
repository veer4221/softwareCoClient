import { MdExitToApp, MdShoppingCart } from "react-icons/md";
import { SiAuth0 } from "react-icons/si";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
export { FieldTypes, sidebarObject };
const FieldTypes = {
  TEXT: "text",
  NUMBER: "number",
  TEXTAREA: "textarea",
  FILE: "file",
  EMAIL: "email",
  PASSWORD: "password",
  PSWD: "password",
  EMAIL: "email",
  SELECT: "select",
  RADIO: "radio",
  DATE: "date",
  TIME: "time",
  CHECKBOX: "checkbox",
};

const sidebarObject = [
  {
    path: `/en/userList`,
    name: "User",
    icons: <FaUser size={23} />,
    slug: "user",
  },
  {
    path: `/en/product`,
    name: "Products",
    icons: <BsFillBagCheckFill size={23} />,
    slug: "products",
  },
  {
    path: `/`,
    name: "Cart",
    icons: <MdShoppingCart size={23} />,
    slug: "cart",
  },
  {
    path: `/en/PermissionList`,
    name: "Permissions",
    icons: <SiAuth0 size={23} />,
  },
  {
    path: `/`,
    name: "Log Out",
    icons: <MdExitToApp size={23} />,
    slug: "logout",
  },
];
