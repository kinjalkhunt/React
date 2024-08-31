import { combineReducers, createStore, compose, applyMiddleware } from "redux"
// import todoReducer from "./reducers/todoReducers"
// import mockReducers from "./reducers/mockReducers"
// import ImageReducer from "./REDUCER/ImageReducer"
// import ImgbbReducers from "./reducers/ImgbbReducers"
import { thunk } from "redux-thunk"
import realChatReducer from "../REDUX/REDUCER/realChatReducers"

const baseReducers = combineReducers({
    // todoReducer,
    // mockReducers,
    //ImageReducer
    realChatReducer,

})

const store = createStore(baseReducers, compose(applyMiddleware(thunk)))

export default store

// import { createStore, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
// import rootReducer from './REDUCER/realChatReducers'
// // import realChatReducers from "./REDUCER/realChatReducers"


// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
