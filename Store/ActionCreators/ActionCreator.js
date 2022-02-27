import {
    ChangeLanguage,
    ChangeMode,
    ChangeNavBarActive,
    FreelanceAddLike, FreelanceDeleteLike,
    ProjectAddLike, ProjectDeleteLike,
    StoreAddLike, StoreDeleteLike
} from "../Actions";


export function ChangeModeActionCreator() {
    return{
        type:ChangeMode
    }
}
export function ChangeNavbarActive(index) {
    return{
        type:ChangeNavBarActive,
        index:index
    }
}

export function ChangeLanguageAC(lang){
    return{
        type:ChangeLanguage,
        language: lang
    }
}
export function AddLikeFreelanceAC(index){
    return{
        type: FreelanceAddLike,
        index: index
    }
}
export function AddLikeProductAC(index){
    return{
        type: StoreAddLike,
        index: index
    }
}
export function AddLikeProjectAC(index){
    return{
        type: ProjectAddLike,
        index: index
    }
}

export function RemoveLikeFreelanceAC(index){
    return{
        type: FreelanceDeleteLike,
        index: index
    }
}
export function RemoveLikeProductAC(index){
    return{
        type: StoreDeleteLike,
        index: index
    }
}
export function RemoveLikeProjectAC(index){
    return{
        type: ProjectDeleteLike,
        index: index
    }
}