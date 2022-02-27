import NavbarStyle from './NavBar.module.css';
import navBarStyle from "./NavBar.module.css";
import React from "react";
import {LangSystemText} from "../../Store/Translator";

let NavbarItems = [
    {
        title: LangSystemText.Profile,
        cName: NavbarStyle.menuItem,
        url: '/profile',
        icon:  <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.menuIcon}
                    viewBox="0 0 16 16">
            <path
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
    },
    {
        title: LangSystemText.Add,
        cName: NavbarStyle.menuItem,
        url: '/add/work',
        icon:   <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.menuIcon} viewBox="0 0 16 16">
            <path
                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
        </svg>
    },
    {
        title: LangSystemText.Freelance,
        cName: NavbarStyle.menuItem,
        url: '/',
        icon:  <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.menuIcon}
                    viewBox="0 0 16 16">
            <path
                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
            <path
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
        </svg>
    },
    {
        title: LangSystemText.Store,
        cName: NavbarStyle.menuItem,
        url: '/store',
        icon:   <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.menuIcon}
                     viewBox="0 0 16 16">
            <path
                  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
        </svg>
    },
    {
        title: LangSystemText.Project,
        cName: NavbarStyle.menuItem,
        url: '/projects',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.menuIcon}
                   viewBox="0 0 16 16">
            <path
                d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
        </svg>
    },
    {
        title: LangSystemText.Chat,
        cName: NavbarStyle.menuItem,
        url: '/chat',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.menuIcon}
                   viewBox="0 0 16 16">
            <path
                d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
        </svg>
    },
    {
        title: LangSystemText.Cart,
        cName: NavbarStyle.menuItem,
        url: '/cart',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.menuIcon} viewBox="0 0 16 16">
            <path
                d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
    }
];


export default NavbarItems;