// import { UPLOAD_IMAGE } from "../actions/allAction";

import { SET_SELECTED_FILE, UPLOAD_IMAGE } from "../action/AllAction";

// const initialState = {
//     uplodingFile: [],
//     selectedFile: null
// }

// const ImgbbReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case UPLOAD_IMAGE: {
//             return {
//                 ...state,
//                 uplodingFile: [
//                     ...state.uplodingFile, {

//                         name: action.data.imageUrl
//                     }
//                 ]
//             }
//         }

//         // case SET_SELECTED_FILE: {
//         //     return {
//         //         ...state,
//         //         selectedFile: action.payload,
//         //     }
//         // }

//         default:
//             return state
//     }
// };

// export default ImgbbReducer



const initialState = {
    uploadingFile: [],
    selectedFile: null,
};

const ImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_IMAGE:
            return {
                ...state,
                uploadingFile: [
                    ...state.uploadingFile,
                    {
                        name: action.data.imageUrl,
                    },
                ],
            };

        case SET_SELECTED_FILE:
            return {
                ...state,
                selectedFile: action.payload,
            };

        default:
            return state;
    }
};

export default ImageReducer;
