import React from 'react';
import {Route} from 'react-router-dom';
import Chat from "./Pages/ChatPage/Chat";
import mainStyle from './Main.module.css';
import Search from "./Pages/SearchSection/Search";
import {ProfileWithRouter} from "./Pages/ProfilePage/ProfileContainer";
import FreelanceContainer from "./Pages/FreelancePage/FreelanceContainer";
import StoreContainer from "./Pages/StorePage/StoreContainer";
import ProjectContainer from "./Pages/ProjectsPage/ProjectContainer";
import {CartWithRouter} from "./Pages/CartPage/CartContainer";
import AddPageContainer from "./Pages/AddPage/AddPageContainer";
import FreelanceProductPage from "./Pages/FreelancePage/FreelanceProductPage/FreelanceProductPage";
import ProductPage from "./Pages/StorePage/ProductPage/ProductPage";
import {ImageUrlOf} from "./ImageConverter";
import ProjectProduct from "./Pages/ProjectsPage/ProjectProduct/ProjectProduct";

function Main(props) {

    let freelanceArr = props.state.FreelancePage.freelance;
    let freelanceProductArr = freelanceArr.map((elem,index)=>{
        return <Route path={"/freelance/order/"+elem.Id}>
            <FreelanceProductPage info={elem} likeOn={props.freelanceLikeOn} likeOff={props.freelanceLikeOff} index={index} />
        </Route>
    })
    let storeArr = props.state.StorePage.Product;

    let storeProductArr = storeArr.map((elem,index)=>{
        return <Route path={"/store/product/"+elem.Id}>

            <ProductPage info={elem} ImageUrlOf={ImageUrlOf} likeOn={props.productLikeOn} likeOff={props.productLikeOff} index={index}/>
        </Route>
    })
    let projectArr = props.state.ProjectPage.Project;
    let projectProductArr = projectArr.map((elem,index)=>{
        return <Route path={"/projects/project/"+elem.Id}>
            <ProjectProduct info={elem} ImageUrlOf={ImageUrlOf} likeOn={props.projectLikeOn} likeOff={props.projectLikeOff} index={index}/>
        </Route>
    })

    return (
         <div className={mainStyle.scrollPage}>
             <div className={mainStyle.Head}>
                 <div className={mainStyle.pageName}>
                     {props.titleArr}
                 </div>
                 <div className={mainStyle.SearchSection}>
                     <Route exact path={["/","/store","/projects"]}>
                         <Search />
                     </Route>
                     <Route path={["/cart"]}>
                         <Search />
                     </Route>
                 </div>
             </div>
             <div className={mainStyle.MainContainer}>
                 <Route path="/profile"><ProfileWithRouter /></Route>
                 <Route path="/add"><AddPageContainer /></Route>
                 <Route exact path="/"><FreelanceContainer /></Route>
                 <Route exact path="/store"><StoreContainer /></Route>
                 <Route exact path="/projects"><ProjectContainer /></Route>
                 <Route path="/cart"><CartWithRouter /></Route>
                 <Route path="/chat"><Chat /></Route>
                 {freelanceProductArr}
                 {storeProductArr}
                 {projectProductArr}
             </div>


         </div>
    );
}

export default Main;