import { Link } from "react-router-dom";
import "../App.css";
import { FaBrain } from "react-icons/fa";


function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="main-logo">
            <FaBrain className="brain-icon" />
            AI Resume Analyzer
        </h1>

        <p>
          Improve your resume with AI-powered analysis and get instant ATS
          feedback.
        </p>

        <div className="feature-grid">

  <div className="feature-card">
    <h3>📊 ATS Score</h3>
    <p>
      Get instant ATS compatibility scoring.
    </p>
  </div>

  <div className="feature-card">
    <h3>📝 Resume Feedback</h3>
    <p>
      Receive AI-powered improvement suggestions.
    </p>
  </div>

  <div className="feature-card">
    <h3>🎯 Missing Skills</h3>
    <p>
      Identify skills missing for your target role.
    </p>
  </div>

  <div className="feature-card">
    <h3>💼 Interview Questions</h3>
    <p>
      Prepare with personalized interview questions.
    </p>
  </div>

</div>
        {/* <div className="features">
          <p>✅ ATS Score</p>
          <p>✅ Resume Feedback</p>
          <p>✅ Missing Skills</p>
          <p>✅ Interview Questions</p>
        </div> */}

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