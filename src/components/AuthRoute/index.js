import React,{Suspense} from "react";
import { useAppContext } from "../AppContexts/AppContext";
import AppLayout from "../common/AppLayout";
import SignIn from "../../pages/auth";
import AppLoader from "../AppLoader";
import AppErrorBoundary from "../common/AppErrorBoundary";

function AuthRoute({ children }) {
  const {token, loading, isAuthenticated} = useAppContext()
  return (
    <>
      {isAuthenticated ? 
      <AppLayout>
          <Suspense fallback={<AppLoader loading={loading}/>}>
            <AppErrorBoundary>
              {children}
            </AppErrorBoundary>
          </Suspense>
        </AppLayout> : <SignIn />
      }
    </>

  );
}

export default React.memo(AuthRoute)