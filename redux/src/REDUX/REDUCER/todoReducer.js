// reducers.js

import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../ACTION/AllAction";


const initialState ={todos:[]}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      {
        console.log("add todo reducer ",action);
        console.log("state ==",state.todos);
        return {
       
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload }]
      };}
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.payload.id ? { ...todo, text: action.payload.updatedText } : todo
        )
      };
    default:
      return state;
  }
};

export default todoReducer;