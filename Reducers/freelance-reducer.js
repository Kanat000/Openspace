import initialState from "../InitialState";
import {FreelanceAddLike,FreelanceDeleteLike} from "../Actions";

let freelanceState = initialState.freelancePage;

const freelanceReducer = (state=freelanceState,action) => {
    let stateCopy = {...state};
    stateCopy.freelance = [...state.freelance];
    stateCopy.freelance[action.index] = {...state.freelance[action.index]}
    switch (action.type){
        case FreelanceAddLike :
            stateCopy.freelance[action.index].liked = true;
            break;
        case FreelanceDeleteLike :
            stateCopy.freelance[action.index].liked = false;
            break;
    }
    return stateCopy;
}
export default freelanceReducer;