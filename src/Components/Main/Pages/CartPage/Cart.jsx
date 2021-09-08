import React from 'react';
import cartStyle from './Cart.module.css';
import Freelance_results from "../FreelancePage/FreelanceResultBlocks/Freelance_results";
import {Link, Route} from "react-router-dom";

function Cart(props) {
    return (
        <div className={cartStyle.Container}>

            <div className={cartStyle.ResultSection}>
                <div className={cartStyle.resultContainer}>
                    <div className={cartStyle.Menu}>
                        <Link to="/cart"><div className={cartStyle.active}>Work</div></Link>
                        <Link to="/cart/Product"><div>Product</div></Link>
                        <Link to="/cart/Project"><div>Project</div></Link>
                    </div>
                   <div className={cartStyle.Results}>
                       <Route exact path="/cart">
                           <div className={cartStyle.OrderContainer}>
                               {props.Orders}
                           </div>
                       </Route>
                       <Route path="/cart/Product">
                           <div className={cartStyle.ProductContainer}>
                               {props.Products}
                           </div>
                       </Route>
                       <Route path="/cart/Project">
                           <div className={cartStyle.ProjectContainer}>
                               {props.Projects}
                           </div>
                       </Route>
                   </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;