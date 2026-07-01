import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UploadResume.css";
import { FaBrain } from "react-icons/fa";

function UploadResume() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
        formData.append("resume", file);
    const user = JSON.parse(
  localStorage.getItem("user")
);

    formData.append(
  "user",
  JSON.stringify(user)
);

    try {
      const res = await axios.post(
        `${API_URL}/api/resume/upload`,
        formData
      );

      alert(res.data.message);
      localStorage.setItem(
  "resumeId",
  res.data.resume._id
);

// console.log(
//   "Resume ID:",
//   res.data.resume._id
// );
navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
  <div className="upload-container">
    <div className="upload-card">
      <div className="page-logo">
  <FaBrain className="brain-icon" />
  <span>AI Resume Analyzer</span>
</div>
      <h1>Upload Resume</h1>

      <p>
        Upload your resume in PDF format and
        get AI-powered ATS analysis,
        missing skills detection, and
        interview preparation suggestions.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        {file && (
          <p className="selected-file">
            Selected File: {file.name}
          </p>
        )}

        <button type="submit">
          Upload Resume
        </button>
      </form>
    </div>
  </div>
);
}

export default UploadResume;