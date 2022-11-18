import React from "react";
import { Layout } from "./components/Layout";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};
