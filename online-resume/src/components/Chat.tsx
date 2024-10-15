import React, { useState, useEffect } from 'react';
import getGoogleAiResponse from '../api';
import styled from 'styled-components';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatbotButton = styled.div`
  background-color: #007bff;
  color: white;
  font-size: 24px;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChatbotPopup = styled.div`
  width: 350px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
  right: ${({ active }) => (active ? '30px' : '-400px')};
  display: flex;
  flex-direction: column;
  transition: right 0.4s ease, opacity 0.4s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
`;

const ChatbotHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 15px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const ChatbotBody = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

const ChatbotFooter = styled.div`
  padding: 10px;
  background-color: #efefef;
  border-radius: 0 0 10px 10px;
  display: flex;
  gap: 10px;
`;

const InputField = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const Chatbot = () => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleChatbot = () => {
      setIsActive(!isActive);
    };
  
    return (
      <ChatbotContainer>
        <ChatbotButton onClick={toggleChatbot}>
          💬
        </ChatbotButton>
        <ChatbotPopup active={isActive}>
          <ChatbotHeader>
            <h3>Chatbot</h3>
            <CloseButton onClick={toggleChatbot}>×</CloseButton>
          </ChatbotHeader>
          <ChatbotBody>
            <p>Hi! How can I assist you today?</p>
            {/* Add chat messages or chatbot logic here */}
          </ChatbotBody>
          <ChatbotFooter>
            <InputField type="text" placeholder="Type your message..." />
            <SendButton>Send</SendButton>
          </ChatbotFooter>
        </ChatbotPopup>
      </ChatbotContainer>
    );
  };
  
  export default Chatbot;

// const Chat = () => {
//     const [response, setResponse] = useState('');

//     const getResponse = async () => {

//         try{
//             const responseFromAI = await getGoogleAiResponse("Hello")

//             if (typeof responseFromAI === 'string'){
//                 setResponse(responseFromAI)
//             }else{
//                 setResponse("Cant get anythin")
//             } 

//         }catch (error) {
//             setResponse("Error: " + error.message);
//         };
        
//     };
    
//     useEffect(() => {
//         getResponse();

//     }, [])
    
  
//     return (
//       <div>
//         <h1>AI Response</h1>
//         <h1>{response}</h1>
        
//       </div>
//     );
//   };
  
//   export default Chat;
    