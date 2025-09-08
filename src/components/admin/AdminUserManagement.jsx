import React from "react";
import styles from "../../styles/admin/AdminUserManagement.module.css";

export default function AdminUserManagement() {
  const users = [
    { id: 1, name: "John Doe", role: "member" },
    { id: 2, name: "Jane Smith", role: "manager" }
  ];

  return (
    <div className={styles.container}>
      <h2>👥 Admin User Management</h2>
      <button className={styles.addBtn}>Add User</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>
                <button className={styles.deleteBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
