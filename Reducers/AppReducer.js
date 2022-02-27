import initialState from "../InitialState";
import {ChangeLanguage, ChangeMode} from "../Actions";

let AppState = initialState.Root;

const AppReducer = (state=AppState,action) =>{
    let stateCopy = {...state,App:{...state.App},Language: {...state.Language}};
    switch (action.type){
        case ChangeMode:
            stateCopy.App.Moon = !stateCopy.App.Moon;
            break;
        case ChangeLanguage:
            stateCopy.Language.status = action.language;

    }
    return stateCopy;
}

export default AppReducer;