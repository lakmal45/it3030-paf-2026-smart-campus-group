import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// Context
import { AuthProvider, useAuth } from "./context/AuthContext";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OAuthSuccess from "./components/OAuthSuccess";

// Layout & Protection
import DashboardLayout from "./layout/DashboardLayout";
import ProtectedRoute from "./components/RoleProtectedRoute"; 

// Dashboards
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import TechnicianDashboard from "./pages/technician/TechnicianDashboard";

// A smart component to redirect to the correct dashboard based on role
const RoleBasedRedirect = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  switch (user.role?.toUpperCase()) {
    case "ADMIN":
    case "ROLE_ADMIN":
      return <Navigate to="/dashboard/admin" replace />;
    case "MANAGER":
    case "ROLE_MANAGER":
      return <Navigate to="/dashboard/manager" replace />;
    case "TECHNICIAN":
    case "ROLE_TECHNICIAN":
      return <Navigate to="/dashboard/technician" replace />;
    default:
      return <Navigate to="/dashboard/user" replace />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/oauth-success" element={<OAuthSuccess />} />

          {/* Root */}
          <Route path="/" element={<Home />} />

          {/* Protected Routes wrapped in Dashboard Layout */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* The index route does the smart role redirection */}
            <Route index element={<RoleBasedRedirect />} />

            {/* Specific Role Views */}
            <Route
              path="user"
              element={
                <ProtectedRoute allowedRoles={["USER", "ROLE_USER"]}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin"
              element={
                <ProtectedRoute allowedRoles={["ADMIN", "ROLE_ADMIN"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="manager"
              element={
                <ProtectedRoute allowedRoles={["MANAGER", "ROLE_MANAGER"]}>
                  <ManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="technician"
              element={
                <ProtectedRoute allowedRoles={["TECHNICIAN", "ROLE_TECHNICIAN"]}>
                  <TechnicianDashboard />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Fallback Unauthorized/Not Found */}
          <Route
            path="/unauthorized"
            element={
              <div className="p-10 text-center text-red-600 font-bold">
                Unauthorized Access
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;