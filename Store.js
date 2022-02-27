import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profile-reducer";
import freelanceReducer from "./Reducers/freelance-reducer";
import StoreReducer from "./Reducers/store-reducer";
import ProjectReducer from "./Reducers/project-reducer";
import CartReducer from "./Reducers/cart-reducer";
import AppReducer from "./Reducers/AppReducer";
import NavBarReducer from "./Reducers/navbar-reducer";

let reducers = combineReducers({
    AppPage: AppReducer,
    Navbar:NavBarReducer,
    ProfilePage:profileReducer,
    FreelancePage:freelanceReducer,
    StorePage:StoreReducer,
    ProjectPage:ProjectReducer,
    CartPage: CartReducer,
});


let store = createStore(reducers);

export default store;