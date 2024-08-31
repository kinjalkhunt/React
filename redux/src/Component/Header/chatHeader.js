import React from 'react';
import "../CSS/chat.css"

function ChatHeader() {
    return (
        <header>
            <nav className="nav">
                <div className="logo"><i className="fa fa-whatsapp" aria-hidden="true"></i></div>
                <ul className="nav-links">
                    <div className="menu">
                        <li><i className="fa fa-camera" aria-hidden="true"></i></li>
                        <li><i className="fa fa-search" aria-hidden="true"></i></li>
                        <li className="services"><i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <ul className="dropdown">
                                <li><a href="#">New group</a></li>
                                <li><a href="#">New broadcast</a></li>
                                <li><a href="#">Linked devices</a></li>
                                <li><a href="#">Starred messages</a></li>
                                <li><a href="#">Payment</a></li>
                                <li><a href="#">Setting</a></li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </nav>
            <div className="div">
                <i className="fa fa-users icon" aria-hidden="true"></i>
                <p className="icon">Chats</p>
                <p className="icon">Updates</p>
                <p className="icon">Calls</p>
            </div>
        </header>
    );
}

export default ChatHeader;