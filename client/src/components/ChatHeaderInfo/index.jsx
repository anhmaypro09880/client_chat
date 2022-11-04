import React, { useState ,useEffect} from "react";
import { Avatar, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";

export default function ChatHeaderInfo({currentChat}) {

  // data test
  const [name,setname] = useState("")
  useEffect(()=>{
    if(currentChat)
    {
      setname(currentChat.username)
    }
  })
  const members = [
    {
      displayName: "Cao Thắng",
      photoURL:
        "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    }
    
  ];

  const user = {
    displayName: "Kha Vỹ",
    photoURL: "",
    onlineStatus: "Truy cập 30 phút trước",
  };

  const room = {
    displayName: name
  };

  // set chat don hay chat nhom
  const role = false;

  const handleOpenInfo = () => {
    console.log("Info User");
  };

  return (
    <div className="chat-header-info">
      {role ? (
        <div className="chat-header-info-user">
          <Button className="info-avatar-user" type="text">
            <Avatar size="large" src={user.photoURL} onClick={handleOpenInfo}>
              {user.photoURL ? "" : user.displayName?.charAt(0)?.toUpperCase()}
            </Avatar>
          </Button>
          <div className="info-desc">
            <Typography.Text className="info-desc-name">
              {user.displayName}
            </Typography.Text>
            <br />
            <Typography.Text className="onlineStatus">
              {user.onlineStatus}
            </Typography.Text>
          </div>
        </div>
      ) : (
        <div className="chat-header-info-group">
          <Button className="info-avatar-group" type="text">
            <Avatar.Group size="default" maxCount={1}>
              {members.map((member) => (
                <Avatar src={member.photoURL}>
                  {member.photoURL
                    ? ""
                    : member.displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
              ))}
            </Avatar.Group>
          </Button>
          <div className="info-desc">
            <Typography.Text className="info-desc-name">
              {room.displayName}
            </Typography.Text>
            <br />
            <Button className="info-desc-members" type="text">
              <UserOutlined /> {members.length} thành viên
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
