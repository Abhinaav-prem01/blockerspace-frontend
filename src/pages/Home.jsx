import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to Blockerspace</h1>
      <p>Your Cyber Social Media Platform</p>

      <button onClick={() => navigate("/login")}>
        Login
      </button>

      <br /><br />

      <button onClick={() => navigate("/register")}>
        Register
      </button>
    </div>
  );
}

export default Home;
