import { Route, Routes } from "react-router-dom";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Error404 from "@pages/Error404";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
