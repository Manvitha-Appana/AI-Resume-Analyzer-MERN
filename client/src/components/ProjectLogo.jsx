import { FaBrain } from "react-icons/fa";
import "./ProjectLogo.css";

function ProjectLogo() {
  return (
    <div className="project-logo">
      <FaBrain className="brain-icon" />
      <span>AI Resume Analyzer</span>
    </div>
  );
}

export default ProjectLogo;