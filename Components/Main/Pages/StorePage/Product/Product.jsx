import React from 'react';
import productStyle from './Product.module.css';
import {Link} from "react-router-dom";
import {LangSystemText} from "../../../../../Store/Translator";

function Product(props) {
    return (
        <div>
            <div className={productStyle.Container}>
                <div className={productStyle.product}>
                    <div>
                        <div className={productStyle.Frame}>
                            <img
                                src={props.ImageUrlOf(props.info.Images[0])}
                                alt="product" className={productStyle.Img}/>
                            <button className={productStyle.saveBtn} onClick={props.info.Liked ?()=>{props.likeOff(props.index)} : ()=>{props.likeOn(props.index)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={props.info.Liked ? productStyle.saverIconActive:productStyle.saverIcon} viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            </button>

                        </div>
                    </div>
                    <div className={productStyle.info}>
                        <div className={productStyle.MainInfo}>
                            <div className={productStyle.name}>{props.info.Name}</div>
                            <div className={productStyle.price}><span>{props.info.Price}</span> <span>kzt</span></div>
                        </div>

                        <div className={productStyle.location}>
                            <div>
                                <span>{LangSystemText.University}: </span>
                                <span>{props.info.University}</span>
                            </div>
                            <div>
                                <span>{LangSystemText.City}: </span>
                                <span>{props.info.City}</span>
                            </div>
                        </div>

                        <div className={productStyle.btnContainer}>
                            <Link to={"/store/product/"+props.info.Id}><button className={productStyle.readMoreBtn}>
                                {LangSystemText.KnowMore}
                                <svg xmlns="http://www.w3.org/2000/svg" className={productStyle.goIcon} viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </button></Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Product;