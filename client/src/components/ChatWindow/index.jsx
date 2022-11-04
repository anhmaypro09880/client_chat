import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import ChatHeader from "../ChatHeader";
import ChatView from "../ChatView";

export default function ChatWindow({currentChat,socket}) {
  
  
  return (
    
    <div className="chatwindow">
      <Row>
        <Col span={24}>
          <ChatHeader currentChat={currentChat} />
        </Col>
        <Col span={24}>
          <ChatView socket={socket} currentChat={currentChat} />
        </Col>
      </Row>
    </div>
  );
}
