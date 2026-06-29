import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>AI Resume Analyzer</h1>

        <p>
          Improve your resume with AI-powered analysis and get instant ATS
          feedback.
        </p>

        <div className="features">
          <p>✅ ATS Score</p>
          <p>✅ Resume Feedback</p>
          <p>✅ Missing Skills</p>
          <p>✅ Interview Questions</p>
        </div>

        <div className="buttons">
          <Link to="/login">
            <button className="primary-btn">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;