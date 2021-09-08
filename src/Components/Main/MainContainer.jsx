import {connect} from "react-redux";
import {Route} from "react-router-dom";
import FreelanceProductPage from "./Pages/FreelancePage/FreelanceProductPage/FreelanceProductPage";
import ProductPage from "./Pages/StorePage/ProductPage/ProductPage";
import ProjectProduct from "./Pages/ProjectsPage/ProjectProduct/ProjectProduct";
import Main from "./Main";
import {ImageUrlOf} from "./ImageConverter";

let mapStateToProps = (state) =>{
    let freelanceArr = state.FreelancePage.freelance;
    let freelanceProductArr = freelanceArr.map((elem)=>{
        return <Route path={"/freelance/order/"+elem.Id}>
            <FreelanceProductPage info={elem} />
        </Route>
    })
    let storeArr = state.StorePage.Product;
    let storeProductArr = storeArr.map((elem)=>{
        return <Route path={"/store/product/"+elem.Id}>
            <ProductPage info={elem} ImageUrlOf={ImageUrlOf}/>
        </Route>
    })
    let projectArr = state.ProjectPage.Project;
    let projectProductArr = projectArr.map((elem)=>{
        return <Route path={"/projects/project/"+elem.Id}>
            <ProjectProduct info={elem} ImageUrlOf={ImageUrlOf}/>
        </Route>
    })
    return {
        freeLanceProductArr: freelanceProductArr,
        storeProductArr: storeProductArr,
        projectProductArr: projectProductArr
    }
}
const MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;