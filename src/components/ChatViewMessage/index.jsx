import { BackTop } from "antd";
import React, { useState, useEffect, useRef } from "react";
import Message from "../Message";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../../utils/APIRoutes";
import {addreaction} from "../../utils/APIRoutes"
import InputEmoji from 'react-input-emoji'
export default function ChatViewMessage({messages,socket,currentChat}) {
  
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    // console.log("scroll : "+scrollRef.current);
  }, [messages]);
    // useEffect(async () => {
    //   async function fetchData() {
      
    // }
    // fetchData();
    // }, [currentChat]);
  
  const uid = "123";

  const date = new Date();

  // console.log(date.getDate());
  


  
  // const test= (message)=>{
  //   console.log(message);
  // }
  const tesst = "testLoop"
  return (
    <div   className="chat-view-message">
      {messages.map((message, index) => {
            return (
              <div ref={scrollRef}  key={index} className={`message ${
                message.fromSelf ? "m-msg" : "msg"}`}>
                <Message
                  currentChat= {currentChat}
                  test ={tesst}
                  socket= {socket}
                  key={message.id}
                  message={message}
                  text={message.message}
                  photoURL={message.photoURL}
                  displayName={message.displayName}
                  createdAt={message.createdAt}
                  mesUid={message.uid}
                  namesend={message.namesend}
                  avatarImage={message.avatarImage}
                />
                
                {/* <div><button onClick={() => test(message)}>test</button></div> */}
                  
                
              </div>
            )
          })}
    </div>
  );
}
