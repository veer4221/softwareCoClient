import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/theme/NavBar";
import Signup from "./pages/Signup";
import LoginForm from "./pages/LoginForm";
import Sidebar from "./components/theme/sidebar/Sidebar";
import { useState } from "react";
import Header from "./components/theme/header/Header";

function App() {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <div className="body ">
      <BrowserRouter>

        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="app__container">
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
          <div  className="container-fluid app__main bg-chalchitram">
            {/* <Outlet /> */}
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginForm />} />
    //     </Routes>

          </div>
        </div>
      </BrowserRouter>

    </div>
    // <div className="App">
    //   <BrowserRouter>
    //     <NavBar />
    //     <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/login" element={<LoginForm />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
