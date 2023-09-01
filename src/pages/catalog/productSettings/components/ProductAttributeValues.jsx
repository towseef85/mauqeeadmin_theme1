import { Table, Tag } from "antd";
import React from "react";

export default function ProductAttributeValues({ record }) {
  console.log("record", record);
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      render: (j, i, index) => <>{index + 1}</>,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "IsActive",
      dataIndex: "isActive",
      key: "isActive",
      render: (data) =>
        data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>,
    },
    {
      title: "Display Order",
      dataIndex: "displayOrder",
      key: "displayOrder",
    },
  ];
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={record}
      pagination={false}
      size="small"
    />
  );
}
