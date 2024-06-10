import React, { useEffect, useState } from "react";

function SendMessageBar({messages, setMessage, user}) {

    const [newMessage, setNewMessage] = useState({senderId:'', text:''});

    function handleMessageSend() {
        setMessage([...messages, newMessage]);
        setNewMessage({senderId:'',text:''});
    }

    useEffect(() => {
        console.log(newMessage);
        console.log(user);
    }, [newMessage, user])

    return (
        <div className="message-bar">
            <input placeholder="Type your message..."
                   className="input"
                   value={newMessage.text}
                   onChange={(event) => {setNewMessage({text: event.target.value, senderId: user,});
            }} />
            <button className="send"
                    onClick={handleMessageSend}>
            Send</button>
        </div>
    );
}

export default SendMessageBar;