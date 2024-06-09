import React, { useState } from "react";

function Login({ users, setUsers, setIsLoggedIn }) {

    const [newUser, setNewUser] = useState('');

    function handleUser() {
        if(newUser !== '') {
            setUsers(newUser);
            setNewUser('');
            setIsLoggedIn(true);
        }
        else {
            alert("Enter a username");
        }
    }

    return(
        <div className="login-form">
            <h1>Login to chat</h1>
            <div className="username-input">
                <label>Username</label>
                <input type="text"
                       className="username"
                       value={newUser} 
                       onChange={(event) => setNewUser(event.target.value)}/>
            </div>
            
            <button onClick={handleUser}>
                Login
            </button>
        </div>
    );

}

export default Login;