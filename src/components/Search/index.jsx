import React from "react";
import {
  UserAddOutlined,
  UsergroupAddOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import "./style.css";

export const AppContext = React.createContext();

export default function Search() {
  // const { setIsAddRoomVisible } = React.useContext(AppContext);

  // const handleAddRoom = () => {
  //   setIsAddRoomVisible(true);
  // };

  return (
    <div className="search">
      <div className="search-form">
        <SearchOutlined style={{ color: "black", fontSize: "18px" }} />
        <Input
          type="text"
          placeholder={"Tìm kiếm"}
          bordered={false}
          autoComplete="off"
        />
      </div>
      <div className="search-btn">
        <Button
          type="text"
          icon={<UserAddOutlined />}
          className="btn-add-user-group"
          // onClick={handleAddUser}
        ></Button>
        <Button
          type="text"
          icon={<UsergroupAddOutlined />}
          className="btn-add-user-group"
          // onClick={handleAddRoom}
        ></Button>
      </div>
    </div>
  );
}
