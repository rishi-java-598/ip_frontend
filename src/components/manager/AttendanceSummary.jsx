import React from "react";
import styles from "../../styles/manager/AttendanceSummary.module.css";

export default function AttendanceSummary() {
  const summary = [
    { date: "2025-09-05", total: 35 },
    { date: "2025-09-06", total: 40 }
  ];

  return (
    <div className={styles.container}>
      <h2>📅 Attendance Summary</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Attendance</th>
          </tr>
        </thead>
        <tbody>
          {summary.map((row, index) => (
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
