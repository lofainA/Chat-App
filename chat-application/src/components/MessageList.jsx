import React, {useEffect, useRef} from 'react';

function MessageList({ messageList }) {

    const messagesEndRef = useRef(null);

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({ behaviour:"smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messageList]);

    console.log("works");
    return(
        <ul className="message-list">
            {messageList.map(m => (
                <li key={m.senderId} className="message">
                    <div className="sender">{m.senderId}</div>
                    <div className="text">{m.text}</div>
                </li>
            ))}
            <div ref={messagesEndRef} />
        </ul>
    );

}

export default MessageList;