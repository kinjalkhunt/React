import { connect } from "react-redux"
import { EDIT_FLAG_TODO_ACTION, REMOVE_ALL_TODO_ACTION, REMOVE_TODO_ACTION } from "../REDUX/action/todoAction"

const ViewTodo = ({ reducerData, deleteTodoAction, deleteAllTodoAction, editAction, data }) => {
    // console.log(data);
    console.log(reducerData);
    return (
        <>
            <button onClick={(e) => {
                e.preventDefault()
                deleteAllTodoAction()
            }}>
                Delele All
            </button>

            <ul>
                {reducerData.todoList.map((value, index) => (
                    <div key={index}>
                
                        <li>{value.id}  ===  {value.title}</li>
                        
                        <button onClick={(e) => {
                            e.preventDefault()

                            deleteTodoAction(value.id)
                        }}>
                            Delele
                        </button>

                        <button onClick={(e) => {
                            e.preventDefault()
                            editAction(value)
                        }}>
                            EDIT
                        </button>

                    </div>

                ))}
            </ul>
        </>)
}

const mapStateToProps = (state) => ({
    reducerData: state.todoReducer
})
const mapStateToDispatch = (dispatch) => ({
    deleteTodoAction: (id) => (dispatch(REMOVE_TODO_ACTION(id))),
    deleteAllTodoAction: () => (dispatch(REMOVE_ALL_TODO_ACTION())),
    editAction: (todo) => (dispatch(EDIT_FLAG_TODO_ACTION(todo)))
})

export default connect(mapStateToProps, mapStateToDispatch)(ViewTodo)