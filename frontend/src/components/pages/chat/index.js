import React, { useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import ChatHistory from "./ChatHistory";

const Container = styled.div`
  max-width: 800px;
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const ChatWrapper = styled.div`
  border: 2px solid #28283c;
  top: 164px;
  left: 50%;
  right: 50%;
  bottom: 78px;
  display: flex;
  flex: 1;
  max-width: 800px;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatInput = styled.div`
  border-top: 2px solid #28283c;
  padding: 15px;
  overflow: hidden;

  textarea {
    border: 0;
    outline: 0;
    width: 75%;
    height: 44px;
    font-size: 14px;
    background: transparent;
    resize: none;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #28283c;
    }
    :-ms-input-placeholder {
      color: #28283c;
    }
  }

  button {
    float: right;
    padding: 14px 20px;
    border: 0;
    border-radius: 4px;
    background-color: #28283c;
    color: #bef0dc;
    font-size: 13px;
  }
`;

const CHAT_STORAGE_KEY = "CHAT_STORAGE_KEY";

const storeChat = chat => {
  localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chat));
};

const readStoredChat = () => {
  const chat = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY));
  return chat ? chat : [];
};

function Chat() {
  const questionRef = useRef();
  const storedChat = readStoredChat();
  let defaultChat;

  if (storedChat.length) {
    console.log("CHAT STORED ADD AS DEFAULT");
    defaultChat = storedChat;
  } else {
    defaultChat = [
      {
        id: 0,
        messageType: "bot",
        message:
          "Hello, at Pendulum we specialise in Chatbots, Automated Services and Digital Assistants. How can I help you today?"
      }
    ];
  }

  useEffect(() => {
    storeChat(messages);
  });

  const [messages, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "question":
        return [
          ...state,
          {
            id: state.length,
            messageType: "user",
            message: action.question
          }
        ];
      case "response":
        return [
          ...state,
          {
            id: state.length,
            messageType: "bot",
            message: action.response
          }
        ];
      default:
        return state;
    }
  }, defaultChat);

  const dispatchEvent = () => {
    dispatch({
      type: "question",
      question: questionRef.current.value
    });
    userQuestion(questionRef.current.value);
    questionRef.current.value = "";
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatchEvent();
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatchEvent();
    }
  };

  const userQuestion = question => {
    axios
      .post(`${process.env.REACT_APP_SITE_URL}/pendulum`, {
        question: question
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: "response",
          response: response.data
        });
      });
  };

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Pendulum AI - Specialist in Chatbots, Automated Services and Digital
          Assistants
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Header />
      <ChatWrapper>
        <ChatContainer>
          <ChatHistory messages={messages} />
          <ChatInput>
            <form onSubmit={handleSubmit}>
              <textarea
                ref={questionRef}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question..."
              />
              <button>Send</button>
            </form>
          </ChatInput>
        </ChatContainer>
      </ChatWrapper>
      <Footer />
    </Container>
  );
}

export default Chat;
