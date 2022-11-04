import React, { useState ,useEffect} from "react";
import { Tabs, Avatar, List } from "antd";
import "./style.css";

export default function ChatList({contacts,changeChat}) {
  const [currentSelected, setCurrentSelected] = useState(undefined);
  // const data = contacts
  const click=(contact)=>{
    changeChat(contact)
  }
  const data2 = [
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
   
  ];

  return (
    <div className="chatlist">
      
      <Tabs defaultActiveKey="1" className="tabs">
        <Tabs.TabPane tab="Tất cả" key="1">
          {/* <List
            className="list1"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item)  => (
              <List.Item className="list-item1">
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a >{item.username}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          /> */}
          {contacts.map((contact, index) => {
            return (
              <div className="contact" onClick={() => click(contact)}>
                <div className="avt">
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                  
                </div>
                <div className="name">
                  <h3>{contact.username}</h3>
                  <p>Hello</p>
                </div>
                
              </div>
            )
          })}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Chưa đọc" key="2">
          <List
            className="list2"
            itemLayout="horizontal"
            dataSource={data2}
            renderItem={(item) => (
              <List.Item className="list-item2">
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
