import React, { useState } from "react";
import { Button, Col, Input, Row } from "antd";
import { LockOutlined } from "@ant-design/icons";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import "./style.css";
import AuthOtp from "../AuthOtp";

export default function RePassword() {
  // const [checkOtp, setCheckOtp] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleRePassword = () => {
    setFlag(!flag);
  };

  return (
    <div className="wrapper-register">
      <Row>
        <Col className="register-header" span={24}>
          <span className="register-header-logo">Yalo</span>
          <span className="register-header-title">
            Đăng nhập tài khoản Yalo để kết nối với ứng dụng Yalo Web
          </span>
        </Col>
        <Col className="register-body" span={24}>
          <div style={{ display: flag ? "block" : "none" }}>
            <div className="register-form">
              <div className="register-form-header">
                <span>ĐẶT MẬT KHẨU MỚI</span>
              </div>
              <div className="register-input">
                <Input.Password
                  size="large"
                  bordered={false}
                  placeholder="Nhập mật khẩu mới"
                  prefix={<LockOutlined />}
                />
              </div>
              <div className="register-input">
                <Input.Password
                  size="large"
                  bordered={false}
                  placeholder="Nhập lại mật khẩu"
                  prefix={<LockOutlined />}
                />
              </div>
              <Button
                className="register-btn-register"
                style={{ marginTop: "60px" }}
                onClick={handleRePassword}
              >
                Thay đổi mật khẩu
              </Button>
            </div>
          </div>
          <div style={{ display: !flag ? "block" : "none" }}>
            <AuthOtp />
          </div>
        </Col>
        <Col className="login-footer" span={24}>
          <span>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay!</Link>
          </span>
        </Col>
      </Row>
    </div>
  );
}
