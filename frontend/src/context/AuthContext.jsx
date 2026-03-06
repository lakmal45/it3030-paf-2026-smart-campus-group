import { createContext, useContext, useState, useEffect } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Create the Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Prevents flickering before auth is checked

  useEffect(() => {
    // Check storage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // Trigger Spring Boot logout endpoint
    window.location.href = "http://localhost:8081/logout";
  };

  // The value object contains everything you want to share globally
  const value = {
    user,
    role: user?.role || null, // Convenient shorthand
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Only render the app once we've checked localStorage */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook for easy importing
export const useAuth = () => {
  return useContext(AuthContext);
};
