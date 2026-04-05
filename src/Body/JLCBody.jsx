import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import MyCourseInfo from "../Pages/MyCourseInfo";

function JLCBody() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/mycourses/:couId/:couName" element={<MyCourseInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default JLCBody;