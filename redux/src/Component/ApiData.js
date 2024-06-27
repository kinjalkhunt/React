// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from './actions/apiaction';

// const AllDataComponent = () => {
//   const dispatch = useDispatch();
//   const { loading, data, error } = useSelector((state) => state.api);

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>All Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllDataComponent;



import { useEffect } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { requestSuccessAction, requestDetailSuccessAction} from "../redux/actions/apiAction"
import "../css/mockApi.css"
import { useNavigate } from "react-router-dom"


const MockApiCreate = ({ dataForView, dataSuccess, singleDataForView }) => {

    const navigator = useNavigate()

    async function callingApi() {
        try {
            const data = await axios.get("https://663cb35717145c4d8c374f0d.mockapi.io/weetech/names").then((data) => {
                dataSuccess(data.data)
            }).catch(() => {
                dataSuccess([])
            })
        } catch (error) {
            console.log("error occured", error);
            dataSuccess([])
        }
    }

    useEffect(() => {
        callingApi()
    }, [])
    console.log(dataForView);
    return (
        <>
            {(dataForView.data.length !== 0) ? dataForView.data.map((value) => {
                return (
                    <div className="container" key={value.id} onClick={(e) => {
                        e.preventDefault()

                        singleDataForView(value)
                        navigator("/api-data")

                    }} >
                        <img src={value.avatar}  />
                        <div className="data" >
                            <p> Name : {value.name}</p>
                            <p> Id : {value.id}</p>
                            <p> createdAt : {value.createdAt}</p>
                        </div>
                    </div>
                )
            }) : <div> No data available</div>}
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