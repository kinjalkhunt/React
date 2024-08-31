import { ADD_TODO, REMOVE_TODO, EDIT_TODO, REMOVE_ALL_TODO, EDIT_FLAG_TODO, TOGGLE_FLAG, CURRUNT_TITLE } from "../action/AllAction";


const initialState = {
    todoList: [],
    editFlag: 0,
    editableData: {},
    currentTitle: ``
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            {
                console.log("add todo reducer and data === ", action);
                console.log("state == ", state);
                return {
                    ...state,
                    todoList: [...state.todoList, action.data],
                    editFlag: 0
                }
            }
        
        case REMOVE_ALL_TODO: {
            return  {
                todoList: [],
                editFlag: 0
            }
        }
        
        case REMOVE_TODO: {

            console.log("delete reducer called");

            const deletedStatus = state.todoList.filter((value) => {
                return (value.id !== action.data)
            })

            console.log();

            return {
                todoList: deletedStatus,
                editFlag: 0,
                editableData: {}
            }
        }

        case EDIT_TODO: {
            const editedStatus = state.todoList.map((value) => {
                if (value.id === action.data.id) {
                    return { ...value, title: action.data.title }
                }
                else {
                    return value
                }
            })
            console.log("in edit todo reducer", editedStatus);
            return {
                ...state,
                todoList: editedStatus,
                editableData: {},
                editFlag: 0,
                currentTitle: ``
            }
        }

        case EDIT_FLAG_TODO: {
            return {
                ...state,
                editFlag: 1,
                editableData: action.data,
                currentTitle: action.data.title
            }
        }

        case TOGGLE_FLAG: {
            return {
                ...state,
                editFlag : (state.editFlag)? 0: 1,

            }
        }

        case CURRUNT_TITLE: {
            return {
                ...state,
                currentTitle: action.data
            }
        }

        default:
            return state
            
    }
}

export default todoReducer