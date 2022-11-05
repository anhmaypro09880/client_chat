import React, { useContext } from "react";
import { Avatar, Button, Image, Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import bg_user_default from "../../assets/images/bg_user_default.jfif";
import { EditOutlined } from "@ant-design/icons";
import "./style.css";

export default function InfoUserModal() {
  const { setIsUpdateInfoUserModalOpen } = React.useContext(AppContext);
  const { isInfoUserModalOpen, setIsInfoUserModalOpen } =
    useContext(AppContext);

  const handleUpdateInfoModal = () => {
    setIsUpdateInfoUserModalOpen(true);
    setIsInfoUserModalOpen(false);
  };

  const handleCancel = () => {
    setIsInfoUserModalOpen(false);
  };

  const user = {
    displayName: "Kha Vỹ",
    photoURL: "",
    phoneNumber: "0986504217",
    gender: "Nam",
    birthday: "30 tháng 4, 2001",
  };

  return (
    <div>
      <Modal
        title="Thông tin tài khoản"
        open={isInfoUserModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="md-info-user-header">
          <Image
            className="md-info-user-img"
            src={user.photoURL ? user.photoURL : bg_user_default}
          />
          <Avatar className="md-info-user-avt" size={70} src={user.photoURL}>
            {user.photoURL ? "" : user.displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
          <span>{user.displayName}</span>
        </div>
        <div className="md-info-user-body">
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            Thông tin cá nhân
          </span>
          <div className="md-info-user-body-bd">
            <div className="md-info-user-body-bd-1">
              <span>Điện thoại</span>
              <span>Giới tính</span>
              <span>Ngày sinh</span>
            </div>
            <div className="md-info-user-body-bd-2">
              <span>{user.phoneNumber}</span>
              <span>{user.gender}</span>
              <span>{user.birthday}</span>
            </div>
          </div>

          <Button onClick={handleUpdateInfoModal}>
            <EditOutlined />
            Cập nhật thông tin
          </Button>
        </div>
      </Modal>
    </div>
  );
}
