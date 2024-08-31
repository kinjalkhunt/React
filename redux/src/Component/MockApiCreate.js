import { useEffect } from "react"
import { connect } from "react-redux"
import "./CSS/mockApi.css"
import { useNavigate } from "react-router-dom"
import { requestSuccessAction, requestDetailSuccessAction } from "../REDUX/action/apiAction"

const MockApiCreate = ({ dataForView, dataSuccess, singleDataForView }) => {
    const navigator = useNavigate()

    // function callingApi() {
    //     try {
    //         const data = axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user")
    //             .then((data) => {
    //                 dataSuccess(data.data)
    //             }).catch(() => {
    //                 dataSuccess([])
    //             })
    //     } catch (error) {
    //         console.log("error occured", error);
    //         dataSuccess([])
    //     }
    // }

    useEffect(() => {

        dataSuccess()
    }, [dataSuccess])

    // console.log(dataForView)

    return (
        <>
            <div style={{ paddingTop: "8vh" }}>
                {(dataForView.data.length !== 0) ? dataForView.data.map((value) => {
                    return (
                        <div className="container" key={value.id} onClick={(e) => {
                            e.preventDefault()

                            singleDataForView(value)
                            navigator("/api-data")

                        }} >
                            <img src={value.avatar} />
                            <div className="data" >
                                <p> Name : {value.name}</p>
                                <p> Id : {value.id}</p>
                                <p> createdAt : {value.createdAt}</p>
                            </div>
                        </div>
                    )
                }) : <div> No data available</div>}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    dataForView: state.mockReducers
})
const mapStateToDispatch = (dispatch) => ({
    dataSuccess: (data) => (dispatch(requestSuccessAction(data))),
    singleDataForView: (data) => (dispatch(requestDetailSuccessAction(data)))
})

export default connect(mapStateToProps, mapStateToDispatch)(MockApiCreate)