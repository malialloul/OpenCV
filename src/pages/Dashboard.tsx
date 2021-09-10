import React from "react";
import DashboardBody from "../components/dashboard/DashboardBody";
import Layout from "../components/Layout";

const Dashboard = ({ ...props }) => {
  return <Layout body={<DashboardBody {...props} />} />;
};
export default Dashboard;
