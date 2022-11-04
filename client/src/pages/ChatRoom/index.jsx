import React, { useState ,useEffect, useRef,useMemo} from "react";
import { Col, Row } from "antd";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

import ChatWindow from "../../components/ChatWindow";
import { Link, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { allUsersRoute, host } from "../../utils/APIRoutes";

export default function ChatRoom() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [test,settest] = useState("")
  const socket = useRef();



  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
        
      navigate("/login");
      
    } else {

      const getCurenUser=setInterval( ()=>{
        setCurrentUser(
         
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        
      );
      },0)
      return ()=> clearInterval(getCurenUser)
      
      
      ;
    }
   
      
  }, []);



  
  useEffect(()=>{
    async function fetchData() {
      
    const id =(JSON.parse(currentUser))._id
     
    if (currentUser) {
     
      socket.current = io(host);
      socket.current.emit("add-user", id);
    
      const data = await axios.get(`${allUsersRoute}/${id}`);
      const getCurenUser=setInterval( ()=>{
        setContacts(
         data.data
      );
      },0)
      return ()=> clearInterval(getCurenUser)
    }
  }
    fetchData();
  }, [currentUser]);
  const  handleChatChange = async (chat) => {
    await setCurrentChat(chat);
  };
 
  // useEffect(()=>{
  //   async function fetchData() {
  //     console.log(currentChat);
  //   }
  //   fetchData();
  //   }, [currentChat]);
  
  return (
    <Row>
      <Col span={10}>
        <Sidebar contacts={contacts} changeChat={handleChatChange} />
      </Col>
      <Col span={14}>
        <ChatWindow currentChat={currentChat} socket={socket} />
      </Col>
     
    </Row>
  );
}
