import React from "react";
import styles from "../../styles/admin/MembershipControl.module.css";

export default function MembershipControl() {
  const members = [
    { id: 1, name: "John Doe", status: "active" },
    { id: 2, name: "Jane Smith", status: "inactive" }
  ];

  return (
    <div className={styles.container}>
      <h2>💳 Membership Control</h2>
      {members.map(m => (
        <div key={m.id} className={styles.card}>
          <span>{m.name} - {m.status}</span>
          <div>
            <button className={styles.activateBtn}>Activate</button>
            <button className={styles.deactivateBtn}>Deactivate</button>
            <button className={styles.extendBtn}>Extend</button>
          </div>
        </div>
      ))}
    </div>
  );
}
