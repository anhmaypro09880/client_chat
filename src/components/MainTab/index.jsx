import React from "react";
import { Avatar, Button } from "antd";
import {
  MessageOutlined,
  AccountBookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./style.css";

import { AppContext } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function MainTab() {
  const { setIsInfoUserModalOpen,user } = React.useContext(AppContext);
  
  const navigate = useNavigate();

  const { isActive, setIsActive, ref } = useOutsideClick(false);

  const handleOpenInfoUser = () => {
    setIsInfoUserModalOpen(true);
    setIsActive(!isActive);
  };

  const handleOpenMenuUser = () => {
    setIsActive(!isActive);
  };

  // const handleOpenMenuSetting = () => {
  //   setIsActive(!isActive);
  // };

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login");
  };

  // const user = {
  //   displayName: "Kha Vỹ",
  //   photoURL: "",
  // };

  return (
    <div className="main-tab">
      <div className="main-tab-top">
        <Button className="btn-avatar" onClick={handleOpenMenuUser}>
          {user===undefined ? (<div></div>):(<div>
            <Avatar size="large" src={user.avatarImage}>
            {user.avatarImage ? "" : user.username?.charAt(0)?.toUpperCase()}
          </Avatar>
          </div>)}
        </Button>
        <nav ref={ref} className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul>
          {user===undefined ? (<div></div>):(<div>
            <li className="menu-header">
              <span>{user.username}</span>
            </li>
          </div>)}
            
            <li className="menu-body">
              <Button onClick={handleOpenInfoUser} type="text">
                Hồ sơ của bạn
              </Button>
            </li>
            <li className="menu-footer">
              <Button onClick={handleLogout} type="text">
                Đăng xuất
              </Button>
            </li>
          </ul>
        </nav>

        <Button
          className="btn-menu"
          onClick={handleOpenMenuUser}
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
      <div className="main-tab-bottom">
        <Button
          className="btn-menu"
          // onClick={handleOpenMenuSetting}
          icon={
            <SettingOutlined style={{ fontSize: "180%", color: "#ffffff" }} />
          }
        />
        {/* <nav
          ref={dropdownRef}
          className={`menu-setting ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li className="menu-body">
              <Button onClick={handleOpenInfoUser} type="text">
                Cài đặt
              </Button>
            </li>
            <li className="menu-footer">
              <Button onClick={handleLogout} type="text">
                Đăng xuất
              </Button>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}
