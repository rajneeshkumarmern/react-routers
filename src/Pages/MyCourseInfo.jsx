import { useParams, NavLink } from "react-router-dom";

function MyCourseInfo() {
  const { couId, couName } = useParams();

  return (
    <div>
      <h1>Info about {couName}</h1>

      <p>Course Id: {couId}</p>

      <NavLink to="/courses">Back to Courses</NavLink>
    </div>
  );
}

export default MyCourseInfo;