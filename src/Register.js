import { useState } from "react";
import api from "./api";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "VOTER"
  });

  const handleSubmit = async () => {
    await api.post("/auth/register", user);
    alert("Registered Successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Register</h2>

        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;