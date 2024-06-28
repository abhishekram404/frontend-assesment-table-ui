import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Layout from "../shared/Layout/Layout";

export default function Home() {
  return (
    <Layout header={<Navbar />} sidebar={<Sidebar />}>
      <div>Home</div>
    </Layout>
  );
}
