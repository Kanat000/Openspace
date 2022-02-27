import React from 'react';
import WorkFormStyle from "./WorkForm.module.css";
import {Route} from "react-router-dom";
import WorkFormStepOne from "./WorkStepOne/WorkFormStepOne";
import WorkFormStepTwo from "./WorkStepTwo/WorkFormStepTwo";
import WorkFormStepThree from "./WorkStepThree/WorkFormStepThree";
import {LangSystemText} from "../../../../../../Store/Translator";

function WorkForm(props) {
    return (
        <div className={WorkFormStyle.Container}>
            <div className={WorkFormStyle.Head}>
                <div className={WorkFormStyle.StepName}>{LangSystemText.Main + LangSystemText.Information}</div>
                <div className={WorkFormStyle.StepNumber}>

                    <Route exact path="/add/work/">
                        1
                    </Route>
                    <Route path="/add/work/step2">
                        2
                    </Route>
                    <Route path="/add/work/step3">
                        3
                    </Route>
                    /3 {LangSystemText.Step}</div>
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