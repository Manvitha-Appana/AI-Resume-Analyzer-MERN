import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaBrain } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const [targetRole, setTargetRole] = useState("");
  const [experienceLevel, setExperienceLevel] =
    useState("");

  const handleAnalyze = async (e) => {
    e.preventDefault();

    const resumeId =
      localStorage.getItem("resumeId");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/analysis/analyze",
        {
          resumeId,
          targetRole,
          experienceLevel,
        }
      );

      alert("Analysis Completed!");

      //console.log(response.data);

      localStorage.setItem(
        "analysisId",
        response.data.analysis._id
      );
      localStorage.setItem(
  "analysis",
  JSON.stringify(response.data.analysis)
);

      navigate(
        `/analysis/${response.data.analysis._id}`
      );
    } catch (error) {
      console.log(error);

      alert("Analysis Failed");
    }
  };

  return (
  <div className="dashboard-container">
    <div className="dashboard-card">
      <div className="page-logo">
              <FaBrain className="brain-icon" />
            <span>AI Resume Analyzer</span>
          </div>
      <h1>Resume Analysis Dashboard</h1>

      <p>
        Select your target role and experience
        level to receive personalized AI-powered
        resume feedback.
      </p>

      <form onSubmit={handleAnalyze}>
        <input
          type="text"
          placeholder="Target Role (Example: Data Analyst)"
          value={targetRole}
          onChange={(e) =>
            setTargetRole(e.target.value)
          }
        />

        <select
          value={experienceLevel}
          onChange={(e) =>
            setExperienceLevel(
              e.target.value
            )
          }
        >
          <option value="">
            Select Experience Level
          </option>

          <option value="Fresher">
            Fresher
          </option>

          <option value="1-3 Years">
            1-3 Years
          </option>

          <option value="3-5 Years">
            3-5 Years
          </option>

          <option value="5+ Years">
            5+ Years
          </option>
        </select>

        <button type="submit">
          Analyze Resume
        </button>
      </form>
    </div>
  </div>
);
}

export default Dashboard;