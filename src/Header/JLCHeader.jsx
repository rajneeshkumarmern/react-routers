import { Link } from "react-router-dom";

function JLCHeader() {
  return (
    <div>
      <h3>Welcome to CourseCube!!!</h3>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
}

export default JLCHeader;