import React, { useState, useEffect, useRef ,useContext} from "react";
import { Col, Row } from "antd";
import "./style.css";
import ChatViewMessage from "../ChatViewMessage";
import ChatViewInput from "../ChatViewInput";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute,getMessagesRoom } from "../../utils/APIRoutes";
import { AppContext } from "../../context/AppProvider";

export default function ChatView({socket,currentChat}) {
  // console.log(socket);
  // console.log(currentChat);
  const { roomChat,setRoomChat,setCurrentChat,user } =
    useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  useEffect(()=>{
    async function fetchData() {
      if(currentChat)
      {
        
        const data = await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        );
        const response = await axios.post(recieveMessageRoute, {
          from: data._id,
          to: currentChat._id,
        });
        // console.log(response.data);
        setRoomChat(undefined)
        setMessages(response.data);
       
      }
    }
    fetchData();
    }, [currentChat]);
    useEffect(()=>{
      async function fetchData() {
        if(roomChat)
        {
          
          const data = await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
          );
          const response = await axios.post(getMessagesRoom, {
            id: roomChat.id,
            from:user._id
          });
         
          setCurrentChat(undefined)
          setMessages(response.data);
         
        }
      }
      fetchData();
      }, [roomChat]);
      

    // useEffect(()=>{
    //   async function fetchData() {
    //     console.log(messages);
    //   }
    //   fetchData();
    //   }, [currentChat]);
  

    useEffect(() => {
      const getCurrentChat = async () => {
        if (currentChat) {
          await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
          )._id;
        }
      };
      getCurrentChat();
    }, [currentChat]);
    const handleSendMsg = async (msg) => {
      const data = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      if(currentChat!==undefined)
      {
        const data1 = await axios.post(sendMessageRoute, {
          from: data._id,
          to: currentChat._id,
          message: msg,
          namesend:"",
          avatarImage:data.avatarImage
        });
  
        socket.current.emit("send-msg", {
          to: currentChat._id,
          from: data._id,
          msg,
          id:data1.data.id,
          avatarImage:data.avatarImage
          
        });
    
        const msgs = [...messages];
        // console.log(data1.data.id);
        msgs.push({id:data1.data.id, fromSelf: true, message: msg,reaction:"",from:data._id,to: currentChat._id });
       
        setMessages(msgs);
      }
      else if (roomChat!==undefined)
      {
        const data1 = await axios.post(sendMessageRoute, {
          from: data._id,
          to: roomChat.id,
          message: msg,
          namesend:data.username,
          avatarImage:data.avatarImage
        });
  
        socket.current.emit("send-msg", {
          to: roomChat.members,
          from: data._id,
          msg,
          id:data1.data.id,
          namesend:data.username,
          avatarImage:data.avatarImage
        });
    
        const msgs = [...messages];
        // console.log(data1.data.id);
        
        msgs.push({id:data1.data.id, fromSelf: true, message: msg,reaction:"",namesend:data.username,avatarImage:data.avatarImage});
      
        setMessages(msgs);
      }
      
    };
    useEffect( () => {
      async function fetchData() {
        const getCurenUser=setInterval( ()=>{
          if (socket.current) {
              socket.current.on("msg-recieve", ({msg,id,namesend,avatarImage}) => {
                // console.log(id);
              if(msg !==undefined)
              {
                setArrivalMessage({ fromSelf: false, message: msg,id:id,namesend:namesend,avatarImage:avatarImage });
              }
              // alert("mess : "+msg);
            //  console.log("test1");
              
            });
          }
        },0)
        return ()=> clearInterval(getCurenUser)
      
    }
    fetchData();
    }, []);
    useEffect(() => {
      arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);
    // useEffect(() => {
    //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [messages]);
  return (
    <div className="chat-view">
     
      <Row>
      
        <Col span={24}>
            <ChatViewMessage currentChat={currentChat} socket={socket} messages={messages} />
        </Col>
        
        <Col span={24}>
          <ChatViewInput handleSendMsg={handleSendMsg} />
        </Col>
      </Row>
    
    </div>
  );
}
