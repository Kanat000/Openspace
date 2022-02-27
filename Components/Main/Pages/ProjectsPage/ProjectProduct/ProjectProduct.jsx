import React from 'react';
import ProjectProductStyle from './ProductProject.module.css';
import Product from "../../StorePage/Product/Product";
import ProjectResult from "../ProjectResultBlock/Project_result";
import {LangSystemText} from "../../../../../Store/Translator";
import productPageStyle from "../../StorePage/ProductPage/ProductPage.module.css";

function ProjectProduct(props) {
    let imgArr = props.info.Images.map((elem) => {
        return <div className={ProjectProductStyle.SmallFrame}>
            <img src={props.ImageUrlOf(elem)} alt="img" className={ProjectProductStyle.SmallImg}/>
        </div>
    });
    return (
        <div className={ProjectProductStyle.Container}>
            <div className={ProjectProductStyle.Product}>
                <div className={ProjectProductStyle.ImgBlock}>
                    <div className={ProjectProductStyle.Frame}>
                        <img src={props.ImageUrlOf(props.info.Images[0])} alt="" className={ProjectProductStyle.Img}/>
                    </div>
                    <div className={ProjectProductStyle.ImgStore}>
                        {imgArr}
                    </div>
                </div>
                <div className={ProjectProductStyle.InfoBlock}>
                    <div className={ProjectProductStyle.Info}>
                        <div className={ProjectProductStyle.Name}>{props.info.Name}</div>
                        <div className={ProjectProductStyle.Price}>{props.info.Price} kzt</div>
                        <div className={ProjectProductStyle.Description}>{props.info.Description}</div>
                        <div className={ProjectProductStyle.location}>
                            <span>Subject : </span> <span>{props.info.Subject}</span></div>
                        <div className={ProjectProductStyle.location}>
                            <span>{LangSystemText.University}: </span><span>{props.info.University}</span></div>
                        <div className={ProjectProductStyle.Publisher}>
                            <span>{LangSystemText.Publisher} : </span>
                            <span>Kanat Orynbaev</span>
                        </div>
                    </div>
                    <div className={ProjectProductStyle.BtnBlock}>
                        <div className={ProjectProductStyle.ChatBtnBlock}>
                            <button className={ProjectProductStyle.ChatBtn}>{LangSystemText.ToChat}</button>
                        </div>
                        <div className={ProjectProductStyle.LikeBtnBlock}>
                            <button onClick={props.info.Liked ? ()=>{props.likeOff(props.index)} : ()=>{props.likeOn(props.index)}}
                                    className={props.info.Liked ? ProjectProductStyle.LikeBtnActive : ProjectProductStyle.LikeBtn}>{
                                props.info.Liked ? LangSystemText.DeleteFromCart : LangSystemText.AddToFavourites
                            }</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ProjectProductStyle.otherProducts}>
                <div className={ProjectProductStyle.Recomendation}>

                </div>

            </div>
        </div>
    );
}

export default ProjectProduct;