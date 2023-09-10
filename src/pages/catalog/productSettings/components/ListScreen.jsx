import React from "react";
import AppListViewScreen from "../../../../components/common/AppListViewScreen";
import AppContent from "../../../../components/common/AppLayout/AppContent";
export default function ListScreen({
  pageTitle,
  btntitle,
  onButtonClick,
  columns,
  data,
  hasbackButton = true,
  page,
  onChange,
  ...rest
}) {
  return (
    <AppContent title={pageTitle}>
      <AppListViewScreen
        btntitle={btntitle}
        onClick={onButtonClick}
        columns={columns}
        data={data}
        hasbackButton={hasbackButton}
        page={page}
        onChange={onChange}
        {...rest}
      />
    </AppContent>
  );
}
