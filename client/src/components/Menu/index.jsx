import React from "react";
import { Avatar, Button } from "antd";
import {
  MessageOutlined,
  AccountBookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./style.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-top">
        <Button className="btn-avatar">
          <Avatar size="large">{"KV"}</Avatar>
        </Button>
        <Button
          className="btn-menu"
          icon={
            <MessageOutlined style={{ fontSize: "180%", color: "#ffffff" }} />
          }
        />
        <Button
          className="btn-menu"
          icon={
            <AccountBookOutlined
              style={{ fontSize: "180%", color: "#ffffff" }}
            />
          }
        />
      </div>
      <div className="menu-bottom">
        <Button
          className="btn-menu"
          icon={
            <SettingOutlined style={{ fontSize: "180%", color: "#ffffff" }} />
          }
        />
      </div>
    </div>
  );
}
