import React from 'react';
import navBarStyle from "./NavBar.module.css";
import {Link} from "react-router-dom";

function NavBar(props) {

    let MenuArr = props.MenuItems.map((item,index)=>{

        return  <Link to={item.url}><li className={"/"+item.url.split("/")[1] === ("/"+props.location.pathname.split("/")[1]) ? navBarStyle.active : navBarStyle.menuItem}>
            <div className={navBarStyle.menuIconBlock}>
                {item.icon}
            </div>
            <div className={navBarStyle.menuText}>{item.title}</div>
        </li></Link>

    });

    return (
        <div className={navBarStyle.Section}>
            <div className={navBarStyle.navBar}>
                <div className={navBarStyle.LogoBlock}>
                    <div className={navBarStyle.Logo}>Openspace</div>
                </div>
                <div className={navBarStyle.Head}>

                    <div>
                        <button className={navBarStyle.ChangeMode} onClick={()=>{props.ChangeMode()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.topIcon}
                             viewBox="0 0 16 16">
                            <path
                                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                            <path
                                d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                        </svg>
                        </button>
                    </div>

                    <select className={navBarStyle.langSelect} >
                        <option onSelect={()=>{props.ChangeLanguage("eng")}} selected={props.LangIs === "eng" ? "selected" : ""}>
                            English
                        </option>
                        <option onSelect={()=>{props.ChangeLanguage("ru")}}  selected={props.LangIs === "ru" ? "selected" : ""}>
                            Русский
                        </option>
                    </select>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={navBarStyle.topIcon} viewBox="0 0 16 16">
                            <path
                                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                    </div>


                </div>


                <div className={navBarStyle.menu}>
                    <ul className={navBarStyle.menuList}>
                        {MenuArr}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default NavBar;