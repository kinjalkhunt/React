import { ADD_TODO, EDIT_TODO, REMOVE_TODO, } from "./AllAction";
export const addTodo = (todo) => {
console.log('this is addtodo==',todo);
 return {//api call
    type: ADD_TODO,
    payload: todo
}
};

export const removeTodo = (id) => {
    console.log('this is remove todo');
 return   {
    type: REMOVE_TODO,
    payload: id
}};

export const editTodo = (id, todo) => {
    console.log('this is edittodo==>');
    return{
    type:EDIT_TODO,
    payload: { id, todo }
}};