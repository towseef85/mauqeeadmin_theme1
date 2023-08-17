import React from "react";
import {
  useAppContext,
  useAppActionsContext,
} from "../../../../AppContexts/AppContext";
import { Dropdown, Space, Avatar } from "antd";
import {
  LoginOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function AppUserInfo() {
  const { userData } = useAppContext();
  const { logout } = useAppActionsContext();

  const items = [
    {
      icon: <ProfileOutlined />,
      label: "Profile",
    },
    {
      icon: <LoginOutlined />,
      danger: true,
      label: <span onClick={logout}>Logout</span>,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomCenter"
      arrow={{ pointAtCenter: true }}
      overlayStyle={{ zIndex: 1052 }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar icon={<UserOutlined />} />
          {userData?.userName}
        </Space>
      </a>
    </Dropdown>
  );
}
