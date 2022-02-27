import initialState from "../InitialState";
import {ChangeNavBarActive} from "../Actions";


let NavBarState = initialState.Root.NavBar;

let NavBarReducer = (state = NavBarState,action) => {
    let stateCopy = {...state};
    switch (action.type){
        case ChangeNavBarActive:
            stateCopy.ActiveIndex = action.index;
            break;
    }
    return stateCopy;
}

export default NavBarReducer;