import React, { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
// import Headers from "../Header/Header.js"
import { socket, socketContext } from "../../Context/socket.js"
import ChatHeader from "../Header/chatHeader.js"
// import Header from "../../../../myapp/src/Component/Header/Header.js"




function Outlets() {

    let myContextApi = useContext(socketContext)
    console.log("socket connect  ==", myContextApi)

    useEffect(() => {
        socket.emit("reduxconnected", {
            message: "hello word"
        })
    }, [])

    // socket.emit("reduxconnected", {
    //     message: "hello word"
    // })

    return (
        <>
            {/* <Header />
            <Outlet /> */}
            <ChatHeader/>
            {/* <Headers/> */}
            <Outlet/>
        </>
    )
}

export default Outlets