import React from "react";
import { List, Avatar } from "antd";

export default function NotificationItem(props) {
  const { item } = props;
  return (
    <List.Item className="notify-listItem item-hover">
      <List.Item.Meta
        avatar={
          <Avatar
            className="notify-message-avatar"
            src={item.image}
            alt={item.name}
          />
        }
        title={item.name}
        description={item.message}
      />
    </List.Item>
  );
}
