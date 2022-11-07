import { Button } from "antd";
import React, { useState ,useEffect,useContext} from "react";
import {
  UsergroupAddOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import "./style.css";
import { AppContext } from "../../context/AppProvider";
export default function ChatHeaderBtn() {
  const { setIsAddUserModalOpen,roomChat } =
    useContext(AppContext);
    const handleAddUser = () => {
      setIsAddUserModalOpen(true);
    };
  return (
    <div className="chat-header-btn">
      <Button
        className="btn-chat-header"
        type="text"
        onClick={handleAddUser}
        icon={<UsergroupAddOutlined />}
      />
      <Button
        className="btn-chat-header"
        type="text"
        icon={<SearchOutlined />}
      />
      <Button
        className="btn-chat-header"
        type="text"
        icon={<VideoCameraOutlined />}
      />
      <Button className="btn-chat-header" type="text" icon={<BarsOutlined />} />
    </div>
  );
}
