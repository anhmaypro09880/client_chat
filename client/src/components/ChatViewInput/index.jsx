import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import Picker from "emoji-picker-react";
import styled from "styled-components";


import {
  LinkOutlined,
  PictureOutlined,
  SmileOutlined,
} from "@ant-design/icons";
// import Picker from "emoji-picker-react";
import "./style.css";

export default function ChatViewInput({handleSendMsg}) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
    
  };
  const room = {
    displayName: "Enter your message",
  };

  const [form] = Form.useForm();
  
  return (
    <div className="chat-view-input">
   
      <Form onSubmitCapture={sendChat} form={form}>
        
        <Form.Item name="message">
          <Input
            size="large"
            autoSize
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder={room.displayName}
            bordered={false}
            autoComplete="off"
          />
          <span></span>
        </Form.Item>
        
        
        <div className="chat-view-input-btn">
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
          <Button
            className="btn-input"
            icon={<LinkOutlined />}
            type="text"
            size="large"
          ></Button>
          <Button
            className="btn-input"
            icon={<PictureOutlined />}
            type="text"
            size="large"
          ></Button>
          
          <Button
            className="emoji btn-input"
            icon={<SmileOutlined />}
            onClick={handleEmojiPickerhideShow}
            type="text"
            size="large"
          ></Button>
          
         
          <Button className="btn-submit" type="primary">
            Gửi
          </Button>
          
        </div>
      </Form>
    </div>
  );
}
