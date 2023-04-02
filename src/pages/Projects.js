import React from "react";

import {projects} from "../helpers/projects-list";
import Project from "../components/project/Project";

function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">projects</h2>
                <ul className="projects">

                    {projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                                index={index}
                            />
                        )
                    })}


                </ul>
            </div>
        </main>
    )
}

export default Projects