import React, { useState } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../../components/common/AppListViewScreen/AppListButtons";
import { Space, Tag, Image } from "antd";
import { useNavigate } from "react-router-dom";
import AppListViewScreen from "../../../components/common/AppListViewScreen";

export default function BrandList({ brandData }) {
  console.log("brandData", brandData);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const onChange = (page) => {
    setPage(page);
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "imageData",
      key: "imageData",
      render: (data) => <Image src={data} width={80} />,
    },

    {
      title: "English Name",
      dataIndex: "engName",
      key: "engName",
    },

    {
      title: "Other Name",
      dataIndex: "otherName",
      key: "otherName",
    },
    {
      title: "Active",
      dataIndex: "published",
      key: "published",
      render: (data) =>
        data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>,
    },
    {
      title: "Show On Homepage",
      dataIndex: "showOnHomepage",
      key: "showOnHomepage",
      render: (data) =>
        data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>,
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (data) => (
        <Space>
          <AppEditButton editTooltiptitle="Edit Brand" data={data} />
          <AppViewButton detailsTooltiptitle="Brand Details" data={data} />
          <AppDeleteButton
            deleteTooltiptitle="Delete Brand"
            data={data}
            onDelete={() => console.log(data)}
          />
        </Space>
      ),
    },
  ];
  return (
    <AppListViewScreen
      btntitle="Add Brand"
      onClick={() => navigate("create")}
      columns={columns}
      data={brandData}
      page={page}
      onChange={onChange}
    />
  );
}
