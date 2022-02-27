import React from 'react';
import ProjectStepTwoStyle from './ProjectStepTwo.module.css';
import {Link} from "react-router-dom";
import {LangSystemText} from "../../../../../../../Store/Translator";

function ProjectStepTwo(props) {
    return (
        <div className={ProjectStepTwoStyle.Form}>
            <div className={ProjectStepTwoStyle.InputContainer}>
                <div className={ProjectStepTwoStyle.DescriptionBlock}>
                    <label htmlFor="projectDescription">{LangSystemText.Description}:</label>
                    <textarea id="projectDescription" className={ProjectStepTwoStyle.Description} placeholder={LangSystemText.Description} />
                </div>
                <div className={ProjectStepTwoStyle.SelectBlock}>
                    <div>
                        <label>{LangSystemText.Choose+" "+ LangSystemText.Subject}:</label>
                        <select>
                            <option selected="selected">{LangSystemText.Subject}</option>
                            <option>ICT</option>
                            <option>Java</option>
                            <option>Web Developing</option>
                            <option>C++</option>
                        </select>
                    </div>
                    <div>
                        <label>{LangSystemText.Choose+" "+LangSystemText.University}:</label>
                        <select>
                            <option selected="selected">{LangSystemText.University}</option>
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
                    {LangSystemText.Previous+" "+LangSystemText.Step}
                </button></Link>
                <Link to="/projects"><button className={ProjectStepTwoStyle.NextBtn}>
                    {LangSystemText.Add}
                </button></Link>
            </div>
        </div>
    );
}

export default ProjectStepTwo;