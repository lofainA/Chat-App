
function MessageList({ messageList }) {
    console.log("works");
    return(
        <ul className="message-list">
            {messageList.map(m => (
                <li key={m.senderId} className="message">
                    <div className="sender">{m.senderId}</div>
                    <div className="text">{m.text}</div>
                </li>
            ))}
        </ul>
    );

}

export default MessageList;