import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBrain } from "react-icons/fa";
import "./History.css";

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const user = JSON.parse(
          localStorage.getItem("user")
        );

        const response = await axios.get(
          `${API_URL}/api/analysis/history/${user.id}`
        );
        // console.log(
        //   "History data:",
        //   response.data.history
        //         );

        setHistory(
          response.data.history
        );

      } catch (error) {
        console.log(error);

        alert(
          "Failed to load history."
        );
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-container">

      <div className="page-logo">
        <FaBrain className="brain-icon" />
        <span>AI Resume Analyzer</span>
      </div>

      <div className="history-header">
        <h1>Analysis History</h1>

        <p>
          View all previously analyzed resumes
          and compare ATS scores.
        </p>
      </div>

      {history.length === 0 ? (
        <div className="empty-history">
          <h2>No Analysis History Found</h2>

          <p>
            Analyze your first resume to see
            results here.
          </p>
        </div>
      ) : (
        <div className="history-grid">

          {history.map((item) => (
            <div
              className="history-card"
              key={item._id}
            >
              <h2>
                📄{" "}
                {item.resumeId?.fileName ||
                  "Resume"}
              </h2>

              <p>
                🎯 <strong>Role:</strong>{" "}
                {item.targetRole}
              </p>

              <p>
                👨‍💼 <strong>Experience:</strong>{" "}
                {item.experienceLevel}
              </p>

              <p>
                📈 <strong>ATS Score:</strong>{" "}
                {item.scores?.overall}%
              </p>

              <p>
                📅 <strong>Date:</strong>{" "}
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </p>
            </div>
          ))}

        </div>
      )}
      <div className="button-group">
  <button
    onClick={() => navigate("/upload")}
  >
    Analyze Another Resume
  </button>
</div>
    </div>
  );
}

export default History;