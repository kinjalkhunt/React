import { connect } from "react-redux"
import "./CSS/mockApi.css"

const MockApiView = ({singleData}) => {
    return(
        <>
            <div className="container" style={{ paddingTop: "8vh" }}>
                <img src={singleData.avatar} />
                <div className="data">
                    <p> Name : {singleData.name} </p>
                    <p> Id : {singleData.id} </p>
                    <p> Created At : {singleData.createdAt} </p>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    singleData: state.mockReducers.detail
})
const mapStateToDispatch = (dispatch) => ({

})
export default connect(mapStateToProps, mapStateToDispatch)(MockApiView)