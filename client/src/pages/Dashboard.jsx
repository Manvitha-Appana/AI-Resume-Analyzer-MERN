import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

      console.log(response.data);

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
    <div>
      <h1>Dashboard</h1>

      <form onSubmit={handleAnalyze}>
        <input
          type="text"
          placeholder="Target Role"
          value={targetRole}
          onChange={(e) =>
            setTargetRole(e.target.value)
          }
        />

        <br />
        <br />

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

        <br />
        <br />

        <button type="submit">
          Analyze Resume
        </button>
      </form>
    </div>
  );
}

export default Dashboard;