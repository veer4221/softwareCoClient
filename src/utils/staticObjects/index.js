import { MdExitToApp, MdShoppingCart } from "react-icons/md";
import { SiAuth0 } from "react-icons/si";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaUser, FaTable } from "react-icons/fa";
import { FiZoomOut, FiZoomIn } from "react-icons/fi";
export {
  FieldTypes,
  sidebarObject,
  profileInfo,
  PERMISSIONS,
  TableColumnType,
  imageCellBTN_OBJ,
};
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
const imageCellBTN_OBJ = {
  widthBtn: [
    {
      icon: <FiZoomIn size={25} />,
      slug: "w-zoom-in",
    },
    {
      icon: <FiZoomOut size={25} />,
      slug: "w-zoom-out",
    },
  ],
  heightBtn: [
    {
      icon: <FiZoomIn size={25} />,
      slug: "h-zoom-in",
    },
    {
      icon: <FiZoomOut size={25} />,
      slug: "h-zoom-out",
    },
  ],
};
const PERMISSIONS = {
  PRODUCT: "PRODUCT",
  ADD_PRODUCT: "ADD_PRODUCT",
  EDIT_PRODUCT: "EDIT_PRODUCT",
  VIEW_PRODUCT: "VIEW_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  CART: "CART",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  PERMISSIONS: "PERMISSIONS",
  ADD_ROLE_AND_PERMISSION: "ADD_ROLE_AND_PERMISSION",
  EDIT_ROLE_AND_PERMISSIONS: "EDIT_ROLE_AND_PERMISSIONS",
  VIEW_CART: "VIEW_CART",
  USERS: "USERS",
  VIEW_USERS: "VIEW_USERS",
  ROLE_ASSIGN: "ROLE_ASSIGN",
  VIEW_PERMISSIONS: "VIEW_PERMISSIONS",
};
const TableColumnType = {
  BLANK: "BLANK",
  TEXT: "TEXT",
  DATE_TIME: "DATE_TIME",
  DATE: "DATE",
  TIME: "TIME",
  PRICE: "PRICE",
  BADGE: "BADGE",
  IMAGE: "IMAGE",
  PROFILE_IMAGE: "PROFILE_IMAGE",
  ARRAY_LENGTH: "ARRAY_LENGTH",
  DROPDOWN: "DROPDOWN",
  AVATAR_LIST: "AVATAR_LIST",
  CHECKBOX: "CHECKBOX",
  AVATAR_AND_NAME: "AVATAR_AND_NAME",
  CUSTOM_JSX: "CUSTOM_JSX",
  SUMMARY: "SUMMARY",
};

const sidebarObject = [
  {
    path: `/en/userList`,
    name: "User",
    icons: <FaUser size={23} />,
    slug: "user",
    permissions: PERMISSIONS.VIEW_USERS,
  },
  {
    path: `/en/product`,
    name: "Products",
    icons: <BsFillBagCheckFill size={23} />,
    slug: "products",
    permissions: PERMISSIONS.VIEW_PRODUCT,
  },
  {
    path: `/en/cart`,
    name: "Cart",
    icons: <MdShoppingCart size={23} />,
    slug: "cart",
    permissions: PERMISSIONS.VIEW_CART,
  },
  {
    path: `/en/PermissionList`,
    name: "Permissions",
    icons: <SiAuth0 size={23} />,
    permissions: PERMISSIONS.VIEW_PERMISSIONS,
  },
  {
    path: `/en/DynamicTable`,
    name: "DynamicTable",
    icons: <FaTable size={23} />,
    slug: "dynamic-table",
    permissions: PERMISSIONS.VIEW_PRODUCT,
  },
  {
    path: `/`,
    name: "Log Out",
    icons: <MdExitToApp size={23} />,
    slug: "logout",
  },
];

