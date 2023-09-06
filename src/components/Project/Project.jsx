/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Arrow from "/arrow-right-2.png";
import "./project.css";

const Project = ({ project }) => {
  const { projectName, timeline, imageSrc, roleDescription } = project;
  console.log(projectName);
  const role = "<Backend Engineer />";
  return (
    <div className="grid-project">
      <div className="project-item-first">
        <p className="project-name">{projectName}</p>
      </div>
      <div className="project-item-second">
        <div className="link-bar">
          <Link to="">View on Github</Link>
          <img src={Arrow} alt="" />
        </div>
        <div className="link-bar-2">
          <Link to="">View live site</Link>
          <img src={Arrow} alt="" />
        </div>
        <div className="role-container">
          <p className="from">{timeline}</p>
          <p className="role">{role} </p>
          <p className="role-desc">{roleDescription}</p>
        </div>
      </div>
      <div className="project-item-third">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
};

export default Project;
