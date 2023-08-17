import React from "react";
import { useAppContext } from "../AppContexts/AppContext";
import AppLayout from "../common/AppLayout";
import SignIn from "../../pages/auth";
import { Spin } from "antd";
import AppLoader from "../AppLoader";

function AuthRoute({ children }) {
  const {token, loading} = useAppContext()
  return (
    <React.Suspense fallback={<AppLoader loading={loading}/>}>
      {token ? 
      <AppLayout>{children}</AppLayout> : <SignIn />
      }
      </React.Suspense>
  );
}

export default React.memo(AuthRoute)
