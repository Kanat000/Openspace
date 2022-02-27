import React from 'react';
import WorkStepOneStyle from './WorkFormStepOne.module.css';
import {Link} from "react-router-dom";
import {LangSystemText} from "../../../../../../../Store/Translator";

function WorkFormStepOne(props) {
    return (
            <form action="" method="post" className={WorkStepOneStyle.Form}>
                   <div className={WorkStepOneStyle.FirstLine}>
                       <div>
                       <label htmlFor="WorkTitle">{LangSystemText.Work + " " +LangSystemText.Title}:</label>
                       <input type="text" id="WorkPrice" className={WorkStepOneStyle.Input} placeholder={LangSystemText.Work +" "+ LangSystemText.Title}/>
                       </div>
                       <div>
                           <label htmlFor="WorkPrice">{LangSystemText.Work +" "+LangSystemText.Payment}:</label>
                           <input type="text" id="WorkPrice" className={WorkStepOneStyle.Input} placeholder={LangSystemText.Work +" "+LangSystemText.Payment}/>
                       </div>
                   </div>
                <div className={WorkStepOneStyle.DescriptionLine}>
                    <div>
                        <label htmlFor="description">{LangSystemText.Work +" "+LangSystemText.Description}:</label>
                        <textarea id="description" className={WorkStepOneStyle.DescriptionInput} placeholder={LangSystemText.Work +" "+LangSystemText.Description} />
                    </div>
                </div>
                <div className={WorkStepOneStyle.Deadline}>
                    <div>
                        <label htmlFor="deadline">{LangSystemText.Deadline}:</label>
                        <input type="date" id="deadline" className={WorkStepOneStyle.DeadlineInput}/>
                    </div>
                </div>
                <div className={WorkStepOneStyle.NextBtnLine}>
                   <Link to="/add/work/step2"> <button className={WorkStepOneStyle.NextBtn}>
                       {LangSystemText.Next +" "+LangSystemText.Step}
                    </button></Link>
                </div>
            </form>

    );
}

export default WorkFormStepOne;