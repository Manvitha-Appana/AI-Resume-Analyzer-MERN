import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import { FaBrain } from "react-icons/fa";

function Register() {
   const navigate = useNavigate();
   const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      `${API_URL}/api/auth/register`,
      formData
    );

    alert(response.data.message);

    //console.log(response.data);
    navigate("/login");
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Registration failed"
    );
  }
};
  return (
  <div className="register-container">
    <div className="register-card">
      <div className="page-logo">
  <FaBrain className="brain-icon" />
  <span>AI Resume Analyzer</span>
</div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>
      </form>

      <p className="login-link">
        Already have an account?{" "}
        <Link to="/login">
          Login
        </Link>
      </p>
    </div>
  </div>
);
}

export default Register;