import React from 'react';
import ProjectStepTwoStyle from './ProjectStepTwo.module.css';
import {Link} from "react-router-dom";

function ProjectStepTwo(props) {
    return (
        <div className={ProjectStepTwoStyle.Form}>
            <div className={ProjectStepTwoStyle.InputContainer}>
                <div className={ProjectStepTwoStyle.DescriptionBlock}>
                    <label htmlFor="projectDescription">Project Description:</label>
                    <textarea id="projectDescription" className={ProjectStepTwoStyle.Description} placeholder="Write something about project" />
                </div>
                <div className={ProjectStepTwoStyle.SelectBlock}>
                    <div>
                        <label>Choose Subject:</label>
                        <select>
                            <option selected="selected">Subject</option>
                            <option>ICT</option>
                            <option>Java</option>
                            <option>Web Developing</option>
                            <option>C++</option>
                        </select>
                    </div>
                    <div>
                        <label>Choose University:</label>
                        <select>
                            <option selected="selected">University</option>
                            <option>Astana IT</option>
                            <option>SDU</option>
                            <option>AIU</option>
                            <option>NU</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={ProjectStepTwoStyle.BtnLine}>
                <Link to="/add/project"><button className={ProjectStepTwoStyle.PreviousBtn}>
                    Previous Step
                </button></Link>
                <Link to="/projects"><button className={ProjectStepTwoStyle.NextBtn}>
                    Submit
                </button></Link>
            </div>
        </div>
    );
}

export default ProjectStepTwo;