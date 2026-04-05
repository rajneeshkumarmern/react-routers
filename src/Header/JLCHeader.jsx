import { NavLink } from "react-router-dom";

function JLCHeader() {
  const linkStyle = ({ isActive }) => ({
    marginRight: "15px",
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div>
      <h1>Welcome to CourseCube!!!</h1>

      <nav>
        <NavLink to="/" style={linkStyle}>Home</NavLink>

        <NavLink 
          to="/courses?name=JLC#Hello" 
          style={linkStyle}
        >
          Courses
        </NavLink>

        <NavLink to="/about" style={linkStyle}>About</NavLink>

        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </div>
  );
}

export default JLCHeader;