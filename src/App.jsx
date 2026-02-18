import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Feed from "./pages/Feed.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />          {/* Landing */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/feed" element={<Feed />} />      {/* Actual Home after login */}
    </Routes>
  );
}

export default App;


