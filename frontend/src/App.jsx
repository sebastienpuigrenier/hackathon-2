import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "@components/NavBar";
import Home from "@pages/Home";
import UserProfil from "@pages/UserProfil";
import ProjectForm from "@pages/ProjectForm";
import ProjectsBoard from "@pages/ProjectsBoard";
import Project from "@pages/Project";
import Error404 from "@pages/Error404";

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="main-content">
      <NavBar />
      <div className="container">
        <div className="container2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<UserProfil />} />
            <Route path="/dashboard" element={<ProjectsBoard />} />
            <Route path="/form" element={<ProjectForm />} />
            <Route path="/project" element={<Project />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
