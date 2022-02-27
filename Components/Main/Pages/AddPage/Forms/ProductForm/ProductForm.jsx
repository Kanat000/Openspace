import React from 'react';
import ProductFormStyle from './ProductForm.module.css';
import ProductStepOne from "./ProductStepOne/ProductStepOne";
import {Route} from "react-router-dom";
import ProductStepTwo from "./ProductStepTwo/ProductStepTwo";
import {LangSystemText} from "../../../../../../Store/Translator";

function ProductForm(props) {
    return (
        <div className={ProductFormStyle.Container}>
            <div className={ProductFormStyle.Head}>
                <div className={ProductFormStyle.StepName}>{LangSystemText.Main+ " " + LangSystemText.Information}</div>
                <div className={ProductFormStyle.StepNumber}>

                    <Route exact path="/add/product">
                        1
                    </Route>
                    <Route path="/add/product/step2">
                        2
                    </Route>
                    /2 {LangSystemText.Step}</div>
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