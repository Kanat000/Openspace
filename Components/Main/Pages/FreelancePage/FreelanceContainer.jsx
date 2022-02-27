import {connect} from "react-redux";
import Freelance from "./Freelance";
import FreelanceResult from "./FreelanceResultBlocks/Freelance_results";
import {AddLikeFreelanceAC, RemoveLikeFreelanceAC} from "../../../../Store/ActionCreators/ActionCreator";

let mapStateToProps = (state) =>{
    return {
        state:state
    };
}
let mapDispatchToProps = (dispatch) => {
    return{
        likeOn: (index) => {
            let action = AddLikeFreelanceAC(index);
            dispatch(action);
        },
        likeOff: (index) =>{
            let action = RemoveLikeFreelanceAC(index);
            dispatch(action);
        }
    }
}
const FreelanceContainer = connect(mapStateToProps,mapDispatchToProps)(Freelance);

export default FreelanceContainer;