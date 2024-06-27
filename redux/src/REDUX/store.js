import { combineReducers,createStore} from "redux";
import todoReducer from "./REDUCER/todoReducer";

const bestReducers = combineReducers({
    todoReducer
})
const store = createStore(bestReducers);
export default store;