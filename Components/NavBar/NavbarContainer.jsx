import {connect} from "react-redux";
import NavBar from "./NavBar";
import {ChangeLanguageAC, ChangeModeActionCreator, ChangeNavbarActive} from "../../Store/ActionCreators/ActionCreator";
import React from "react";
import MenuItems from "./MenuItems";
import NavBarStyle from './NavBar.module.css';
import {withRouter} from 'react-router';

let mapStateToProps = (state) =>{
    let MenuItemsCopy = [...MenuItems];
    for(let i=0;i<MenuItemsCopy.length;i++){
        MenuItemsCopy[i] = {...MenuItems[i]};
    }
    return{
        MenuItems:MenuItemsCopy,
        LangIs: state.AppPage.Language.Status
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        ChangeMode: () => {
            let action = ChangeModeActionCreator();
            dispatch(action);
        },
        ChangeLanguage: (lang) =>{
            let action = ChangeLanguageAC(lang);
            dispatch(action);
        }

    }
}

export const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar);

export const NavbarWithRouter = withRouter(NavbarContainer);