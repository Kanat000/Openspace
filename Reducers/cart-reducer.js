import initialState from "../InitialState";
import {
    FreelanceAddLike,
    FreelanceDeleteLike,
    ProjectAddLike,
    ProjectDeleteLike,
    StoreAddLike,
    StoreDeleteLike
} from "../Actions";

let cartState = initialState.CartPage;

let CartReducer = (state = cartState, action) => {
    let stateCopy = {...state};
    stateCopy.Orders = [...state.Orders];
    stateCopy.Products = [...state.Products];
    stateCopy.Projects = [...state.Projects];
    stateCopy.Orders[action.index] = {...state.Orders[action.index]};
    stateCopy.Products[action.index] = {...state.Products[action.index]};
    stateCopy.Projects[action.index] = {...state.Projects[action.index]};
    switch (action) {
        case FreelanceAddLike:
            stateCopy.Orders[action.index].liked = true;
            break;
        case FreelanceDeleteLike:
            stateCopy.Orders[action.index].liked = false;
            break;
        case StoreAddLike:
            stateCopy.Products[action.index].Liked = true;
            break;
        case StoreDeleteLike:
            stateCopy.Products[action.index].Liked = false;
            break;
        case ProjectAddLike:
            stateCopy.Projects[action.index].Liked = true;
            break;
        case ProjectDeleteLike:
            stateCopy.Projects[action.index].Liked = false;
            break;
    }
    return stateCopy;
}

export default CartReducer;