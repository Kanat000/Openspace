import React from 'react';
import ProductStepOneStyle from "./ProductStepOne.module.css";
import {Link} from "react-router-dom";

function ProductStepOne(props) {
    return (
        <div className={ProductStepOneStyle.Form}>
            <div className={ProductStepOneStyle.ImgBlock}>
                <input type="file" className={ProductStepOneStyle.ImgInput}/>
                <div className={ProductStepOneStyle.AddBlock}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={ProductStepOneStyle.AddIcon} viewBox="0 0 16 16">
                        <path
                            d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                    </svg>
                </div>
            </div>
            <div className={ProductStepOneStyle.AddText}>Add image for product</div>
            <div className={ProductStepOneStyle.FirstLine}>
                <div>
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" id="productName" className={ProductStepOneStyle.Input} placeholder="Product Name"/>
                </div>
                <div>
                    <label htmlFor="productPrice">Product Price</label>
                    <input type="text" id="productPrice" className={ProductStepOneStyle.Input} placeholder="Product Price"/>
                </div>
            </div>
            <div className={ProductStepOneStyle.NextBtnLine}>
                <Link to="/add/product/step2"> <button className={ProductStepOneStyle.NextBtn}>
                    Next Step
                </button></Link>
            </div>
        </div>
    );
}

export default ProductStepOne;