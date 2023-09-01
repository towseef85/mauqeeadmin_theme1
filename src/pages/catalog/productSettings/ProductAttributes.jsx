import React, { useEffect, useState } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../../components/common/AppListViewScreen/AppListButtons";
import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import AppListViewScreen from "../../../components/common/AppListViewScreen";
import ApiServices from "../../../services/ApiService";
import AddProductAttribute from "./components/AddProductAttribute";
import AppContent from "../../../components/common/AppLayout/AppContent";
import ProductAttributeValues from "./components/ProductAttributeValues";

export default function ProductAttributes() {
  const [productAttributelist, setProductAttributelist] = useState(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  useEffect(() => {
    ApiServices.list("ProductAttribute", setProductAttributelist);
  }, []);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const onChange = (page) => {
    setPage(page);
  };
  console.log("productAttributelist", productAttributelist);
  const columns = [
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
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (data) => (
        <Space>
          <AppEditButton editTooltiptitle="Edit Attribute" data={data} />
          <AppViewButton detailsTooltiptitle="Attribute Details" data={data} />
          <AppDeleteButton
            deleteTooltiptitle="Attribute"
            data={data}
            onDelete={() => console.log(data)}
          />
        </Space>
      ),
    },
  ];
  return (
    <AppContent title="Product Settings">
      <AppListViewScreen
        btntitle="Add Product Attribute"
        onClick={() => setOpenPopUp(true)}
        columns={columns}
        data={productAttributelist}
        page={page}
        onChange={onChange}
        expandable={{
          expandedRowRender: (record) => (
            <ProductAttributeValues record={record.productAttributeValue} />
          ),
        }}
      />
      <AddProductAttribute openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
    </AppContent>
  );
}
