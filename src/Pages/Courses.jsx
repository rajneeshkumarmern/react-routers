import { useEffect } from "react";

function Courses() {
  useEffect(() => {
    console.log("Courses page loaded");
  }, []);

  return <h2>This is Courses page</h2>;
}

export default Courses;