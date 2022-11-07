import React, { useState ,useEffect,useContext} from "react";
import { Avatar, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import { AppContext } from "../../context/AppProvider";
export default function ChatHeaderInfo({currentChat}) {
  const { roomChat } =
  useContext(AppContext);
  // data test
  const [name,setname] = useState("")
  // const members = [
  //   {
  //     displayName: "Cao Thắng",
  //     photoURL:
  //       "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
  //   },
  //   {
  //     displayName: "Cao Thắng",
  //     photoURL:
  //       "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
  //   },
    
    
  // ];
  const [members,setMembers] = useState([])
  useEffect(()=>{
   
    if(roomChat!==undefined)
    {
      setname(roomChat.roomName)
      setMembers(roomChat.members)
    }
    else{
      setname(currentChat.username)
      // setMembers([])
    }
  })
  
 

  const user = {
    displayName: name,
    photoURL: "",
    onlineStatus: "Truy cập 30 phút trước",
  };

  // const room = {
  //   displayName: name
  // };

  // set chat don hay chat nhom
  const role = false;

  const handleOpenInfo = () => {
    console.log("Info User");
  };

  return (
    <div className="chat-header-info">
      {roomChat ===undefined ? (
        <div className="chat-header-info-user">
          <Button className="info-avatar-user" type="text">
            <Avatar size="large" src={currentChat.avatarImage} onClick={handleOpenInfo}>
              {currentChat.avatarImage ? "" : user.displayName?.charAt(0)?.toUpperCase()}
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
          {/* <h1>chat don</h1> */}
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
              {roomChat.roomName}
            </Typography.Text>
            <br />
            <Button className="info-desc-members" type="text">
              <UserOutlined /> online
            </Button>
          </div>
       
        </div>
      )}
    </div>
  );
}
