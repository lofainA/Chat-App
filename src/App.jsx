import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import MessageList from "./components/MessageList";
import SendMessageBar from "./components/SendMessageBar";
import Login from "./components/Login";


const dummyData = [
  {
    senderId: "Alexandera",
    text: "Nice evening, yes?"
  },
  {
    senderId: "Karienne",
    text: "Not really, no"
  }
];

function App() {

  const [messages, setMessages] = useState(dummyData);
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("I am" + user);
  }, [user]);

  return(
    <div className="page">
      {isLoggedIn ? <><Title setIsLoggedIn={setIsLoggedIn}/>
                    <MessageList messageList={messages}/>
                    <SendMessageBar messages={messages} setMessage={setMessages} user={user}/></>
      : <Login users={user} setUsers={setUser} setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  );
}

export default App;

