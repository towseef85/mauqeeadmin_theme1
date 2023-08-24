import React, { useEffect, useState } from "react";
import { useAppActionsContext } from "../components/AppContexts/AppContext";
import httpApi from "../Utilities/api";
import { message } from "antd";

export default function usePost(props) {
  const {setLoading,setResetForm} = useAppActionsContext()

  const postData = async (url, values) => {
    setLoading(true);
    try {
      const res = await httpApi.post(url, values);
      message.success("Record Added Successfully")
    } catch (e) {
      message.error(`Unable to add error = ${e}`);
    }
    setLoading(false);
    setResetForm(true);
  };

  return {  postData };
}
