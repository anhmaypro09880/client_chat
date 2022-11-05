import React, {useState,useEffect} from "react";
import { Avatar, Typography } from "antd";
import { formatRelative } from "date-fns/esm";
import "./style.css";
import {addreaction} from "../../utils/APIRoutes"
import axios from "axios";
function formatDate(seconds) {
  let formattedDate = "";

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}

export default function Message({
  text,
  displayName,
  createdAt,
  photoURL,
  mesUid,
  message,
  socket,
  currentChat,
  test

}) {

//  useEffect(()=>{
  // console.log(test);
//  },[text])
  const user = {
    uid: "123",
  };
  const [isclick,setclick] =useState(message.reaction)
  const from = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))._id
  useEffect( () => {
    async function fetchData() {
      
        if (socket.current) {
          await  socket.current.on("msg-recieve", ({react,id}) => {
              // console.log("listen msg");
              if(react!==undefined)
              {
                // console.log("test:"+react +":"+message.reaction);
                if(id===message.id)
                {
                  if(react==="❤️")
                  {
                    console.log("tim 1");
                    setclick("❤️")
                  }
                  else{
                    console.log("tim 2");
                    setclick("")
                  }
                } 
              }
            // alert("mess : "+msg);
           
          });
        }   
  }
  fetchData();
  }, []);
  
  const clicktest = async(message)=>{
    console.log(message);
    
    if(isclick==="❤️")
    {
      setclick("")
    }
    else{
      setclick("❤️")
    }
    // console.log(isclick);
    if(isclick==="")
    {
      
      console.log(message);
      socket.current.emit("send-msg", {
        to: currentChat._id,
        from: from,
        react:"❤️",
        id:message.id
      });
      const response =  await axios.post(addreaction, {
        id:message,
        reaction:"❤️",
      });
      
    }
    else{
    
      socket.current.emit("send-msg", {
        to: currentChat._id,
        from: from,
        react:"",
        id:message.id
      });
      const response =  await axios.post(addreaction, {
        id:message,
        reaction:""
      });
    }
    
    
  }
  
  // const test= (message)=>{
  //   console.log(message);
  // }
  
  

  return (
    <div className="message">
      <div className={`${user.uid === mesUid ? "m-msg" : "msg"}`}>
        <Avatar className="avatar" size="large" src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <div className="content">
          <Typography.Text className="message-author">
            {displayName}
          </Typography.Text>
          <br />
          <Typography.Text className="message-text">{text}</Typography.Text>
          <br />
          <Typography.Text className="message-date">
            {createdAt}
          </Typography.Text>
          
          
        </div>
        
      </div>
      <div className="reaction" >
        <button className="btn" onClick={() => clicktest(message)} >
        {isclick === "❤️"  ?  (
          
          <div className="re">❤️</div>
          ) : (<div className="re">♥️</div>)}
        
        
        </button>
      </div>
      
    </div>
  );
}
