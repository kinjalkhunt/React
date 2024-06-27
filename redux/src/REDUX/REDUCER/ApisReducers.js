// import {
//     FETCH_DATA_REQUEST,
//     FETCH_DATA_SUCCESS,
//     FETCH_DATA_FAILURE,
//     FETCH_DATA_BY_ID_REQUEST,
//     FETCH_DATA_BY_ID_SUCCESS,
//     FETCH_DATA_BY_ID_FAILURE,
//   } from '../actionTypes';

// import { FETCH_DATA_DETAIL_SUCCESS, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../ACTION/AllAction";

  
//   const initialState = {
//     loading: false,
//     data: [],
//     error: '',
//     singleData: null,
//   };
  
//   const apiReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case FETCH_DATA_REQUEST:
//       case FETCH_DATA_BY_ID_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case FETCH_DATA_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           data: action.payload,
//           error: '',
//         };
//       case FETCH_DATA_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           data: [],
//           error: action.payload,
//         };
//       case FETCH_DATA_BY_ID_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           singleData: action.payload,
//           error: '',
//         };
//       case FETCH_DATA_BY_ID_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           singleData: null,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default apiReducer;
  

  import { FETCH_DATA_DETAIL_SUCCESS, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../ACTION/AllAction";


const initialState = {
    loading: false,
    data: [],
    detail: {}
}

const mockReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:{
            return {
                ...state,
                loading: true
            }
        }
           
        case FETCH_DATA_SUCCESS:{
            console.log(action.data);
            return {
                ...state,
                loading: false,
                data: action.data
            }
        }
           
        case FETCH_DATA_DETAIL_SUCCESS:{
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