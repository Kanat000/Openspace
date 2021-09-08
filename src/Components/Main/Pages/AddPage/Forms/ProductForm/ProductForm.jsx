import React from 'react';
import ProductFormStyle from './ProductForm.module.css';
import ProductStepOne from "./ProductStepOne/ProductStepOne";
import {Route} from "react-router-dom";
import ProductStepTwo from "./ProductStepTwo/ProductStepTwo";

function ProductForm(props) {
    return (
        <div className={ProductFormStyle.Container}>
            <div className={ProductFormStyle.Head}>
                <div className={ProductFormStyle.StepName}>Main Information</div>
                <div className={ProductFormStyle.StepNumber}>1/2 Step</div>
            </div>
            <Route exact path="/add/product">
                <ProductStepOne />
            </Route>
            <Route path="/add/product/step2">
                <ProductStepTwo />
            </Route>
        </div>
    );
}

export default ProductForm;