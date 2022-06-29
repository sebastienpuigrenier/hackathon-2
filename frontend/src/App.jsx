import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "@components/NavBar";
import Home from "@pages/Home";
import ProjectForm from "@pages/ProjectForm";
import Project from "@pages/Project";
import ProjectsBoard from "@pages/ProjectsBoard";
import Error404 from "@pages/Error404";

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="main-content">
      <NavBar />
      <div className="pages-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<ProjectsBoard />} />
          <Route path="/form" element={<ProjectForm />} />
          <Route path="/project" element={<Project />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
