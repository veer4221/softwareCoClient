import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import AuthRouts from "./pages/AuthRouts";
import AuthForms from "./pages/AuthForms";
import Product from "./pages/Product";
import ProductInfo from "./pages/ProductInfo";
import AddEditProduct from "./pages/Product/AddEditProduct";
import UserList from "./pages/User";
import { Permission } from "./pages/Permission";
import PermissionList from "./pages/Permission/PermissionList";
import AddRole from "./pages/Permission/AddRole";
import AssignPermission from "./pages/Permission/AssignPermission";
import Cart from "./pages/cart";
import DynamicTable from "./pages/DynamicTable";

function App() {
  return (
    <div className="body ">
      <BrowserRouter>
        <Routes>
          <Route path="/en" element={<AuthRouts />}>
            <Route path="" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="DynamicTable" element={<DynamicTable />} />
            <Route path="productInfo/:id" element={<ProductInfo />} />
            <Route path="addProduct" element={<AddEditProduct />} />
            <Route path="UserList" element={<UserList />} />
            <Route path="Permissions/:id" element={<Permission />} />
            <Route path="PermissionList" element={<PermissionList />} />
            <Route path="AddRole" element={<AddRole />} />
            <Route path="cart" element={<Cart />} />
            <Route path="AssignPermission/:id" element={<AssignPermission />} />
          </Route>
          <Route
            path="/"
            element={
              !localStorage.getItem("token") || true ? (
                <Outlet />
              ) : (
                <Navigate to="/en" replace />
              )
            }
          >
            <Route path="" element={<AuthForms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
