import axios from 'axios'




// export const fetchData = () => async (dispatch) => {
//   dispatch({ type: FETCH_DATA_REQUEST });
//   try {
//     const response = await axios.get('https://663cb35717145c4d8c374f0d.mockapi.io/weetech/names');
//     dispatch({ 
//       type: FETCH_DATA_SUCCESS, 
//       payload: response.data 
//     });
//   } catch (error) {
//     dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
//   }
// };

// export const fetchDataById = (id) => async (dispatch) => {
//   dispatch({ 
//     type: FETCH_DATA_BY_ID_REQUEST 
//   });
//   try {
//     const response = await axios.get(`https://663cb35717145c4d8c374f0d.mockapi.io/weetech/names${id}`);
//     dispatch({ 
//       type: FETCH_DATA_BY_ID_SUCCESS, 
//       payload: response.data });
//   } catch (error) {
//     dispatch({ 
//       type: FETCH_DATA_BY_ID_FAILURE, 
//       payload: error.message });
//   }
// };
import { REQUEST_DETAIL_SUCCESS, REQUEST_START, REQUEST_SUCCESS } from "./AllAction";


export const requestStartAction = () => ({
    type: REQUEST_START,

})

export const requestSuccessAction = (data) => ({
    type: REQUEST_SUCCESS,
    data: data
})

export const requestDetailSuccessAction = (data) => ({
    type: REQUEST_DETAIL_SUCCESS,
    data: data
})