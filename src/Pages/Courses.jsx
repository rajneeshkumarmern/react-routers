import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseList from "../components/CourseList";

function Courses() {
  const location = useLocation();

  useEffect(() => {
    console.log("hash:", location.hash);
    console.log("pathname:", location.pathname);
    console.log("search:", location.search);
  }, [location]);

  return <CourseList />;
}

export default Courses;