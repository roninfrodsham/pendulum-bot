import React, { useEffect } from "react";
import styled from "styled-components";

import bot0 from "../../../assets/bot0.png";

const Messages = styled.div`
  width: 100%;
  overflow: auto;
  padding: 25px 0;
  flex: 1;
`;

const Response = styled.div`
  width: 100%;
  margin-bottom: 10px;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -13px;
  }

  span {
    width: 90%;
    display: block;
    padding: 10px 0 10px 65px;
  }
`;

const Question = styled.div`
  width: 100%;
  overflow: hidden;

  div {
    float: right;
    max-width: 90%;
    margin: 0 15px 10px 0;
    padding: 10px;
    border: 2px solid #28283c;
    border-radius: 4px;
  }
`;

const messagesContainer = React.createRef();

const scrollMessages = () => {
  messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight;
};

function ChatHistory({ messages }) {
  useEffect(() => scrollMessages());

  return (
    <Messages ref={messagesContainer}>
      {messages.map(message =>
        message.messageType === "bot" ? (
          <Response key={message.id}>
            <img src={bot0} alt="JJ the user agent" />
            <span>{message.message}</span>
          </Response>
        ) : (
          <Question key={message.id}>
            <div>{message.message}</div>
          </Question>
        )
      )}
    </Messages>
  );
}

export default ChatHistory;
