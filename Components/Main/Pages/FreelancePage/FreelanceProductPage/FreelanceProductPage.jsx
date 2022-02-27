import React from 'react';
import FreelanceProductStyle from './FreelanceProductPage.module.css';
import Freelance_results from "../FreelanceResultBlocks/Freelance_results";
import {LangSystemText} from "../../../../../Store/Translator";
import productPageStyle from "../../StorePage/ProductPage/ProductPage.module.css";

function FreelanceProductPage(props) {
    return (
        <div className={FreelanceProductStyle.Container}>
            <div className={FreelanceProductStyle.Product}>
                <div className={FreelanceProductStyle.OrderInfo}>
                    <div className={FreelanceProductStyle.Name}>{props.info.Title}</div>
                    <div className={FreelanceProductStyle.Description}>
                        <span>{LangSystemText.Order}</span>
                        <span>{props.info.Description}</span>
                    </div>
                </div>
                <div className={FreelanceProductStyle.OtherInfo}>
                    <div>{LangSystemText.MoreInfo}: </div>
                    <div>
                        <span>{LangSystemText.Price}: </span>
                        <span>{props.info.Price} kzt</span>
                    </div>
                    <div>
                        <span>{LangSystemText.Deadline}: </span>
                        <span>{props.info.Deadline}</span>
                    </div>
                    <div>
                        <span>{LangSystemText.Payment}: </span>
                        <span>{props.info.Payment}</span>
                    </div>
                    <div>
                        <span>{LangSystemText.Subject}: </span>
                        <span>{props.info.Subject}</span>
                    </div>
                    <div>
                        <span>{LangSystemText.University}: </span>
                        <span>{props.info.University}</span>
                    </div>
                    <div>
                        <span>{LangSystemText.Publisher}:</span>
                        <span className={FreelanceProductStyle.Publisher}>
                            @Kaakeee
                        </span>
                    </div>
                </div>
                <div className={FreelanceProductStyle.BtnBlock}>
                    <div className={FreelanceProductStyle.CartBtnBlock}>
                        <button onClick={props.info.liked ? ()=>{props.likeOff(props.index)} : ()=>{props.likeOn(props.index)}}
                                className={props.info.liked ? FreelanceProductStyle.CartBtnActive : FreelanceProductStyle.CartBtn}>{
                            props.info.liked ? LangSystemText.DeleteFromCart : LangSystemText.AddToFavourites
                        }</button>
                    </div>
                    <div className={FreelanceProductStyle.ChatBtnBlock}>
                        <button className={FreelanceProductStyle.ChatBtn}>{LangSystemText.ToChat}</button>
                    </div>
                </div>
            </div>
            <div className={FreelanceProductStyle.RecomentBlock}>

            </div>
        </div>
    );
}

export default FreelanceProductPage;