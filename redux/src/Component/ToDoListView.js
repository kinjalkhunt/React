import React from "react";
import ToDoList from "./ToDoList";

function ToDolist2(props) {

    return (
        <>
            <div>
                {props.view.map((value, index) => (

                    <div key={index}>
                        <p>{value.taskTitle}</p>
                        <button style={{ width: '10%', height: '5%' }} onClick={(e) => {
                            e.preventDefault()
                            props.DeleteInput(index)
                        }}>
                            Delete
                        </button>
                        <button style={{ width: '10%' }} onClick={(e) => {
                            e.preventDefault()
                            props.EditInput(index)
                        }}>
                            Edit
                        </button>
                    </div>

                ))}
            </div>
        </>
    )

}
const mapStateToProps = (state) =>({
    ToDoList:state.todoReducer
})
const mapDispatchToProps = (dispatch)=>({

})
export default ToDolist2