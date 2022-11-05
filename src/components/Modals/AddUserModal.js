import React, { useContext } from "react";
import { List, Modal, Typography } from "antd";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AppContext } from "../../context/AppProvider";

export default function AddUserModal() {
  const { isAddUserModalOpen, setIsAddUserModalOpen } = useContext(AppContext);

  const handleOk = () => {
    setIsAddUserModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddUserModalOpen(false);
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
        </form>
      </Modal>
    </div>
  );
}
