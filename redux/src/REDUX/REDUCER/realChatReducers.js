import { SET_USER_DATA, SET_CHAT_DATA, SET_MESSAGE, ADD_MESSAGE } from "../action/AllAction";

const initialState = {
    user: null,
    chatData: [],
    message: '',
    chat: []
};

const realChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, user: action.payload };
        case SET_CHAT_DATA:
            return { ...state, chatData: action.payload };
        case SET_MESSAGE:
            return { ...state, message: action.payload };
        case ADD_MESSAGE:
            return { ...state, chat: [...state.chat, action.payload] };
        default:
            return state;
    }
};

export default realChatReducer;
