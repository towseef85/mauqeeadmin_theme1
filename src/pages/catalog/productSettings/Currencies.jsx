import React, { useState } from "react";
import AppContent from "../../../components/common/AppLayout/AppContent";
import AppListViewScreen from "../../../components/common/AppListViewScreen";


export default function Currencies() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [page, setPage] = useState(0);
  const onChange = (page) => {
    setPage(page);
  };
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
  ];
  return (
    <AppContent title="Currencies">
    <AppListViewScreen
      btntitle="Add Currency"
      onClick={() => setOpenPopUp(true)}
      columns={columns}
      data={[]}
      page={page}
      onChange={onChange}
      hasbackButton={true}
    />
    </AppContent>
  );
}
