import { RouteObject } from "react-router-dom";
import Layout from "./Layout/Layout";
import Datasets from "../pages/Datasets";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Datasets />,
      },
      {
        path: "workflows",
        element: <div>Workflows</div>,
      },
      {
        path: "credit-usage",
        element: <div>Credit Usage</div>,
      },
    ],
  },
];
