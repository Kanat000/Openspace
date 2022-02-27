import {connect} from "react-redux";
import Cart from "./Cart";
import FreelanceResult from "../FreelancePage/FreelanceResultBlocks/Freelance_results";
import Product from "../StorePage/Product/Product";
import {ImageUrlOf} from "../../ImageConverter";
import ProjectResult from "../ProjectsPage/ProjectResultBlock/Project_result";
import React from "react";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    let CartPage = state.CartPage;

    let orders = CartPage.Orders.map((elem) => {
        return <FreelanceResult info = {elem} />;

    });
    let products = CartPage.Products.map((elem) => {
        return <Product info = {elem} ImageUrlOf={ImageUrlOf}/>;
    });
    let projects = CartPage.Projects.map((elem) => {
        return <ProjectResult info = {elem} ImageUrlOf={ImageUrlOf}/>
    });
    return {
        Orders: orders,
        Products: products,
        Projects: projects
    }
}


export let CartContainer = connect(mapStateToProps)(Cart);
export const CartWithRouter = withRouter(CartContainer);
