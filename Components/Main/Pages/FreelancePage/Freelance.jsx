import React from 'react';
import freelanceStyle from './Freelance.module.css';
import FreelanceResult from "./FreelanceResultBlocks/Freelance_results";
import Search from "../SearchSection/Search";
function Freelance(props) {
    let freelanceArr = props.state.FreelancePage.freelance.map((elem,index) => {
        return <FreelanceResult info={elem} likeOn={props.likeOn} likeOff={props.likeOff} index={index}/>
    });
    return (
       <div className={freelanceStyle.Container}>
           <div className={freelanceStyle.ResultSection}>
               {freelanceArr}
           </div>
       </div>
    );
}

export default Freelance;