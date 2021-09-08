import React from 'react';
import ProjectStepOneStyle from './ProjectStepOne.module.css';
import {Link} from "react-router-dom";

function ProjectStepOne(props) {
    return (
        <div className={ProjectStepOneStyle.Form}>

            <div className={ProjectStepOneStyle.AddSection}>
                <div className={ProjectStepOneStyle.ImgBlock}>
                    <input type="file" className={ProjectStepOneStyle.ImgInput}/>
                    <div className={ProjectStepOneStyle.AddBlock}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={ProjectStepOneStyle.AddIcon}
                             viewBox="0 0 16 16">
                            <path
                                d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                        </svg>
                    </div>
                </div>
                <div className={ProjectStepOneStyle.AddText}>Add image,video or file about project</div>
            </div>

            <div>
                <div className={ProjectStepOneStyle.FirstLine}>
                    <div>
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" id="projectName" className={ProjectStepOneStyle.Input}
                               placeholder="Project Name"/>
                    </div>
                    <div>
                        <label htmlFor="projectPrice">Project Price</label>
                        <input type="text" id="projectPrice" className={ProjectStepOneStyle.Input}
                               placeholder="Project Price"/>
                    </div>
                </div>
                <div className={ProjectStepOneStyle.NextBtnLine}>
                    <Link to="/add/project/step2">
                        <button className={ProjectStepOneStyle.NextBtn}>
                            Next Step
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectStepOne;