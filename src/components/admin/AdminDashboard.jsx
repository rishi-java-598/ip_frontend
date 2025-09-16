import React from "react";
import styles from "../../styles/admin/AdminDashboard.module.css";
import AdminUserManagement from "./AdminUserManagement.jsx";

export default function AdminDashboard() {
  return (
    <div className={styles.dashboard}>
      <h2>📊 Admin Dashboard</h2>
      <p>Overview of gym performance and member stats.</p>
      <div className={styles.stats}>
        <div className={styles.card}>Total Users: 150</div>
        <div className={styles.card}>Active Memberships: 120</div>
        <div className={styles.card}>Pending Approvals: 5</div>
      </div>
      <AdminUserManagement/>
    </div>
  );
}
