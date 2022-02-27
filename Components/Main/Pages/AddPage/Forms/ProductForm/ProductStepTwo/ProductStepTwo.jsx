import React from 'react';
import ProductStepTwoStyle from './ProductStepTwo.module.css';
import WorkStepTwoStyle from "../../WorkForm/WorkStepTwo/WorkStepTwo.module.css";
import {Link} from "react-router-dom";
import {LangSystemText} from "../../../../../../../Store/Translator";
function ProductStepTwo(props) {
    return (
        <div className={ProductStepTwoStyle.Form}>
            <div className={ProductStepTwoStyle.InputContainer}>
                <div className={ProductStepTwoStyle.DescriptionBlock}>
                    <label htmlFor="productDescription">Product Description:</label>
                    <textarea id="productDescription" className={ProductStepTwoStyle.Description} placeholder="Write something about product" />
                </div>
                <div className={ProductStepTwoStyle.SelectBlock}>
                    <div>
                        <label>{LangSystemText.Choose + " " +LangSystemText.University}:</label>
                        <select>
                            <option selected="selected">{LangSystemText.University}</option>
                            <option>Astana IT</option>
                            <option>SDU</option>
                            <option>AIU</option>
                            <option>NU</option>
                        </select>
                    </div>
                    <div>
                        <label>{LangSystemText.Choose+ " "+LangSystemText.City}:</label>
                        <select>
                            <option selected="selected">{LangSystemText.City}</option>
                            <option>Astana</option>
                            <option>Semey</option>
                            <option>Almaty</option>
                            <option>Ural</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={ProductStepTwoStyle.BtnLine}>
                <Link to="/add/product"><button className={ProductStepTwoStyle.PreviousBtn}>
                    {LangSystemText.Previous+" "+LangSystemText.Step}
                </button></Link>
                <Link to="/store"><button className={ProductStepTwoStyle.NextBtn}>
                    {LangSystemText.Add}
                </button></Link>
            </div>
        </div>
    );
}

export default ProductStepTwo;