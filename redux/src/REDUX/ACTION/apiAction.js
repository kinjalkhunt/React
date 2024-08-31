import { REQUEST_DETAIL_SUCCESS, REQUEST_START, REQUEST_SUCCESS } from "./AllAction";
import axios from "axios";

export const requestStartAction = () => ({
    type: REQUEST_START,

})

export const requestSuccessAction = (data) => {

    return async function (dispatch, getState) {

        try {
            const mockApi = await axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user")

            dispatch({
                type: REQUEST_SUCCESS,
                data: mockApi.data
            })
        } catch (error) {

        }
    }
}

export const requestDetailSuccessAction = (data) => ({
    type: REQUEST_DETAIL_SUCCESS,
    data: data
})