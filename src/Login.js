import { useState } from "react";
import api from "./api";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    const res = await api.post("/auth/login", user);
    alert(res.data);
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <input
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;