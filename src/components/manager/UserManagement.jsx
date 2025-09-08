import React from "react";
import styles from "../../styles/manager/UserManagement.module.css";

export default function UserManagement() {
  return (
    <div className={styles.container}>
      <h2>👥 User Management</h2>
      <button className={styles.btn}>Add New User</button>
      <button className={styles.btn}>Request Delete User</button>
    </div>
  );
}
