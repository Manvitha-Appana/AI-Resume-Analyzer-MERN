import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AnalysisResult.css";
import { FaBrain } from "react-icons/fa";

function AnalysisResult() {
  const navigate = useNavigate();
 
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const storedAnalysis =
      localStorage.getItem("analysis");

    if (storedAnalysis) {
      setAnalysis(
        JSON.parse(storedAnalysis)
      );
    }
  }, []);
  const handleLogout = () => {
  localStorage.clear();
  navigate("/login");
};

  if (!analysis) {
    return (
      <h2>No analysis found.</h2>
    );
  }

  return (
  <div className="analysis-container">

    <div className="analysis-header">
      <div className="page-logo">
  <FaBrain className="brain-icon" />
  <span>AI Resume Analyzer</span>
</div>
      <h1>Resume Analysis Result</h1>

      <p>
        AI-powered insights to improve your resume
        and increase your chances of landing your
        dream role.
      </p>
    </div>

    <div className="score-grid">

      <div className="score-card ats">
        <h3>ATS Score</h3>
        <h2>{analysis.scores?.overall}%</h2>
      </div>

      <div className="score-card technical">
        <h3>Technical</h3>
        <h2>{analysis.scores?.technical}%</h2>
      </div>

      <div className="score-card projects">
        <h3>Projects</h3>
        <h2>{analysis.scores?.projects}%</h2>
      </div>

      <div className="score-card education">
        <h3>Education</h3>
        <h2>{analysis.scores?.education}%</h2>
      </div>

      <div className="score-card experience">
        <h3>Experience</h3>
        <h2>{analysis.scores?.experience}%</h2>
      </div>

      <div className="score-card keywords">
        <h3>Keywords</h3>
        <h2>{analysis.scores?.keywords}%</h2>
      </div>

    </div>

    <div className="summary-card">
      <h2>Resume Summary</h2>
      <p>{analysis.resumeSummary}</p>
    </div>

    <div className="info-grid">

      <div className="info-card strengths-card">
        <h2>Strengths</h2>
        <ul>
          {analysis.strengths?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="info-card weaknesses-card">
        <h2>Weaknesses</h2>
        <ul>
          {analysis.weaknesses?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="info-card skills-card">
        <h2>Missing Skills</h2>
        <ul>
          {analysis.missingSkills?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="info-card suggestions-card">
        <h2>Suggestions</h2>
        <ul>
          {analysis.suggestions?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>

    <div className="questions-card">
      <h2>Top Interview Questions</h2>

      <ol>
        {analysis.interviewQuestions?.map(
          (item, index) => (
            <li key={index}>{item}</li>
          )
        )}
      </ol>
    </div>

    <div className="button-group">

      <button
        onClick={() => navigate("/upload")}
      >
        Analyze Another Resume
      </button>

      <button
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
      <button
        onClick={() => navigate("/history")}
      >
        Analysis History
      </button>
      <button onClick={handleLogout}>
        Logout
      </button>

    </div>

  </div>
);
}

export default AnalysisResult;

