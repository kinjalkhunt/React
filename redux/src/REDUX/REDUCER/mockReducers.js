import { REQUEST_START, REQUEST_SUCCESS, REQUEST_DETAIL_SUCCESS } from "../action/AllAction";

const initialState = {
    loading: false,
    data: [],
    detail: {}
}

const mockReducers = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_START:{
            return {
                ...state,
                loading: true
            }
        }
           
        case REQUEST_SUCCESS:{
            console.log(action.data);
            return {
                ...state,
                loading: false,
                data: action.data
            }
        }
           
        case REQUEST_DETAIL_SUCCESS:{
            return {
                ...state,
                loading: false,
                detail: action.data
            }
        }
           
        default:
            return state;
    }
};

export default mockReducers  