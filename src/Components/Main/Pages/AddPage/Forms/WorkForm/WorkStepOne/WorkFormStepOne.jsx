import React from 'react';
import WorkStepOneStyle from './WorkFormStepOne.module.css';
import {Link} from "react-router-dom";

function WorkFormStepOne(props) {
    return (
            <form action="" method="post" className={WorkStepOneStyle.Form}>
                   <div className={WorkStepOneStyle.FirstLine}>
                       <div>
                       <label htmlFor="WorkTitle">Work Title:</label>
                       <input type="text" id="WorkPrice" className={WorkStepOneStyle.Input} placeholder="Work Title"/>
                       </div>
                       <div>
                           <label htmlFor="WorkPrice">Work payment:</label>
                           <input type="text" id="WorkPrice" className={WorkStepOneStyle.Input} placeholder="Work Payment"/>
                       </div>
                   </div>
                <div className={WorkStepOneStyle.DescriptionLine}>
                    <div>
                        <label htmlFor="description">Work Description:</label>
                        <textarea id="description" className={WorkStepOneStyle.DescriptionInput} placeholder="Write something about your order" />
                    </div>
                </div>
                <div className={WorkStepOneStyle.Deadline}>
                    <div>
                        <label htmlFor="deadline">Deadline:</label>
                        <input type="date" id="deadline" className={WorkStepOneStyle.DeadlineInput}/>
                    </div>
                </div>
                <div className={WorkStepOneStyle.NextBtnLine}>
                   <Link to="/add/work/step2"> <button className={WorkStepOneStyle.NextBtn}>
                        Next Step
                    </button></Link>
                </div>
            </form>

    );
}

export default WorkFormStepOne;