import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Outlets from "../Outlet/Outlet"
// import BBImageCreate from "../BBImageCreate"
// import BBImageView from "../BBImageView"
// import BBImageComplete from "../BBImageComplete"
// import ChatApp from "../ChatApp"
// import ChatList from "../ChatList"
// import ChatWindow from "../chatWindow"
import Login from "../Login"
import Chat from "../Chat"


// import MockApiCreate from "../mockApiCreate"
// import MockApiView from "../mockApiView"
// import  TodoList from "../TodoList"

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Login/>}></Route>
                <Route path="/chat" element = {<Chat/>}></Route>

                
                {/* // <Route path="" element = {<Outlets /> }> */}
                    {/* <Route path="/" element= {<BBImageCreate/>}/> */}
                    {/* <Route path="/view" element={<BBImageView/>}/> */}
                    {/* <Route path="/upload" element={<BBImageComplete/>}/> */}
                    {/* <Route path="/chatApp" element={<ChatApp/>}></Route>
                    <Route path="/ChatList" element={<ChatList/>}></Route>
                    <Route path="/Chatwindow" element={<ChatWindow/>}></Route> */}


                    {/* <Route path="/mock" element={<MockApiCreate/>} ></Route>
                    <Route path="/api-data" element={<MockApiView/>}></Route>
                    <Route path="/todo" element= {<TodoList />}></Route> */}
                

            </Routes>
        </BrowserRouter>
    )
}

export default Navigation