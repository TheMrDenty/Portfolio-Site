import Layout from "./components/Layout/index";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact/index";
import Projects from "./pages/Projects/index";
import About from "./pages/About/index";
import Project from "./pages/Project";

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path='/projects/:project' element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
