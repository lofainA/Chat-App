import React, { useState } from "react";
import Title from "./components/Title";
import MessageList from "./components/MessageList";
import SendMessageBar from "./components/SendMessageBar";


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

  return(
    <div className="page">
      <Title />
      <MessageList messageList={messages}/>
      <SendMessageBar />
    </div>
  );
}

export default App;

