// components/user/UserDashboard.jsx
import React from "react";
import styles from "../../styles/user/UserDashboard.module.css";
import StatsCard from "../shared/StatsCard";

const UserDashboard = () => {
  const stats = [
    { title: "Total Visits", value: 45 },
    { title: "Last Visit", value: "2025-09-07" },
    { title: "Membership Status", value: "Active" },
  ];

  return (
    <div className={styles.dashboard}>
      <h2>My Dashboard</h2>
      <div className={styles.statsGrid}>
        {stats.map((s, idx) => (
          <StatsCard key={idx} title={s.title} value={s.value} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
