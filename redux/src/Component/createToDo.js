import { useState } from "react"
import { connect } from "react-redux"
import { v4 } from "uuid"
import { ADD_TODO_ACTION, CURRUNT_TITLE_ACTION, EDIT_TODO_ACTION, REMOVE_TODO_ACTION, TOGGLE_FLAG_ACTION } from "../REDUX/action/AllAction"
export const CreateTodo = ({ addTodo, reducerData, currentTitle, editTitleAction }) => {

    let [data, setData] = useState({id : ``, title: ``})

    return (
        <>
            <div style={{paddingTop: "8vh"}}>

                <input
                    type="text"
                    placeholder="Enter your text"
                    onChange={(e) => {
                        e.preventDefault()
                        currentTitle(e.target.value)
                    }}
                    value={reducerData.currentTitle}
                />

                {reducerData.editFlag === 0 ? (<button onClick={(e) => {
                    e.preventDefault()

                        if (!(reducerData.currentTitle === '')) {
                            addTodo({
                                ...data,
                                id: v4(),
                                title: reducerData.currentTitle
                            })
                            setData({ id: '', title: '' })
                        }
                }}>
                    Submit
                </button>) : (<button  onClick={(e) => {
                    e.preventDefault()
                    editTitleAction(reducerData.editableData.id, reducerData.currentTitle)
                }}>
                    update
                </button>)}
                
            </div>

            {/* <ViewTodo reducerData={"hello"}/> */}
        </>
    )

}

const mapStateToProps = (state) => ({
    reducerData: state.todoReducer
})
const mapStateToDispatch = (dispatch) => ({
    addTodo: (a) => (dispatch(ADD_TODO_ACTION(a))),
    toggleTodo: () => (dispatch(TOGGLE_FLAG_ACTION())),
    currentTitle: (title) => (dispatch(CURRUNT_TITLE_ACTION(title))),
    editTitleAction: (id, title) => (dispatch(EDIT_TODO_ACTION(id, title)))
})

export default connect(mapStateToProps, mapStateToDispatch)(CreateTodo)