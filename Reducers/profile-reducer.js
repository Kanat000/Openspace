import initialState from "../InitialState";

let profileState = initialState.profilePage;

const profileReducer = (state = profileState, action) =>{
   let stateCopy = {...state};
   return stateCopy;
}
export default profileReducer;