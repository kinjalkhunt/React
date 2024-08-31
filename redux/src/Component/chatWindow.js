// import React, { useContext, useEffect, useState } from 'react';
// import { socketContext } from '../Context/socket';
// import "./CSS/chat.css";
// import axios from 'axios';

// function ChatWindow() {
//     const socket = useContext(socketContext);
//     const [chatData, setChatData] = useState([]);
//     const [message, setMessage] = useState('');
//     const [selectedImage, setSelectedImage] = useState(null);


//     useEffect(() => {
//         const handleChatData = (doc) => {
//             setChatData(doc.chatData);
//         };

//         const handleCaughtMessage = (doc) => {
//             setChatData(prevChatData => [...prevChatData, doc]);
//         };

//         const handleCatchAllChat = (doc) => {
//             setChatData(doc.chatData);
//         };

//         socket.on('chat-data', handleChatData);
//         socket.on('caught_message', handleCaughtMessage);
//         socket.on('catch_all_chat', handleCatchAllChat);

//         // Cleanup on unmount

//             socket.off('chat-data', handleChatData);
//             socket.off('caught_message', handleCaughtMessage);
//             socket.off('catch_all_chat', handleCatchAllChat);

//         return () => {
//             socket.off('chat-data', handleChatData);
//             socket.off('caught_message', handleCaughtMessage);
//             socket.off('catch_all_chat', handleCatchAllChat);
//         };
//     }, [socket]);

//     const handleImageUpload = async () => {
//         if (selectedImage) {
//             const reader = new FileReader();
//             reader.readAsDataURL(selectedImage);
//             return new Promise((resolve) => {
//                 reader.onloadend = async () => {
//                     const base64Image = reader.result.split(',')[1]; // Get base64 data without the "data:image/*;base64," part
//                     try {
//                         const response = await axios.post('http://localhost:7000/upload-image', {
//                             image: base64Image,
//                             filename: selectedImage.name
//                         });
//                         resolve(response.data.imageUrl);
//                     } catch (error) {
//                         console.error('Image upload failed:', error);
//                         resolve(null);
//                     }
//                 };
//             });
//         }
//         return null;
//     };

//     const dropMessage = async() => {
//         const userID = localStorage.getItem('userID');
//         const receiverID = localStorage.getItem('receiverID');
//         const imageUrl = await handleImageUpload();

//         socket.emit('drop_message', {
//             senderID: userID,
//             receiverID: receiverID,
//             message: message,
//             imageUrl: imageUrl

//         });

//         setChatData(prevChatData => [...prevChatData, {
//             senderID: userID,
//             message: message,
//             imageUrl: imageUrl

//         }]);

//         setMessage('');
//         setSelectedImage(null);

//     };

//     return (
//         <>
//             <div className="chat-screen">
//                 <div className="div3">
//                     <div className="div3a">
//                         <i className="fa fa-user-circle" aria-hidden="true" style={{ fontSize: '43px' }}></i>
//                         <p className="p2" id="chatScreenUserName">Papa &#128522;</p>
//                     </div>
//                     <div className="menu">
//                         <i className="fa fa-video-camera" aria-hidden="true"></i>
//                         <i className="fa fa-phone" aria-hidden="true"></i>
//                         <li className="services">
//                             <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                             <ul className="dropdown">
//                                 <li><a href="#">View contact</a></li>
//                                 <li><a href="#">Media, links, and docs</a></li>
//                                 <li><a href="#">Search</a></li>
//                                 <li><a href="#">Mute notifications</a></li>
//                                 <li><a href="#">Disappearing messages</a></li>
//                                 <li><a href="#">Wallpaper</a></li>
//                                 <li><a href="#">More</a></li>
//                             </ul>
//                         </li>
//                     </div>
//                 </div>
//                 <div className="div4" style={{ height: '80vh' }}>
//                     <div id="chatDiv" className="chatDiv">
//                         <div className="message-container">
//                             {chatData.map((chat, index) => (
//                                 <div
//                                     key={index}
//                                     className={chat.senderID === localStorage.getItem('userID') ? 'right-chat' : 'left-chat'}
//                                 >
//                                     {/* {chat.message} */}
//                                     {chat.message && <p>{chat.message}</p>}
//                                     {chat.imageUrl && <img src={chat.imageUrl} alt="chat-img" style={{ maxWidth: '100%' }} />}

