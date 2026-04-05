import { Link } from "react-router-dom";

function CourseList() {
  const courseInfo = [
    { courseId: 101, courseName: "React Course" },
    { courseId: 102, courseName: "Angular Course" },
    { courseId: 103, courseName: "Spring Boot Course" },
    { courseId: 104, courseName: "MicroServices Course" },
    { courseId: 105, courseName: "Java Full Stack Course" },
  ];

  return (
    <div>
      <h1>Courses List</h1>

      {courseInfo.map((course) => (
        <div key={course.courseId}>
          <Link to={`/mycourses/${course.courseId}/${course.courseName}`}>
            {course.courseName}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CourseList;