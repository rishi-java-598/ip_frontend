// src/pages/Dashboard.jsx
// import AdminDashboard from "../admin/AdminDashboard";
import AdminDashboard from "../admin/AdminDashboard";
import { useAuth } from "../context/Authcontext";
import ManagerDashboard from "../manager/ManagerDashboard";
// import ManagerDashboard from "../manager/ManagerDashboard";
// import AdminDashboard from "../dashboards/adminDashboard";
// import ManagerDashboard from "../dashboards/managerDashboard";
// import MemberDashboard from "../dashboards/memberDashboard";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null; // just in case

  switch (user.role) {
    case "admin":
      return <AdminDashboard />;
    case "manager":
      return <ManagerDashboard />;
    case "member":
      return <MemberDashboard />;
    default:
      return <h2>No dashboard available</h2>;
  }
}
