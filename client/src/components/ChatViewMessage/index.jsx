import { BackTop } from "antd";
import React, { useState, useEffect, useRef } from "react";
import Message from "../Message";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../../utils/APIRoutes";

export default function ChatViewMessage({messages}) {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("scroll : "+scrollRef.current);
  }, [messages]);
    // useEffect(async () => {
    //   async function fetchData() {
      
    // }
    // fetchData();
    // }, [currentChat]);
  
  const uid = "123";

  const date = new Date();

  // console.log(date.getDate());

  const renderMess = messages.map((message, index) => (
    
      <div ref={scrollRef}  key={index} className={`message ${
        message.fromSelf ? "m-msg" : "msg"}`}>
        <Message
          key={message.id}
          text={message.message}
          photoURL={message.photoURL}
          displayName={message.displayName}
          createdAt={message.createdAt}
          mesUid={message.uid}
        />
      </div>
    
  ));

  return (
    <div   className="chat-view-message">
      {renderMess}
      {/* <BackTop>UP</BackTop> */}
    </div>
  );
}
