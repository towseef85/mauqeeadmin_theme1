import React from "react";
import { List, Button, Dropdown, Menu, Avatar } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import AppScrollbar from "../../../AppScrollbar";
import NotificationItem from "./NotificationItem";

const notification = [
  {
    id: "1000",
    name: "Aysha Julka",
    image: "/assets/images/avatar/A1.jpg",
    message: "commented on your wall picture.",
  },
  {
    id: "1001",
    name: "Ayra Rovishi",
    image: "/assets/images/avatar/A2.jpg",
    message: "added to their stories.",
  },
  {
    id: "1002",
    name: "Sapna Awasthi",
    image: "/assets/images/avatar/A3.jpg",
    message: "commented on your wall picture.",
  },
  {
    id: "1003",
    name: "Sami Rudri",
    image: "/assets/images/avatar/A4.jpg",
    message: "tagged you in a picture.",
  },
  {
    id: "1004",
    name: "Brian Lara",
    image: "/assets/images/avatar/A5.jpg",
    message: "marked himself safe during earth quake.",
  },
  {
    id: "1005",
    name: "Rickey Ponting",
    image: "/assets/images/avatar/A6.jpg",
    message: "commented on your wall picture.",
  },
  {
    id: "1007",
    name: "Smriti Mandhana",
    image: "/assets/images/avatar/A8.jpg",
    message: "changed her wall picture.",
  },
  {
    id: "1008",
    name: "Aysha Julka",
    image: "/assets/images/avatar/A9.jpg",
    message: "changed her wall picture.",
  },
];

export default function AppNotifications() {
  const menu = (
    <Menu className="notify-header-message">
      <Menu.Item className="header">Notifications</Menu.Item>
      <Menu.Item>
        <AppScrollbar className="notify-scroll-submenu">
          <List
            className="notify-list"
            dataSource={notification}
            renderItem={(item) => {
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
            }}
          />
        </AppScrollbar>
      </Menu.Item>
      <Menu.Item>
        <Button type="primary" className="notify-btn-all">
          View All
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      dropdownRender={(menu) => (
        <Menu className="notify-header-message">
          <Menu.Item className="header">
            Notifications ({notification.length})
          </Menu.Item>
          <Menu.Item>
            <AppScrollbar className="notify-scroll-submenu">
              <List
                className="notify-list"
                dataSource={notification}
                renderItem={(item) => {
                  return <NotificationItem key={item.id} item={item} />;
                }}
              />
            </AppScrollbar>
          </Menu.Item>
          <Menu.Item>
            <Button type="primary" className="notify-btn-all">
              View All
            </Button>
          </Menu.Item>
        </Menu>
      )}
      className="dropdown"
      trigger={["click"]}
    >
      <a className="notify-link" onClick={(e) => e.preventDefault()}>
        <span className="notify-icon">
          <IoIosNotificationsOutline />
        </span>
        <span className="notify-text">Notify</span>
      </a>
    </Dropdown>
  );
}
