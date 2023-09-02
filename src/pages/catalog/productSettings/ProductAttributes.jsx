import React, { useEffect, useState } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../../components/common/AppListViewScreen/AppListButtons";
import { Space, message } from "antd";
import AppListViewScreen from "../../../components/common/AppListViewScreen";
import ApiServices from "../../../services/ApiService";
import AddProductAttribute from "./components/AddProductAttribute";
import AppContent from "../../../components/common/AppLayout/AppContent";
import ProductAttributeValues from "./components/ProductAttributeValues";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

export default function ProductAttributes() {
  const [productAttributelist, setProductAttributelist] = useState(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [setId, setSetId] = useState(null);
  const [singleAttributes, setsingleAttributes] = useState(null);
  const [attributeValues, setAttributeValues] = useState([]);
  useEffect(() => {
    ApiServices.list("ProductAttribute", setProductAttributelist);
  }, []);
  const [page, setPage] = useState(0);
  const onChange = (page) => {
    setPage(page);
  };
  const onEdit = async (data) => {
    await ApiServices.get(data, "ProductAttribute")
      .then((res) => {
        if (res.status === 200) {
          setsingleAttributes(res.data);
          setAttributeValues(res.data.productAttributeValue);
          setOpenPopUp(true);
          setSetId(data);
        }
      })
      .catch((err) =>
        message.error("unable to get Data error", err.response.data)
      );
  };
  console.log("singleAttributes", singleAttributes);
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
          <AppEditButton
            editTooltiptitle="Edit Attribute"
            data={data}
            onEditClick={() => onEdit(data)}
          />
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
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <DownOutlined onClick={(e) => onExpand(record, e)} />
            ) : (
              <RightOutlined onClick={(e) => onExpand(record, e)} />
            ),
        }}
      />
      <AddProductAttribute
        setId={setId}
        singleAttributes={singleAttributes}
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        attributeValues={attributeValues}
        setAttributeValues={setAttributeValues}
      />
    </AppContent>
  );
}
