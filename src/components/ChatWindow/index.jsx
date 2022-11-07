import React,{useContext} from "react";
import { Row, Col } from "antd";
import "./style.css";
import ChatHeader from "../ChatHeader";
import ChatView from "../ChatView";
import Welcom from "../Welcom";
import { AppContext } from "../../context/AppProvider";
export default function ChatWindow({currentChat,socket}) {
  const { roomChat } =
  useContext(AppContext);
  
  return (
    
    <div className="chatwindow">
      {currentChat === undefined && roomChat===undefined ? (
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
