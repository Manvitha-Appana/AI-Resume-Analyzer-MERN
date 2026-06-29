import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadResume from "./pages/UploadResume";
import Dashboard from "./pages/Dashboard";
import AnalysisResult from "./pages/AnalysisResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
  path="/upload"
  element={
    <ProtectedRoute>
      <UploadResume />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/analysis/:id"
  element={
    <ProtectedRoute>
      <AnalysisResult />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;