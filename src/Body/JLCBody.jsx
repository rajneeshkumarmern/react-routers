import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
function JLCBody() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/courses" element={<h1>Courses Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </div>
  );
}

export default JLCBody;