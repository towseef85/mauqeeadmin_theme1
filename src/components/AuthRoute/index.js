import React,{Suspense} from "react";
import { useAppContext } from "../AppContexts/AppContext";
import AppLayout from "../common/AppLayout";
import SignIn from "../../pages/auth";
import { Spin } from "antd";
import AppLoader from "../AppLoader";

function AuthRoute({ children }) {
  const {token, loading} = useAppContext()
  return (
    <>
      {token ? 
      <AppLayout>
          <Suspense fallback={<AppLoader loading={loading}/>}>
          {children}
          </Suspense>
        </AppLayout> : <SignIn />
      }
    </>

  );
}

export default React.memo(AuthRoute)
