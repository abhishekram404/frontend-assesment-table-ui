import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../shared/Layout/Layout";

export default function Home() {
  return (
    <Layout header={<div>Header</div>} sidebar={<Sidebar />}>
      <div>Home</div>
    </Layout>
  );
}
