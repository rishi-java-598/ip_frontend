// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/context/Authcontext";

export default function ProtectedRoute({ children }) {
      const user = localStorage.getItem("user");

  
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
