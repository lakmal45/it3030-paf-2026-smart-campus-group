import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>PAF Auth System</h1>
      <p>Spring Boot + React + MySQL</p>

      <Link to="/signup">
        <button>Signup</button>
      </Link>

      <Link to="/login" style={{ marginLeft: "10px" }}>
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
