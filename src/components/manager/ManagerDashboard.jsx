import React from "react";
import styles from "../../styles/manager/ManagerDashboard.module.css";
import ManagerUserManagement from "./ManagerUM";
import PendingUserApproval from "./pendingReqs";
import ManagerDashboard2 from "../temp_manager/MD";

export default function ManagerDashboard() {
  return (
    <div className={styles.dashboard}>
      <h2>📊 Manager Dashboard</h2>
      {/* <p>Quick overview of today's gym activities.</p> */}
      {/* <div className={styles.stats}>
        <div className={styles.card}>Pending Registrations: 3</div>
        <div className={styles.card}>Attendance Marked Today: ✅</div>
        <div className={styles.card}>Total Members: 120</div>
      </div> */}
      {/* um
      <ManagerUserManagement/>
      <PendingUserApproval/>
      um */}
      <ManagerDashboard2/>
    </div>
  );
}
