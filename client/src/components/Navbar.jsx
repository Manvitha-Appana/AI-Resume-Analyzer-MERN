// import { FaBrain } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         <FaBrain className="logo-icon" />
//         <span>AI Resume Analyzer</span>
//       </Link>

//       <div className="nav-links">
//         <Link to="/">Home</Link>

//         <Link to="/dashboard">
//           Dashboard
//         </Link>

//         <button
//           className="logout-btn"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;