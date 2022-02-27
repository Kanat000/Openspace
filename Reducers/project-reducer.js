import initialState from "../InitialState";
import {ProjectAddLike, ProjectDeleteLike} from "../Actions";

let ProjectState = initialState.ProjectPage;

let ProjectReducer = (state=ProjectState,action) =>{
    let stateCopy = {...state};
    stateCopy.Project = [...state.Project];
    stateCopy.Project[action.index] = {...state.Project[action.index]};

    switch (action.type) {
        case ProjectAddLike:
           stateCopy.Project[action.index].Liked = true;
           break;
        case ProjectDeleteLike:
            stateCopy.Project[action.index].Liked = false;
            break;
    }
    return stateCopy;
}

export default ProjectReducer;