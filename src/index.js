import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from "./Utilities/i18n";
import { BrowserRouter } from "react-router-dom";
import LayoutContextProvider from "./components/AppContexts/LayoutContextProvider";
import AppLayout from "./components/common/AppLayout";
import AppRoutes from "./pages"
import AppContextProvider from "./components/AppContexts/AppContext";
import './assets/vendors/index.css';
import AuthRoute from "./components/AuthRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LayoutContextProvider>
      <BrowserRouter>
      <AppContextProvider>
        <AuthRoute>
        <AppRoutes/>
        </AuthRoute>
      </AppContextProvider>
      </BrowserRouter>
    </LayoutContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
