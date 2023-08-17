import React from "react";
import { Button, Tooltip, Popconfirm } from "antd";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const AppEditButton = ({ editTooltiptitle, data, onEditClick }) => {
  const navigate = useNavigate();
  return (
    <Tooltip title={editTooltiptitle ? editTooltiptitle : "Edit"}>
      <Button
        type="text"
        onClick={onEditClick ? onEditClick : () => navigate(`create/${data}`)}
        icon={<EditOutlined style={{ color: "#0096FF" }} />}
      />
    </Tooltip>
  );
};
export const AppViewButton = ({ detailsTooltiptitle, data }) => {
  const navigate = useNavigate();
  return (
    <Tooltip title={detailsTooltiptitle ? detailsTooltiptitle : "Details"}>
      <Button
        type="text"
        onClick={() => navigate(`${data}`)}
        icon={<EyeOutlined style={{ color: "#00FFFF" }} />}
      />
    </Tooltip>
  );
};

export const AppDeleteButton = ({ deleteTooltiptitle, data, onDelete }) => {
  return (
    <Popconfirm title="Are you sure you want to delete" onConfirm={onDelete}>
      <Tooltip title={deleteTooltiptitle ? deleteTooltiptitle : "Delete"}>
        <Button
          type="text"
          icon={<DeleteOutlined style={{ color: "#FF0000" }} />}
        />
      </Tooltip>
    </Popconfirm>
  );
};
