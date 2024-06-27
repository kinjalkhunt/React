import React, { useState } from "react"
// import ViewToDo from "./viewToDo"
// import { addTodoActions, edittodoActions } from "../Redux/Actions/todoActions"
import { connect } from "react-redux"
import ToDolist2 from "./ToDoListView"
import { addTodo, editTodo } from "../REDUX/ACTION/ToDoAction"

function CreateToDo({ addTodo, editTodo }) {

    let [dataDitails, setDataDitails] = useState("")
    let [storeData, setStoreData] = useState([])
    let [counter, setCounter] = useState(0)
    let [flagEditing, setFlagEditing] = useState(null)

    const DeleteInput = (index) => {
        const newDetails = [...storeData]
        newDetails.splice(index, 1);
        setStoreData(newDetails);
    };

    const EditInput = (index) => {
        setDataDitails(storeData[index].taskTitle)
        setFlagEditing(storeData[index].id)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (flagEditing !== null) {
            const updatedData = storeData.map((value) => {
                if (value.id === flagEditing) {
                    
                    return { ...value, taskTitle: dataDitails }
                }
                return value
            });
            setStoreData(updatedData)
            setFlagEditing(null)
        } else {
            setStoreData([...storeData, { 
                taskTitle: dataDitails,
                id: counter }]);
            setCounter(counter + 1)
        }
        addTodo(dataDitails)
        setDataDitails('')
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter your text"
                    onChange={(e) => {
                        e.preventDefault()
                        setDataDitails(e.target.value);
                    }}
                    value={dataDitails}
                />
                <button onClick={handleSubmit}>
                    Submit
                </button>
                <ToDolist2 view={storeData} DeleteInput={DeleteInput} EditInput={EditInput} />
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    addTodo: (a) => dispatch(addTodo(a)),
    editTodo: (a, b) => dispatch(editTodo(a, b))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateToDo)