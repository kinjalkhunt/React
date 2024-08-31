// src/components/CheckUser.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');

    const checkUserApi = async () => {
        try {
            const response = await axios.get(`http://localhost:7000/user/check/${email}`);
            if (response.data.error) {
                console.error('Error:', response.data.error);
            } else {
                localStorage.setItem('userID', response.data.userDetails.userID);
                window.location.replace('/chat');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button onClick={checkUserApi}>Check User</button>
        </div>
    );
};

export default  Login;