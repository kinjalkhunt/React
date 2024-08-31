import { SET_SELECTED_FILE, UPLOAD_IMAGE } from "../action/AllAction";

// export const uploadImageSuccess = (imageUrl) => {
//     return {
//         type: UPLOAD_IMAGE,
//         data: {
//             imageUrl
//         }
//     }
// }

export const uploadImageSuccess = (imageUrl) => ({
    type: UPLOAD_IMAGE,
    data: { imageUrl },
});

export const setSelectedFile = (file) => ({
    type: SET_SELECTED_FILE,
    payload: file,
});

// export const setSelectedFile = (file) => ({
//     type: SET_SELECTED_FILE,
//     payload: file,
// })

// export const uploadImageFailure = (error) => ({
//     type: UPLOAD_IMAGE_FAILURE,
//     data: error
// })
// export const uploadImageRequest = () => ({
//     type : UPLOAD_IMAGE_FAILURE
// })
// redux/actions/ImgbbAction.js
