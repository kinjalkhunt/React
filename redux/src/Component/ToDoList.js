import React from "react"
import CreateTodo from "./createToDo"
import ViewTodo from "./viewToDo"

function TodoList(){
    return(
        <>
            <CreateTodo />
            <ViewTodo />        
        </>
    )
}

export default TodoList