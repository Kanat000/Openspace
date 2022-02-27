import React from 'react';
import productPageStyle from './ProductPage.module.css';
import Product from "../Product/Product";
import {LangSystemText} from "../../../../../Store/Translator";
function ProductPage(props) {

    let imgArr = props.info.Images.map((elem) => {
        return <div className={productPageStyle.SmallFrame}>
            <img src={props.ImageUrlOf(elem)} alt="img" className={productPageStyle.SmallImg}/>
        </div>
    });

    return (
        <div className={productPageStyle.Container}>
            <div className={productPageStyle.Product}>
                <div className={productPageStyle.ImgBlock}>
                    <div className={productPageStyle.Frame}>
                        <img src={props.ImageUrlOf(props.info.Images[0])} alt="img" className={productPageStyle.Img}/>
                    </div>
                    <div className={productPageStyle.ImgStore}>
                        {imgArr}
                    </div>
                </div>
                <div className={productPageStyle.InfoBlock}>
                    <div className={productPageStyle.Info}>
                        <div className={productPageStyle.Name}>{props.info.Name}</div>
                        <div className={productPageStyle.Price}>{props.info.Price} kzt</div>
                        <div className={productPageStyle.Description}>{props.info.Description}</div>
                        <div className={productPageStyle.location}>
                            <span>{LangSystemText.University} : </span> <span>{props.info.University}</span></div>
                        <div className={productPageStyle.location}>
                            <span>{LangSystemText.City} : </span><span>{props.info.City}</span></div>
                        <div className={productPageStyle.Publisher}>
                            <span>{LangSystemText.Publisher} : </span>
                            <span>Kanat Orynbaev</span>
                        </div>
                    </div>
                    <div className={productPageStyle.BtnBlock}>
                        <div className={productPageStyle.ChatBtnBlock}>
                            <button className={productPageStyle.ChatBtn}>{LangSystemText.ToChat}</button>
                        </div>
                        <div className={productPageStyle.LikeBtnBlock}>
                            <button onClick={props.info.Liked ? ()=>{props.likeOff(props.index)} : ()=>{props.likeOn(props.index)}}
                                className={props.info.Liked ? productPageStyle.LikeBtnActive : productPageStyle.LikeBtn}>{
                                props.info.Liked ? LangSystemText.DeleteFromCart : LangSystemText.AddToFavourites
                                }</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={productPageStyle.otherProducts}>
                <div className={productPageStyle.productGrid}>

                </div>
            </div>
        </div>
    );
}

export default ProductPage;