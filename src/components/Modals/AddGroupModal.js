import React, { useContext } from "react";
import { List, Modal, Typography, Input } from "antd";
import { AppContext } from "../../context/AppProvider";
import AvatarUploader from "react-avatar-uploader";
import "./style.css";

export default function AddGroupModal() {
  const { isAddGroupModalOpen, setIsAddGroupModalOpen } =
    useContext(AppContext);

  const handleUpdate = () => {
    setIsAddGroupModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddGroupModalOpen(false);
  };

  const data = [
    "Data test",
    "Data test",
    "Data test",
    "Data test",
    "Data test",
    "Data test",
    "Data test",
    "Data test",
    "Data test",
    "Data test",
  ];

  return (
    <div>
      <Modal
        title="Tạo nhóm"
        open={isAddGroupModalOpen}
        onCancel={handleCancel}
        onOk={handleUpdate}
        cancelText="Hủy"
        okText="Tạo nhóm"
      >
        <form>
          <div className="md-add-group-header">
            <div className="md-add-group-header-name">
              <AvatarUploader
                defaultImg="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                size={50}
                uploadURL="http://localhost:3000"
                fileType={"image"}
                style={{ width: "500px" }}
              />
              <Input
                className="md-add-group-header-name-input"
                placeholder="Nhập tên nhóm ..."
              />
            </div>
          </div>
          <div className="md-add-group-body">
            <span style={{ fontSize: "16px" }}>Thêm bạn vào nhóm</span>
            <Input placeholder="Nhập tên, số điện thoại, hoặc danh sách số điện thoại" />
            <List
              className="md-add-user-list"
              size="large"
              bordered
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
              )}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}
