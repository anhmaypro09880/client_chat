import React, { useContext,useEffect,useState } from "react";
import { List, Modal, Typography } from "antd";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AppContext } from "../../context/AppProvider";
import axios from "axios";
import {addTT} from "../../utils/APIRoutes"
import { async } from "@firebase/util";
export default function AddUserModal() {
  const { isAddUserModalOpen, setIsAddUserModalOpen,contacts ,roomChat} = useContext(AppContext);
  const[members,setMembers] = useState([])
  const [data,setdata] = useState([])
  const handleOk = async () => {
    // console.log(members);
    const memms = [...roomChat.members]
    
    members.forEach(element => {
      memms.push(element)
    });
    
    const { data } = await axios.post(addTT, {
      id:roomChat.id,
      mems:memms,
    });
    setIsAddUserModalOpen(false);
  };

  const handleCancel = () => {
    
    setIsAddUserModalOpen(false);
  };
  const addMembers =(user)=>{
    const mems = [...members];
    if(mems.indexOf(user._id)<0)
    {
      mems.push(user._id);
    
      setMembers(mems);
    } 
  }
 
  useEffect(()=>{
    setdata([])
    contacts.forEach(element => {
      if(roomChat!==undefined)
      {
        if(roomChat.members.indexOf(element._id)<0)
        {
          const data1 = [...data]
          if(data1.indexOf(element)<0)
          {
            data1.push(element)
            setdata(data1)
          }
          
        }
      }
      
    });
  },[roomChat])
  

  return (
    <div>
      <Modal
        title="Thêm bạn"
        open={isAddUserModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Tìm kiếm"
        cancelText="Hủy"
      >
        <form>
          <div className="login-phone-input md-add-user-input">
            <ReactPhoneInput
              className="phone-input"
              country={"vn"}
              placeholder="Số điện thoại"
              autoFormat
              disableCountryCode
              inputStyle={{ border: "none" }}
              buttonStyle={{
                border: "none",
                backgroundColor: "white",
              }}
            ></ReactPhoneInput>
          </div>
          <span>Có thể bạn quen</span>
          {/* <List
            className="md-add-user-list"
            size="large"
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )}
          /> */}
          {data.map((user, index) => {
            return (
              <div  onClick={() => addMembers(user)}  >
                <p>{user.username}</p>
              </div>
            )})}
        </form>
      </Modal>
    </div>
  );
}
