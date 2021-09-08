import React from 'react';
import WorkStepTwoStyle from "./WorkStepTwo.module.css";
import {Link} from "react-router-dom";

function WorkFormStepTwo(props) {
    return (
        <form action="" method="post" className={WorkStepTwoStyle.Form}>
            <div className={WorkStepTwoStyle.InputContainer}>
                <div>
                    <label htmlFor="University">
                        Choose A University:
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
                        Choose A Subject:
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
                        Choose a Payment type:
                    </label>
                    <select className={WorkStepTwoStyle.Select}>
                        <option selected="selected">Payment Type</option>
                        <option>Kaspi</option>
                        <option>Halyk</option>
                        <option>Jusan</option>
                    </select>
                </div>
            </div>

            <div className={WorkStepTwoStyle.BtnLine}>
                <Link to="/add/work/"><button className={WorkStepTwoStyle.PreviousBtn}>
                    Previous Step
                </button></Link>
                <Link to="/add/work/step3"><button className={WorkStepTwoStyle.NextBtn}>
                    Next Step
                </button></Link>
            </div>
        </form>

    );
}

export default WorkFormStepTwo;