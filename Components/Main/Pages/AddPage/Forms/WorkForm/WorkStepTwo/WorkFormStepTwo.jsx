import React from 'react';
import WorkStepTwoStyle from "./WorkStepTwo.module.css";
import {Link} from "react-router-dom";
import {LangSystemText} from "../../../../../../../Store/Translator";

function WorkFormStepTwo(props) {
    return (
        <form action="" method="post" className={WorkStepTwoStyle.Form}>
            <div className={WorkStepTwoStyle.InputContainer}>
                <div>
                    <label htmlFor="University">
                        {LangSystemText.Choose + " "+LangSystemText.University}:
                    </label>
                    <select className={WorkStepTwoStyle.Select}>
                        <option selected="selected">My University</option>
                        <option>Astana IT</option>
                        <option>SDU</option>
                        <option>NU</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Subject">
                        {LangSystemText.Choose +" "+LangSystemText.Subject}:
                    </label>
                    <select className={WorkStepTwoStyle.Select}>
                        <option selected="selected">Subject</option>
                        <option>ICT</option>
                        <option>Java</option>
                        <option>Web Developing</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Payment">
                        {LangSystemText.Choose +" "+LangSystemText.PaymentType}:
                    </label>
                    <select className={WorkStepTwoStyle.Select}>
                        <option selected="selected">{LangSystemText.PaymentType}</option>
                        <option>Kaspi</option>
                        <option>Halyk</option>
                        <option>Jusan</option>
                    </select>
                </div>
            </div>

            <div className={WorkStepTwoStyle.BtnLine}>
                <Link to="/add/work/"><button className={WorkStepTwoStyle.PreviousBtn}>
                    {LangSystemText.Previous +" "+LangSystemText.Step}
                </button></Link>
                <Link to="/add/work/step3"><button className={WorkStepTwoStyle.NextBtn}>
                    {LangSystemText.Next +" "+LangSystemText.Step}
                </button></Link>
            </div>
        </form>

    );
}

export default WorkFormStepTwo;