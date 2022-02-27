import React from 'react';
import cartStyle from './Cart.module.css';
import Freelance_results from "../FreelancePage/FreelanceResultBlocks/Freelance_results";
import {Link, Route} from "react-router-dom";
import CartList from "./CartList";

function Cart(props) {
    let CartArr = CartList.map((elem) => {
        return <Link to={elem.url}>
            <div className={elem.url===props.location.pathname ? cartStyle.active : ""}>{elem.title}</div>
        </Link>
    })
    return (
        <div className={cartStyle.Container}>

            <div className={cartStyle.ResultSection}>
                <div className={cartStyle.resultContainer}>
                    <div className={cartStyle.Menu}>
                        {CartArr}
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