import React from 'react';
import AddPageStyle from './AddPage.module.css';
import {Route,Link} from "react-router-dom";
import WorkForm from "./Forms/WorkForm/WorkForm";
import ProductForm from "./Forms/ProductForm/ProductForm";
import ProjectForm from "./Forms/ProjectForm/ProjectForm";

function AddPage(props) {
    return (
        <div className={AddPageStyle.Container}>
            <div className={AddPageStyle.Menu}>
                <div className={AddPageStyle.MenuList}>
                    <ul>
                        <Link to="/add/work"><li className={AddPageStyle.Active}>Work</li></Link>
                        <Link to="/add/product"><li>Product</li></Link>
                        <Link to="/add/project"><li>Project</li></Link>
                    </ul>
                </div>
            </div>
            <div className={AddPageStyle.Form}>
                <div className={AddPageStyle.Title}>Add Work</div>
                <div className={AddPageStyle.formContainer}>
                    <Route path="/add/work"><WorkForm /></Route>
                    <Route path="/add/product"><ProductForm /></Route>
                    <Route path="/add/project"><ProjectForm /></Route>
                </div>
            </div>
        </div>
    );
}

export default AddPage;