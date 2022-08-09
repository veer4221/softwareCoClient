import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import AuthRouts from "./pages/AuthRouts";
import AuthForms from "./pages/AuthForms";

function App() {
  return (
    <div className="body ">
      <BrowserRouter>
        <Routes>
          <Route path="/en" element={<AuthRouts />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/" element={<Outlet />}>
            <Route path="" element={<AuthForms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
