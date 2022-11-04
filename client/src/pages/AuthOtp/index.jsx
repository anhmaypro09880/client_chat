import React, { useState } from "react";
import { Button } from "antd";
import { MobileOutlined } from "@ant-design/icons";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

export default function AuthOtp() {
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setFlag(!flag);
  };

  const handleConfirmOtp = () => {
    setFlag(!flag);

    // Điều hướng đến home, register or re password
    // navigate("/");
    navigate("/register");
    // navigate("/repassword");
  };

  function handleInputOtp(OTP) {
    setOtp(OTP);
    console.log(otp);
  }

  return (
    <div>
      <div style={{ display: !flag ? "flex" : "none" }}>
        <form className="otp-form" onSubmit={(event) => handleSendOtp(event)}>
          <div className="register-form-header">
            <span>NHẬP SỐ ĐIỆN THOẠI</span>
          </div>
          <div className="login-phone-input otp-form-input">
            <MobileOutlined
              style={{
                fontSize: "17px",
                padding: "0 11px",
              }}
            />
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
          <Button className="register-btn-register" onClick={handleSendOtp}>
            Gửi mã OTP
          </Button>
        </form>
      </div>
      <div style={{ display: flag ? "flex" : "none" }}>
        <form className="otp-form" onSubmit={handleConfirmOtp}>
          <div className="register-form-header">
            <span>NHẬP MÃ OTP</span>
          </div>
          <div className="otp-input">
            <OtpInput
              value={otp}
              onChange={handleInputOtp}
              inputStyle="inputStyle"
              numInputs={6}
              separator={<span></span>}
            />
          </div>
          <Button className="register-btn-register" onClick={handleConfirmOtp}>
            Xác nhận
          </Button>
        </form>
      </div>
    </div>
  );
}
