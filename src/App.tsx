import "./styles/App.css";
import Layout from "./components/Layout";
import { MainRoutes } from "./routes";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Layout>
      <MainRoutes></MainRoutes>
      <Analytics />
    </Layout>
  );
}

export default App;
