import React from "react";
import { salesRoutes } from "./sales";
import { catalogRoutes } from "./catalog";
import { useRoutes } from "react-router-dom";


const Dashboard = React.lazy(() => import("./home"));

const CombineRoutes = [
  ...salesRoutes,
  ...catalogRoutes,
  { path: "", element: <Dashboard /> },
];

const route = CombineRoutes.map((x) => {
  return { path: x.path, element: x.element };
});

export default function AppRoutes() {
  return useRoutes(route);
}
