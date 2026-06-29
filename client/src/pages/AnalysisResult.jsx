import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Resume Analysis Result</h1>

      <h2>
        Overall ATS Score:
        {" "}
        {analysis.scores?.overall}
      </h2>

      <h3>
        Technical Score:
        {" "}
        {analysis.scores?.technical}
      </h3>

      <h3>
        Project Score:
        {" "}
        {analysis.scores?.projects}
      </h3>

      <h3>
        Education Score:
        {" "}
        {analysis.scores?.education}
      </h3>

      <h3>
        Experience Score:
        {" "}
        {analysis.scores?.experience}
      </h3>

      <h3>
        Keyword Score:
        {" "}
        {analysis.scores?.keywords}
      </h3>

      <h3>Resume Summary</h3>
      <p>
        {analysis.resumeSummary}
      </p>

      <h3>Strengths</h3>
      <ul>
        {analysis.strengths?.map(
          (item, index) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>

      <h3>Weaknesses</h3>
      <ul>
        {analysis.weaknesses?.map(
          (item, index) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>

      <h3>Missing Skills</h3>
      <ul>
        {analysis.missingSkills?.map(
          (item, index) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>

      <h3>Suggestions</h3>
      <ul>
        {analysis.suggestions?.map(
          (item, index) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>

      <h3>Interview Questions</h3>
      <ul>
        {analysis.interviewQuestions?.map(
          (item, index) => (
            <li key={index}>
              {item}
            </li>
          )
        )}
      </ul>
      <hr />

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

<button onClick={handleLogout}>
  Logout
</button>
    </div>
    


  );
}

export default AnalysisResult;

