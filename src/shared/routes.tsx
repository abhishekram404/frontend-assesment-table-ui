import { RouteObject } from "react-router-dom";
import Datasets from "../pages/Datasets/Datasets";
import Layout from "./Layout/Layout";

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
