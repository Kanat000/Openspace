import {connect} from "react-redux";
import App from "./App";

let mapStateToProps = (state) =>{
    let AppClass;
    if(state.AppPage.Moon){
        AppClass = 'Moon';
    }
    else{
        AppClass = 'Sun';
    }
    return {
        AppClass: AppClass
    }
}
const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;