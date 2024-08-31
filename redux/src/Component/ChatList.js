// import React, { useContext, useState, useEffect } from 'react';
// import { socketContext } from '../Context/socket';
// import "./CSS/chat.css"

// function ChatList() {
//     const socket = useContext(socketContext);
//     const [search, setSearch] = useState('');
//     const [users, setUsers] = useState([]);
//     const [userData, setUserData] = useState([]);


//     useEffect(() => {
//         socket.on('searched_value', (doc) => {
//             setUsers((prevUsers) => [...prevUsers, ...doc.data]); // Append new users to the existing list
//             // setUsers(doc.data);
//         });

//         socket.on('all_user_get', (doc) => {
//             setUserData(doc.data);
//         });
//         // // Listen for new user additions
//         // socket.on('new_user_added', (newUser) => {
//         //     setUsers((prevUsers) => [...prevUsers, newUser]);
//         // });

//         socket.on('new_user_added', (newUser) => {
//             setUsers((prevUsers) => {
//                 // Check if the new user already exists in the list
//                 if (prevUsers.match(user => user.userID === newUser.userID)) {
//                     // return prevUsers; // Return the current list without adding the duplicate
//                 }
//                 return [...prevUsers, newUser];
//             });
//         });


//         socket.emit('register', {
//             userID: localStorage.getItem('userID'),
//             id1: localStorage.getItem('userID')
//         });

//     }, [socket]);

//     const userSearch = () => {
//         socket.emit('get_users', { search });
//     };

//     const selectUser = async (userID) => {
//         localStorage.setItem('receiverID', userID);

//         const personalUserDetails = userData.filter(user => user.userID === userID);
//         console.log('personal user details', personalUserDetails);

//         document.getElementById('chatScreenUserName').innerText = personalUserDetails[0]?.name ?? '';

//        await allChatLoading();
//     };

//     const allChatLoading = () => {
//         console.log("all chat is loading");
//         socket.emit("get_all_chat", {
//             senderID: localStorage.getItem("userID"),
//             receiverID: localStorage.getItem("receiverID")
//         });
//     };

//     return (
//         <div className="user-list">
//             <input
//                 type="text"
//                 list="usersname"
//                 name="userSearchInput"
//                 id="userSearchInput"
//                 onChange={(e) => setSearch(e.target.value)}
//             />
//             <button onClick={userSearch}>submit</button>
//             <datalist id="usersname">
//                 {users.map(user => (
//                     <option key={user.userID} value={user.userID}>{user.name}</option>
//                 ))}
//             </datalist>
//             <div id="userlist">
//                 {users.map(user => (
//                     <div key={user.userID} className="div2" onClick={() => selectUser(user.userID)}>
//                         <i className="fa fa-user-circle" style={{ fontSize: '43px' }} aria-hidden="true"></i>
//                         <p className="p2">{user.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ChatList;
import React, { useContext, useState, useEffect } from 'react';
import { socketContext } from '../Context/socket';
import "./CSS/chat.css"

function ChatList() {
    const socket = useContext(socketContext);
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        // Listen for the search result and add the user to the list if not already added
        socket.on('searched_value', (doc) => {
            setUsers((prevUsers) => {
                const newUsers = doc.data.filter(user => !prevUsers.some(u => u.userID === user.userID));
                return [...prevUsers, ...newUsers]; // Append only new unique users to the existing list
            });
        });

        // Load all users when registering
        socket.on('all_user_get', (doc) => {
            setUserData(doc.data);
        });

        // Listen for new user additions and prevent duplicates
        socket.on('new_user_added', (newUser) => {
            setUsers((prevUsers) => {
                if (prevUsers.some(user => user.userID === newUser.userID)) {
                    return prevUsers; // Prevent adding duplicate users
                }
                return [...prevUsers, newUser];
            });
        });

        socket.emit('register', {
            userID: localStorage.getItem('userID'),
            id1: localStorage.getItem('userID')
        });
            socket.emit("get_all_chat", {
        senderID: localStorage.getItem("userID"),
        receiverID: localStorage.getItem("receiverID") // Load chat history with the most recent user
    });
        


    }, [socket]);

    const userSearch = () => {
        socket.emit('get_users', { search });
    };

    const selectUser = async (userID) => {
        localStorage.setItem('receiverID', userID);

        const personalUserDetails = userData.filter(user => user.userID === userID);
        console.log('personal user details', personalUserDetails);

        if(personalUserDetails){
        document.getElementById('chatScreenUserName').innerText = personalUserDetails[0]?.name ?? '';

        await allChatLoading(userID);
    }
};

    const allChatLoading = async (receiverID) => {
        console.log("all chat is loading");
        socket.emit("get_all_chat", {
            senderID: localStorage.getItem("userID"),
            // receiverID: localStorage.getItem("receiverID")
            receiverID: receiverID
        });
    };

    return (
        <div className="user-list">
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    list="usersname"
                    name="userSearchInput"
                    id="userSearchInput"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={userSearch} style={{ width: '110px' }}>submit</button>
            </div>
            <datalist id="usersname">
                {users.map(user => (
                    <option key={user.userID} value={user.userID}>{user.name}</option>
                ))}
            </datalist>
            <div id="userlist">
                {users.map(user => (
                    <div key={user.userID} className="div2" onClick={() => selectUser(user.userID)}>
                        <i className="fa fa-user-circle" style={{ fontSize: '43px' }} aria-hidden="true"></i>
                        <p className="p2">{user.name}</p>
                    </div>
                ))}
            </div>
           
        </div>
    );
}

export default ChatList;
