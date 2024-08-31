import { SET_USER_DATA, SET_CHAT_DATA, SET_MESSAGE, ADD_MESSAGE } from "./AllAction";
import axios from "axios";

export const setUserData = (userData) => ({
    type: 'SET_USER_DATA',
    payload: userData
  });
  
  export const setChatData = (chatData) => ({
    type: 'SET_CHAT_DATA',
    payload: chatData
  });
  
  export const setMessage = (message) => ({
    type: 'SET_MESSAGE',
    payload: message
  });

  export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message
  });
  