import React from 'react';
import storeStyle from './Store.module.css';
import Product from "./Product/Product";
import {ImageUrlOf} from "../../ImageConverter";

function Store(props) {
    let productArr = props.state.StorePage.Product.map((elem,index) => {
        return <Product info={elem} ImageUrlOf={ImageUrlOf} likeOn={props.ProductLikeOn} likeOff={props.ProductLikeOff} index={index} />
    })

    return (
         <div className={storeStyle.Container}>

             <div className={storeStyle.ProductSection}>
                 <div className={storeStyle.ProductGrid}>
                     {productArr}
                 </div>
             </div>
         </div>
    );
}

export default Store;