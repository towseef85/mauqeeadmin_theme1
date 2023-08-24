import React, { useEffect, useState } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../../components/common/AppListViewScreen/AppListButtons";
import { Space, Tag, Image } from "antd";
import { useNavigate } from "react-router-dom";
import AppListViewScreen from "../../../components/common/AppListViewScreen";
import ApiServices from "../../../services/ApiService";

export default function CategoryList() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    ApiServices.list("Category", setCategoryData);
  }, []);
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
          <AppEditButton editTooltiptitle="Edit Category" data={data} />
          <AppViewButton detailsTooltiptitle="Category Details" data={data} />
          <AppDeleteButton
            deleteTooltiptitle="Delete Category"
            data={data}
            onDelete={() => console.log(data)}
          />
        </Space>
      ),
    },
  ];
  return (
    <AppListViewScreen
      btntitle="Add Category"
      onClick={() => navigate("create")}
      columns={columns}
      data={categoryData}
      page={page}
      onChange={onChange}
    />
  );
}
