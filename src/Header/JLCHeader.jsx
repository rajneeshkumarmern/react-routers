import { NavLink } from "react-router-dom";

function JLCHeader() {
  return (
    <div>
      <h1>Welcome to CourseCube!!!</h1>

      <nav>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            marginRight: "10px",
            textDecoration: isActive ? "underline" : "none"
          })}
        >
          Home
        </NavLink>

        <NavLink 
          to="/courses"
          style={({ isActive }) => ({
            marginRight: "10px",
            textDecoration: isActive ? "underline" : "none"
          })}
        >
          Courses
        </NavLink>

        <NavLink 
          to="/about"
          style={({ isActive }) => ({
            marginRight: "10px",
            textDecoration: isActive ? "underline" : "none"
          })}
        >
          About
        </NavLink>

        <NavLink 
          to="/contact"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none"
          })}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default JLCHeader;