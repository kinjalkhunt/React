import { ADD_TODO, CURRUNT_TITLE, EDIT_FLAG_TODO, EDIT_TODO, REMOVE_ALL_TODO, REMOVE_TODO, TOGGLE_FLAG } from "../action/AllAction";

export const ADD_TODO_ACTION = (todo) => {
    console.log("add todo action successfully called", todo);
    return {
        type: ADD_TODO,
        data: todo
    }
}

export const  REMOVE_TODO_ACTION = (id) => ({
    type: REMOVE_TODO,
    data: id
})

export const REMOVE_ALL_TODO_ACTION = () => ({
    type: REMOVE_ALL_TODO
})

export const EDIT_TODO_ACTION = (id, title) => {
    return {
        type: EDIT_TODO,
        data: {
            id,
            title
        }
    }
}

export const EDIT_FLAG_TODO_ACTION = (todo) => {
    console.log("edit flag action is called");
    return {
        type: EDIT_FLAG_TODO,
        data: todo
    }
}

export const TOGGLE_FLAG_ACTION = () => {
    return {
        type: TOGGLE_FLAG,
    }
}

export const CURRUNT_TITLE_ACTION = (title) => {
    return {
        type: CURRUNT_TITLE,
        data: title
    }
}