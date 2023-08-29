import React from "react";

import {NavLink, useParams} from 'react-router-dom'
import {projects} from "../helpers/projects-list";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnSite from "../components/btnSite/BtnSite";


function Project() {

    const {id} = useParams()
    const project = projects[id]

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills Used: {project.skills}</p>
                    </div>

                    {project.siteLink && (
                        <BtnSite link={project.siteLink}/>
                    )}

                    {project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink}/>
                    )}

                </div>
            </div>
        </main>
    )
}

export default Project