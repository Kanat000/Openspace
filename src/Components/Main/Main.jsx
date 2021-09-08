import React from 'react';
import {Route} from 'react-router-dom';
import Chat from "./Pages/ChatPage/Chat";
import mainStyle from './Main.module.css';
import Search from "./Pages/SearchSection/Search";
import ProductPage from "./Pages/StorePage/ProductPage/ProductPage";
import FreelanceProductPage from "./Pages/FreelancePage/FreelanceProductPage/FreelanceProductPage";
import ProjectProduct from "./Pages/ProjectsPage/ProjectProduct/ProjectProduct";
import AddPage from "./Pages/AddPage/AddPage";
import ProfileContainer from "./Pages/ProfilePage/ProfileContainer";
import FreelanceContainer from "./Pages/FreelancePage/FreelanceContainer";
import StoreContainer from "./Pages/StorePage/StoreContainer";
import ProjectContainer from "./Pages/ProjectsPage/ProjectContainer";
import CartContainer from "./Pages/CartPage/CartContainer";

function Main(props) {
    return (
         <div className={mainStyle.scrollPage}>
             <div className={mainStyle.Head}>
                 <div className={mainStyle.pageName}>
                     Freelance
                 </div>
                 <div className={mainStyle.SearchSection}>
                     <Route exact path={["/","/store","/projects","/cart"]}>
                         <Search />
                     </Route>
                 </div>
             </div>
             <div className={mainStyle.MainContainer}>
                 <Route path="/profile"><ProfileContainer /></Route>
                 <Route path="/add"><AddPage /></Route>
                 <Route exact path="/"><FreelanceContainer /></Route>
                 <Route exact path="/store"><StoreContainer /></Route>
                 <Route exact path="/projects"><ProjectContainer /></Route>
                 <Route path="/cart"><CartContainer /></Route>
                 <Route path="/chat"><Chat /></Route>
                 {props.freeLanceProductArr}
                 {props.storeProductArr}
                 {props.projectProductArr}
             </div>


         </div>
    );
}

export default Main;