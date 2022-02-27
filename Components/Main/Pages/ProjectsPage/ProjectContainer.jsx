import {connect} from "react-redux";
import Projects from "./Projects";
import {ImageUrlOf} from "../../ImageConverter";
import ProjectResult from "./ProjectResultBlock/Project_result";
import {AddLikeProjectAC, RemoveLikeProjectAC} from "../../../../Store/ActionCreators/ActionCreator";

let mapStateToProps = (state) => {
   return{
        state:state
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        ProjectLikeOn: (index)=>{
            let action = AddLikeProjectAC(index);
            dispatch(action);
        },
        ProjectLikeOff: (index) => {
            let action = RemoveLikeProjectAC(index);
            dispatch(action);
        }
    }
}
const ProjectContainer = connect(mapStateToProps,mapDispatchToProps)(Projects);

export default ProjectContainer;