//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="div5">
//                     <div id="chtInputDiv" style={{ width: '100%', display: 'flex',flexDirection: 'column' }}>
//                         <input
//                             type="text"
//                             name="dropMessageInput"
//                             id="dropMessageInput"
//                             style={{ width: '80%' }}
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                         />
//                          <input
//                             type="file"
//                             onChange={(e) => setSelectedImage(e.target.files[0])}
//                         />
//                         <button onClick={dropMessage} style={{ width: '18%' }}>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ChatWindow;
import React, { useContext, useEffect, useState } from 'react';
import { socketContext } from '../Context/socket';
import './CSS/chat.css';

function ChatWindow() {
    const socket = useContext(socketContext);
    const [chatData, setChatData] = useState([]);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        const receiverID = localStorage.getItem('receiverID');

        if (receiverID) {
            // Request chat history between the current user and the selected user
              socket.emit('get_all_chat', {
                senderID: localStorage.getItem('userID'),
                receiverID,
            });
        }

        const handleChatData = (doc) => {
            setChatData(doc.chatData);
        };

        const handleCaughtMessage = (doc) => {
            setChatData((prevChatData) => {
                if (!prevChatData.some((chat) => chat.messageID === doc.messageID)) {
                    return [...prevChatData, doc];
                }
                return prevChatData;
            });
        };

        // socket.on('chat-data', handleChatData);
        socket.on('caught_message', handleCaughtMessage);
        socket.on('catch_all_chat', handleChatData);

        return () => {
            // socket.off('chat-data', handleChatData);
            socket.off('caught_message', handleCaughtMessage);
            socket.off('catch_all_chat', handleChatData);
        };
    }, [socket]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const dropMessage = () => {
        const receiverID = localStorage.getItem('receiverID');
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('senderID', localStorage.getItem('userID'));
            formData.append('receiverID', receiverID);
            formData.append('messageID', new Date().getTime());

            socket.emit('drop_file', formData);

            setChatData((prevChatData) => [
                ...prevChatData,
                {
                    senderID: localStorage.getItem('userID'),
                    receiverID: receiverID,
                    file: URL.createObjectURL(file),
                    messageID: new Date().getTime(),
                    fileType: file.type,
                },
            ]);

            setFile(null);
        } else if (message) {
            const newMessage = {
                senderID: localStorage.getItem('userID'),
                receiverID: receiverID,
                message: message,
                messageID: new Date().getTime(),
            };

            socket.emit('drop_message', newMessage);

            setChatData((prevChatData) => [...prevChatData, newMessage]);

            setMessage('');
        }
    };

    const triggerFileInput = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className="chat-screen">
            <div className="div3">
                <div className="div3a">
                    <i className="fa fa-user-circle" aria-hidden="true" style={{ fontSize: '43px' }}></i>
                    <p className="p2" id="chatScreenUserName">papa😘</p>
                </div>

                <div className="menu">
                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <li className="services">
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        <ul className="dropdown" style={{ width: '150px', lineHeight: '1.7em' }}>
                            <li>View contact</li>
                            <li>Media, links, and docs</li>
                            <li>Search</li>
                            <li>Mute notifications</li>
                            <li>Disappearing messages</li>
                            <li>Wallpaper</li>
                            <li>More</li>
                        </ul>
                    </li>
                </div>
            </div>

            <div className="div4" style={{ height: '80vh' }}>
                <div id="chatDiv" className="chatDiv">
                    <div className="message-container">
                        {chatData.map((chat, index) => (
                            <div key={index} className={`message ${chat.senderID === localStorage.getItem('userID') ? 'right-chat' : 'left-chat'}`}>
                                {chat.message && <p>{chat.message}</p>}
                                {chat.file && chat.fileType.startsWith('image/') && (
                                    <img src={chat.file} alt="sent content" style={{ maxWidth: '100%', height: '200px' }} />
                                )}
                                {chat.file && chat.fileType.startsWith('video/') && (
                                    <video controls style={{ maxWidth: '100%', height: '200px' }}>
                                        <source src={chat.file} type={chat.fileType} />
                                    </video>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="div5">
                <div id="chtInputDiv" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        accept="image/*, video/*"
                    />
                    <button onClick={triggerFileInput} style={{ width: '10%' }}>
                        <i className="fa fa-paperclip" aria-hidden="true"></i>
                    </button>
                    <input
                        type="text"
                        name="dropMessageInput"
                        id="dropMessageInput"
                        style={{ width: '65%' }}
                        placeholder="Type Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={dropMessage} style={{ width: '18%' }}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ChatWindow;
