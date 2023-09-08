import React, { useState, useEffect } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../../components/common/AppListViewScreen/AppListButtons";
import AppListViewScreen from "../../../components/common/AppListViewScreen";
import { Space, Tag, message } from "antd";
import AddTaxCategory from "./components/AddTaxCategory";
import AppContent from "../../../components/common/AppLayout/AppContent";
import ApiServices from "../../../services/ApiService";
import { useFetch } from "../../../hooks/useFetch";
export default function TaxCategory() {
  const [openPopUp, setOpenPopUp] = useState(false);
  // const [taxList, setTaxList] = useState(null);
  const [setId, setSetId] = useState(null);
  const [singleTaxCategory, SetSingleTaxCategory] = useState(null);
  const [page, setPage] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const onChange = (page) => {
    setPage(page);
  };

  const { response: taxList } = useFetch("TaxCategory");
  // useEffect(() => {
  //   getList();
  // }, []);
  const getList = async () => {
    await ApiServices.list("TaxCategory");
  };
  const onEdit = async (data) => {
    await ApiServices.get(data, "TaxCategory")
      .then((res) => {
        if (res.status === 200) {
          SetSingleTaxCategory(res.data);
          setOpenPopUp(true);
          setSetId(data);
        }
      })
      .catch((err) =>
        message.error("unable to get Data error", err.response.data)
      );
  };
  const onDelete = async (data) => {
    await ApiServices.delete(`TaxCategory/${data}`, data)
      .then((res) => {
        if (res.status === 200) {
          getList();
          message.success("Tax category deleted successfully");
        }
      })
      .catch((err) => {
        message.error("Unable to delete Tax Category");
      });
  };

  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "engName",
    },
    {
      title: "Tax Value",
      dataIndex: "value",
      key: "value",
      render: (data) => `${data}%`,
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (data) =>
        data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>,
    },

    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (data) => (
        <Space>
          <AppEditButton data={data} onEditClick={() => onEdit(data)} />
          <AppDeleteButton data={data} onDelete={() => onDelete(data)} />
        </Space>
      ),
    },
  ];
  return (
    <AppContent title="Tax Category">
      <AppListViewScreen
        btntitle="Add Tax Category"
        onClick={() => setOpenPopUp(true)}
        columns={columns}
        data={taxList}
        page={page}
        onChange={onChange}
        hasbackButton={true}
      />

      <AddTaxCategory
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        setId={setId}
        singleTaxCategory={singleTaxCategory}
        getList={getList}
        SetSingleTaxCategory={SetSingleTaxCategory}
        setSetId={setSetId}
        confirmLoading={confirmLoading}
        setConfirmLoading={setConfirmLoading}
      />
    </AppContent>
  );
}
