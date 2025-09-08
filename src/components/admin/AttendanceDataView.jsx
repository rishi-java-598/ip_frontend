import React from "react";
import styles from "../../styles/admin/AttendanceDataView.module.css";

export default function AttendanceDataView() {
  const attendanceData = [
    { date: "2025-09-05", total: 45 },
    { date: "2025-09-06", total: 50 }
  ];

  return (
    <div className={styles.container}>
      <h2>📅 Attendance Data View</h2>
      <button className={styles.exportBtn}>Export Data</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
