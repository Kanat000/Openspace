import initialState from "../InitialState";
import {StoreAddLike, StoreDeleteLike} from "../Actions";

let StoreState = initialState.StorePage;
let StoreReducer = (state = StoreState,action) =>{
    switch (action.type){
        case StoreAddLike:
            state.Product[action.index].Liked = true;
            break;
        case StoreDeleteLike:
            state.Product[action.index].Liked = false;
            break;
    }
    return state;
}
export default StoreReducer;