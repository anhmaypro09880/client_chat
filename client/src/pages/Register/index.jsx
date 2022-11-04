import React, { useState } from "react";
import { Button, Col, Input, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import "./style.css";
import AuthOtp from "../AuthOtp";

export default function Register() {
  const [checkOtp, setCheckOtp] = useState(true);

  const handleRegister = () => {
    setCheckOtp(!checkOtp);
  };

  return (
    <div className="wrapper-register">
      <Row>
        <Col className="register-header" span={24}>
          <span className="register-header-logo">Yalo</span>
          <span className="register-header-title">
            Đăng ký tài khoản Yalo để kết nối với bạn bè nhé
          </span>
        </Col>
        <Col className="register-body" span={24}>
          <form
            className="register-form"
            style={{ display: checkOtp ? "flex" : "none" }}
          >
            <div className="register-form-header">
              <span>NHẬP THÔNG TIN TÀI KHOẢN</span>
            </div>
            <div className="register-input">
              <Input
                size="large"
                bordered={false}
                placeholder="Họ và tên"
                prefix={<UserOutlined />}
              />
            </div>
            <div className="register-input">
              <Input.Password
                size="large"
                bordered={false}
                placeholder="Mật khẩu"
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
            <Button className="register-btn-register" onClick={handleRegister}>
              Đăng ký tài khoản
            </Button>
          </form>
          <div style={{ display: !checkOtp ? "block" : "none" }}>
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
