import React from 'react';
import ProjectResultStyle from "./Project_result.module.css";
import {Link} from "react-router-dom";
import {LangSystemText} from "../../../../../Store/Translator";

function ProjectResult(props) {
    console.log(props);
    return (
        <div className={ProjectResultStyle.Container}>
            <div className={ProjectResultStyle.ImgPart}>
                <div className={ProjectResultStyle.Frame}>
                    <img src={()=>{props.ImageUrlOf(props.info.Images[0])}} alt="ProjectImg" className={ProjectResultStyle.Img}/>
                </div>
            </div>
            <div className={ProjectResultStyle.InfoPart}>
                <div className={ProjectResultStyle.Topic}>{props.info.Name}</div>
                <div className={ProjectResultStyle.Price}>{props.info.Price} kzt</div>
                <div className={ProjectResultStyle.Description}>{props.info.Description}</div>
                <div className={ProjectResultStyle.BtnBlock}>
                    <div className={ProjectResultStyle.Subject}>
                      <span>{LangSystemText.Subject}:</span> <span>{props.info.Subject}</span>
                  </div>
                    <div className={ProjectResultStyle.BtnArea}>
                        <Link to={"/projects/project/"+props.info.Id}>
                            <button className={ProjectResultStyle.readMoreBtn}>
                                {LangSystemText.KnowMore}
                                <svg xmlns="http://www.w3.org/2000/svg" className={ProjectResultStyle.readMoreIcon} viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            <button className={ProjectResultStyle.saverBtn} onClick={props.info.Liked ? ()=>{props.likeOff(props.index)} :()=> {props.likeOn(props.index)}}>
                <svg xmlns="http://www.w3.org/2000/svg" className={props.info.Liked ? ProjectResultStyle.saverIconActive:ProjectResultStyle.saverIcon} viewBox="0 0 16 16">
                    <path
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </button>
        </div>
    );
}

export default ProjectResult;