import React from "react";
import { Avatar, Typography } from "antd";
import { formatRelative } from "date-fns/esm";
import "./style.css";

function formatDate(seconds) {
  let formattedDate = "";

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}

export default function Message({
  text,
  displayName,
  createdAt,
  photoURL,
  mesUid,
}) {
  const user = {
    uid: "123",
  };



  return (
    <div className="message">
      <div className={`${user.uid === mesUid ? "m-msg" : "msg"}`}>
        <Avatar className="avatar" size="large" src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <div className="content">
          <Typography.Text className="message-author">
            {displayName}
          </Typography.Text>
          <br />
          <Typography.Text className="message-text">{text}</Typography.Text>
          <br />
          <Typography.Text className="message-date">
            {createdAt}
          </Typography.Text>
        </div>
      </div>
    </div>
  );
}
