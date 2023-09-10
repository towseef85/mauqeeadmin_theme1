import React, { useState } from "react";
import ListScreen from "./components/ListScreen";

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
    <ListScreen
      pageTitle="Currencies"
      btntitle="Add Currency"
      columns={columns}
      data={[]}
      onButtonClick={() => setOpenPopUp(true)}
      page={page}
      onChange={onChange}
    />
  );
}
