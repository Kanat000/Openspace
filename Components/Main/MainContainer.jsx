import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";
import FreelanceProductPage from "./Pages/FreelancePage/FreelanceProductPage/FreelanceProductPage";
import ProductPage from "./Pages/StorePage/ProductPage/ProductPage";
import ProjectProduct from "./Pages/ProjectsPage/ProjectProduct/ProjectProduct";
import Main from "./Main";
import {ImageUrlOf} from "./ImageConverter";
import {titleList} from "./titleList";
import {
    AddLikeFreelanceAC,
    AddLikeProductAC, AddLikeProjectAC,
    RemoveLikeFreelanceAC,
    RemoveLikeProductAC, RemoveLikeProjectAC
} from "../../Store/ActionCreators/ActionCreator";

let mapStateToProps = (state) =>{
    let titleArr = titleList.map((elem)=>{
        return <Route exact path={elem.path}>{elem.title}</Route>
    })
    return {
        state:state,
        titleArr:titleArr
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        freelanceLikeOn:(index)=>{
            let action = AddLikeFreelanceAC(index);
            dispatch(action);
        },
        freelanceLikeOff:(index)=>{
            let action = RemoveLikeFreelanceAC(index);
            dispatch(action);
        },
        productLikeOn:(index)=>{
            let action = AddLikeProductAC(index);
            dispatch(action);
        },
        productLikeOff:(index)=>{
            let action = RemoveLikeProductAC(index);
            dispatch(action);
        },
        projectLikeOn:(index)=>{
            let action = AddLikeProjectAC(index);
            dispatch(action);
        },
        projectLikeOff:(index)=>{
            let action = RemoveLikeProjectAC(index);
            dispatch(action);
        },


    }
}
const MainContainer = connect(mapStateToProps,mapDispatchToProps)(Main);
const MainWithRouter = withRouter(MainContainer);
export default MainWithRouter;