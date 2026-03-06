import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the hook

const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role, isAuthenticated } = useAuth(); // Grab state from context

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RoleProtectedRoute;
