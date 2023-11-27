import React, { useState } from "react";
import { Input } from "components";
import Header from "components/Header";
// import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ChatContainer, Message, MessageInput, MessageList } from '@chatscope/chat-ui-kit-react';

const ChatMessagesPage = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am chatGPT!",
      sender: "chatGPT"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    // update messages state
    const newMessages = [ ...messages, newMessage ];
    setMessages(newMessages);

    // process message to chatgpt


  };

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[165px] justify-start mx-auto pb-2.5 w-full h-screen">
        <Header className="flex flex-col items-center w-full" />
        <ChatContainer className="flex flex-col font-inter items-end md:px-10 sm:px-5 px-[274px] w-full">
          <MessageList className="flex flex-col items-start justify-start w-[93%] md:w-full">
            { messages.map((message, i) => (
              <Message
                className="bg-green-A200 flex flex-col items-center justify-center mb-5 ml-0.5 md:ml-[0] p-2.5 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] w-auto sm:w-full"
                key={i}
                model={message}
              />
            )) }
          </MessageList>
          <form onClick={() => handleSend}>
            <Input 
              className="flex md:flex-col mb-100px flex-row gap-5 items-center justify-start mt-[60px] w-full"
              placeholder="Type your complaints here..."
            />
          </form>
        </ChatContainer>
      </div>
    </>
  );
};

export default ChatMessagesPage;
