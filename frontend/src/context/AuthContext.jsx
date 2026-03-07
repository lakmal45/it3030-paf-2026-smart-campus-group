import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (typeof parsedUser === "object" && parsedUser !== null) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem("user");
        }
      } catch (error) {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  // Wrap in useCallback to prevent infinite render loops!
  const login = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }, []);

  // Wrap in useCallback
  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "http://localhost:8081/logout";
  }, []);

  const value = {
    user,
    setUser,
    role: user?.role || null,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading: loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
