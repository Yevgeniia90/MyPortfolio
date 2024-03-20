import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectsList";
import BtnFigma from "../components/Figma/BtnFigma";

const Project = () => {
    const { id } = useParams();
    const project = projects[id];

    console.log(project);
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    {project.video && (
                            <video src={project.video} controls className="project-details__video" />
                        )}
                    <div className="project-details__desc">
                        <p className="Skills">Skills: {project.skills}</p>
                    </div>
                    {project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink} />
                    )}
                     {project.FigmaLink && (
                        <BtnFigma link={project.FigmaLink} />
                    )}
                </div>
            </div>
        </main>
    );
}

export default Project;

