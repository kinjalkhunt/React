// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDataById } from './actions/apiaction';

// const DataByIdComponent = () => {
//   const [id, setId] = useState('');
//   const dispatch = useDispatch();
//   const { loading, singleData, error } = useSelector((state) => state.api);

//   const handleFetch = () => {
//     if (id) dispatch(fetchDataById(id));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Data by ID</h1>
//       <input
//         type="text"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//         placeholder="Enter ID"
//       />
//       <button onClick={handleFetch}>Fetch Data</button>
//       {singleData && <div>{singleData.name}</div>}
//     </div>
//   );
// };

// export default DataByIdComponent;


import { connect } from "react-redux"
import "../css/mockApi.css"

const MockApiView = ({singleData}) => {
    return(
        <>
            <div className="container">
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
export default connect(mapStateToProps, mapStateToDispatch) (MockApiView)