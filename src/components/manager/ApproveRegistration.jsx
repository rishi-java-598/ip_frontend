import React from "react";
import styles from "../../styles/manager/ApproveRegistration.module.css";

export default function ApproveRegistration() {
  const pendingUsers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ];

  return (
    <div className={styles.container}>
      <h2>✅ Approve Registrations</h2>
      {pendingUsers.map(user => (
        <div key={user.id} className={styles.userCard}>
          <span>{user.name} ({user.email})</span>
          <button className={styles.approveBtn}>Approve</button>
        </div>
      ))}
    </div>
  );
}
