
import { Col, Row } from "antd";
import Menu from "../Menu";
import "./style.css";
import Navbar from "../Navbar";
import React, { useState ,useEffect} from "react";

export default function Sidebar({contacts,changeChat}) {
  
  return (
    <div className="sidebar">
      <Row>
        
        <Col span={4}>
          <Menu />
        </Col>
        <Col span={20}>
          <Navbar contacts={contacts} changeChat={changeChat} />
        </Col>
      </Row>
    </div>
  );
}
