import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Login from "../Pages/Login";

const Courses = lazy(() => import("../Pages/Courses"));

function JLCBody() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default JLCBody;