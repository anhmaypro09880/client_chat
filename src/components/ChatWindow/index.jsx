import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import ChatHeader from "../ChatHeader";
import ChatView from "../ChatView";
import Welcom from "../Welcom";

export default function ChatWindow({currentChat,socket}) {
  
  
  return (
    
    <div className="chatwindow">
      {currentChat === undefined ? (
            <div>
              <Welcom></Welcom>
            </div>
          ) : (
      <Row>
        <Col span={24}>
          <ChatHeader currentChat={currentChat} />
        </Col>
        <Col span={24}>
          <ChatView socket={socket} currentChat={currentChat} />
        </Col>
      </Row>
          )}
    </div>
  );
}
