import {connect} from "react-redux";
import Product from "./Product/Product";
import Store from "./Store";
import {ImageUrlOf} from "../../ImageConverter";
import {AddLikeProductAC, RemoveLikeProductAC} from "../../../../Store/ActionCreators/ActionCreator";

let mapStateToProps = (state) =>{

    return{
        state:state
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        ProductLikeOn: (index)=>{
            let action = AddLikeProductAC(index);
            dispatch(action);
        },
        ProductLikeOff: (index) =>{
            let action = RemoveLikeProductAC(index);
            dispatch(action);
        }

    }
}

const StoreContainer = connect(mapStateToProps,mapDispatchToProps)(Store);

export default StoreContainer;