import React from 'react';
import AddPageStyle from './AddPage.module.css';
import {Route,Link} from "react-router-dom";
import WorkForm from "./Forms/WorkForm/WorkForm";
import ProductForm from "./Forms/ProductForm/ProductForm";
import ProjectForm from "./Forms/ProjectForm/ProjectForm";
import {AddPageMenuList,AddPageTitleList} from "./AddPageMenuList";
function AddPage(props) {

    let AddPageMenuItems = AddPageMenuList.map((item)=>{
        return <Link to={item.url}><li className={item.url === props.location.pathname ? AddPageStyle.Active : ""}>{item.title}</li></Link>
    })
    let AddPageTitles = AddPageTitleList.map((item) => {
        return <Route path={item.url}>{item.title}</Route>
    })
    return (
        <div className={AddPageStyle.Container}>
            <div className={AddPageStyle.Menu}>
                <div className={AddPageStyle.MenuList}>
                    <ul>
                        {AddPageMenuItems}
                    </ul>
                </div>
            </div>
            <div className={AddPageStyle.Form}>
                <div className={AddPageStyle.Title}>{AddPageTitles}</div>
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