import React from 'react'
import ChatList from './ChatList';
import ChatWindow from './chatWindow';
import ChatHeader from './Header/chatHeader';

function Chat() {
  return (
    <>
      <div className='chatApp'>
        <div className='chatheader'>
          <ChatHeader />
          <ChatList />
        </div>
        <div className='chatwindow'>
          <ChatWindow />
        </div>
      </div>
    </>
  )
}

export default Chat;

