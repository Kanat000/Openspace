import React from 'react';
import WorkFormStyle from "./WorkForm.module.css";
import {Route} from "react-router-dom";
import WorkFormStepOne from "./WorkStepOne/WorkFormStepOne";
import WorkFormStepTwo from "./WorkStepTwo/WorkFormStepTwo";
import WorkFormStepThree from "./WorkStepThree/WorkFormStepThree";

function WorkForm(props) {
    return (
        <div className={WorkFormStyle.Container}>
            <div className={WorkFormStyle.Head}>
                <div className={WorkFormStyle.StepName}>Main Information</div>
                <div className={WorkFormStyle.StepNumber}>1/3 Step</div>
            </div>

            <Route exact path="/add/work/">
                <WorkFormStepOne />
            </Route>
            <Route path="/add/work/step2">
                <WorkFormStepTwo />
            </Route>
            <Route path="/add/work/step3">
                <WorkFormStepThree />
            </Route>
        </div>
    );
}

export default WorkForm;