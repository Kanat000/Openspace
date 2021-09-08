import React from 'react';
import ProjectFormStyle from './ProjectForm.module.css';
import {Route} from "react-router-dom";
import ProjectStepOne from "./ProjectStepOne/ProjectStepOne";
import ProjectStepTwo from "./ProjectStepTwo/ProjectStepTwo";

function ProjectForm(props) {
    return (
        <div className={ProjectFormStyle.Container}>
            <div className={ProjectFormStyle.Head}>
                <div className={ProjectFormStyle.StepName}>Main Information</div>
                <div className={ProjectFormStyle.StepNumber}>1/2 Step</div>
            </div>
            <Route exact path="/add/project">
                <ProjectStepOne />
            </Route>
            <Route path="/add/project/step2">
                <ProjectStepTwo />
            </Route>
        </div>
    );
}

export default ProjectForm;