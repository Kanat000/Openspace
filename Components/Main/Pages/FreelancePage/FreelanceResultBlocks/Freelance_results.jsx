import React, {useState} from 'react';
import resultStyle from './Freelance_results.module.css';
import {Link} from "react-router-dom";
import {LangSystemText} from "../../../../../Store/Translator";

function FreelanceResult(props) {
    let knowledgeArr = props.info.Knowledge.map((elem) => {
        return <div>{elem}</div>
    });

    return (
        <div className={resultStyle.Container}>
            <div>
                <div className={resultStyle.Head}>
                    <div className={resultStyle.topic}>
                        {props.info.Title}
                    </div>
                    <div className={resultStyle.knowledge}>
                        {knowledgeArr}
                    </div>
                </div>
            <div className={resultStyle.description}>
                <span>{props.info.Description}</span>
            </div>
            <div className={resultStyle.ButtonPlace}>
                    <div className={resultStyle.MoreInfo}>
                        <span>{LangSystemText.Subject}:</span> <span> {props.info.Subject} </span>
                    </div>
                <div className={resultStyle.MoreInfo}>
                    <span>{LangSystemText.University}:</span> <span> {props.info.University} </span>
                </div>
                <div>
                    <Link to={"/freelance/order/"+props.info.Id}>
                    <button className={resultStyle.readMoreBtn}>
                        {LangSystemText.KnowMore}
                        <svg xmlns="http://www.w3.org/2000/svg" className={resultStyle.readMoreIcon} viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                    </button>
                    </Link>
                </div>

            </div>
            </div>
            <div>
                <div className={resultStyle.orderInfo}>
                    <div className={resultStyle.price}>
                        <span>{props.info.Price}</span> <span>kzt</span>
                    </div>
                    <div className={resultStyle.deadline}>
                        <span>{LangSystemText.Deadline}: </span><span>{props.info.Deadline}</span>
                    </div>
                </div>
            </div>

            <button className={resultStyle.saverBtn} onClick={props.info.liked ? ()=>{props.likeOff(props.index)} :()=> {props.likeOn(props.index)}}>
                <svg xmlns="http://www.w3.org/2000/svg" className={props.info.liked ? resultStyle.saverIconActive:resultStyle.saverIcon} viewBox="0 0 16 16">
                    <path
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </button>
        </div>
    );
}

export default FreelanceResult;