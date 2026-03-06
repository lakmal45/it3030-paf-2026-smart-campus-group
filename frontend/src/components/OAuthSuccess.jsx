import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OAuthSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const email = params.get("email");
    const name = params.get("name");
    const role = params.get("role");

    if (email && name && role) {
      localStorage.setItem("user", JSON.stringify({ email, name, role }));
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-semibold text-indigo-600">
        Logging you in with Google...
      </p>
    </div>
  );
};

export default OAuthSuccess;
