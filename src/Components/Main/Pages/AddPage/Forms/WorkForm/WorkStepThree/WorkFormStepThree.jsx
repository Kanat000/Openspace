import React from 'react';
import WorkStepThreeStyle from './WorkFormStepThree.module.css';
import {Link} from "react-router-dom";
import WorkStepTwoStyle from "../WorkStepTwo/WorkStepTwo.module.css";


function WorkFormStepThree(props) {
    return (
        <form action="" method="post">
            <div className={WorkStepThreeStyle.InputContainer}>
                <div className={WorkStepThreeStyle.Knowledge}>
                    <label htmlFor="SelectKnowledge">Select all necessary knowledge for work:</label>
                    <div className={WorkStepThreeStyle.SelectContainer}>
                        <input type="text" id="SelectKnowledge" className={WorkStepThreeStyle.KnowledgeSelect} placeholder="Knowledge"/>
                        <button className={WorkStepThreeStyle.AddBtn}>Add</button>
                    </div>
                </div>
                <div className={WorkStepThreeStyle.ResultContainer}>
                    Something will happen here
                </div>
            </div>
            <div className={WorkStepThreeStyle.BtnLine}>
                <Link to="/add/work/step2"><button className={WorkStepThreeStyle.PreviousBtn}>
                    Previous Step
                </button></Link>
                <Link to="/"><button className={WorkStepThreeStyle.NextBtn}>
                    Submit
                </button></Link>
            </div>
        </form>
    );
}

export default WorkFormStepThree;