const profileInfo = {
  biodata: [
    {
      title: "Name",
      value: "PATEL VINAYKUMAR MANISHBHAI",
    },
    {
      title: "Email",
      value: "PATELVEER4221@GMAIL.COM",
    },
    {
      title: "MO",
      value: "9723479653",
    },
    {
      title: "From",
      value: "THALTEJ,AHMEDABAD",
    },
  ],
  projectInfo: [
    {
      name: "VenueSmart Financial Tool",
      info: `: This platform provides Venue Smart Australia to manage the handle their
    partner/franchise, their deals details, prospective clients of the deals, growth of the partner andforecast their performance and profit details.`,
      technology: `React JS, Redux, MySQL, Node JS, HTML, CSS, Bootstrap, AWS EC2, S3, CloudFront`,
    },
    {
      name: `Invoice Daily`,
      technology: "React JS, Redux, Firebase Database, HTML, CSS, Bootstrap",
      info: `Use the Invoice Daily app to log hours & expenses in the Projects you are workingin, create PDF Invoices and send them to your Client. Invite them to log hours & expenses "on the go" onthe same Invoice, using their iPhones/Android telephone. This is achieved using "a truly real-timesyncing engine".`,
    },
    {
      name: `OnleUs – Personal Social Networking`,
      technology: "React JS, Redux, MySQL Database, HTML, CSS, Bootstrap",
      info: `Created API for Mobile applications (Android) and Web APP. This application is wheretheuser creates a group with their current location. Users can also find groups with their nearest locationas well as specified location. Users can also join/leave the group from APP / Web App. User canuploadtheir pics in groups, and other users who belong to this group can do comments, votes, likes onthat
    comments. Users can purchase uploaded pix from the `,
    },
    {
      name: `Auto S Hub (Tech Mahindra)`,
      technology: `React JS, Redux, RXJS, MSSQL, HTML, CSS, Bootstrap,Node Js`,
      info: `Created web application for company internal training process. This application is havinguser management along with roles and training management. This web app also includes executivedashboard to view different types of reports based on employees training.`,
    },
    {
      name: "Disctopia",
      technology: "React JS, MSSQL, HTML, CSS, Bootstrap",
      info: "Disctopia is a podcast hosting & streaming service dedicated to indie artists, podcasters, and content creators seeking creative freedom and simple merchandising integration",
    },
    {
      name: `Trrain Circle Retailer Admin panel`,
      technology: "React JS, Redux, HTML, CSS, Bootstrap,mongoDB,laravel",
      info: `Trrain Circle Retailer panel created with the ReactJS and the Retailer Panel, and linked to the Adminpanel and a mobile application. Trrain Circle provides support to people who are facing financial issuesand cannot afford to buy insurance, mediclaim, or any other product that is necessary in their lives. Trrain Circle provides support to these kinds of people and helps them to buy insurance, mediclaim, or
    any other product at the best prices so they can also take the benefits of buying necessary things.`,
    },
    {
      name: `Ekta -Ej -Laksh WebApp`,
      technology:
        "React JS,Redux , MySQL, HTML, CSS, Bootstrap,NodeJs AWS EC2, S3",
      info: "This Website provides informations and services regarding works which has been doneby EKTA EK LAKSH. It has lots of branch and this application provide basic details for that branches. To add in this , Application Use payment gateway and for payment i use Razorpay. Any person joinEKTA EK LAKSH By just fill the Basic Form. Some of the feature in this application is only workingonthe DEV server , for Production server it is under implementation.",
    },
    {
      name: `Ekta -Ej -Laksh Job Portal`,
      technology:
        "React JS,Redux , MySQL, HTML, CSS, Bootstrap,NodeJs AWS EC2, S3",
      info: `This Website Has job portal and it's name is sweet and simple "ROJGHAR". Purpose
    behind of this application is to provide relavent jobs to the users. For Job , User have to join EKTAEKLAKSHY group. whenever user need any employee then user add the basic details reagardingjobsand others will see that jobs. Some of the feature in this application is only working on the DEVserver , for Production server it is under implementation.`,
    },
    {
      name: `. Ekta -Ej -Laksh Chalchitram (LIKE YOUTUBE)`,
      technology:
        "React JS,Redux , MySQL, HTML, CSS, Bootstrap,NodeJs AWS EC2, S3",
      info: ":Person Who want to learn about sanatan dharma likes vedas , upnishad , ramayana, mahabharat , bhaghvat gita they can go to this web application. It has learning videos as well as",
    },
  ],
};
