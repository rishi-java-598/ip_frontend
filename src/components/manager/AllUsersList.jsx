import React from "react";
import styles from "../../styles/manager/AllUsersList.module.css";

export default function AllUsersList() {
  const users = [
    { id: 1, name: "John Doe", role: "member" },
    { id: 2, name: "Jane Smith", role: "manager" }
  ];

  return (
    <div className={styles.container}>
      <h2>📋 All Users</h2>
      <ul className={styles.list}>
        {users.map(user => (
          <li key={user.id} className={styles.listItem}>
            {user.name} - <strong>{user.role}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
