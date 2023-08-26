import React, { useState, useEffect } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../../components/common/AppListViewScreen/AppListButtons";
import AppListViewScreen from "../../../components/common/AppListViewScreen";
import { Space, Tag } from "antd";
import AddTaxCategory from "./components/AddTaxCategory";
import AppContent from "../../../components/common/AppLayout/AppContent";
import ApiServices from "../../../services/ApiService";

export default function TaxCategory() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [taxList, setTaxList] = useState(null);
  const [page, setPage] = useState(0);
  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    ApiServices.list("TaxCategory", setTaxList);
  }, []);
  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "engName",
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
          <AppEditButton data={data} onEditClick={() => setOpenPopUp(true)} />
          <AppDeleteButton data={data} onDelete={() => console.log(data)} />
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
    />
     <AddTaxCategory openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
    </AppContent>
  )
}
