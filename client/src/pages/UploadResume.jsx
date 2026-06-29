import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadResume() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("resume", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      );

      alert(res.data.message);
      localStorage.setItem(
  "resumeId",
  res.data.resume._id
);

console.log(
  "Resume ID:",
  res.data.resume._id
);
navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div>
      <h1>Upload Resume</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <button type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}

export default UploadResume;