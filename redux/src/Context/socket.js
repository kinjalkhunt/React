// import {react} from "react"
import {connect} from "socket.io-client"
import { createContext } from 'react';


const socket = connect("ws://localhost:7000")
const socketContext = createContext()

export {socket, socketContext}

