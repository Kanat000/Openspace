import React from 'react';
import projectStyle from './Project.module.css';
import Search from "../SearchSection/Search";
import ProjectResult from "./ProjectResultBlock/Project_result";
import {ImageUrlOf} from "../../ImageConverter";
function Projects(props) {
    let projectArr = props.state.ProjectPage.Project.map((elem,index) => {
        return <ProjectResult info={elem} ImageUrlOf={ImageUrlOf} likeOn={props.ProjectLikeOn} likeOff={props.ProjectLikeOff} index={index}/>
    })
    return (
        <div className={projectStyle.Container}>

            <div className={projectStyle.resultSection}>
                <div className={projectStyle.resultBlock}>
                    {projectArr}
                </div>
            </div>
        </div>
    );
}

export default Projects;