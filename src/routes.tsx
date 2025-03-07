import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
const Datasets = lazy(() => import("./pages/Datasets/Datasets"));

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Datasets />
          </Suspense>
        ),
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
