import { lazy, Suspense } from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import useProducts from "../../hooks/useProducts";
import Topbar from "./components/Topbar";
import { Root } from "./Datasets.styled";
import { columns } from "./Datasets.utils";
const Table = lazy(() => import("../../components/Table/Table"));

export default function Datasets() {
  const { products, isFetching } = useProducts();

  if (isFetching) return <LoadingScreen />;

  return (
    <Root>
      <Topbar />
      <Suspense fallback={<LoadingScreen />}>
        <Table columns={columns} items={products} />
      </Suspense>
    </Root>
  );
}
