// components/user/AttendanceHistory.jsx
import React from "react";
import styles from "../../styles/user/AttendanceHistory.module.css";

const AttendanceHistory = () => {
  const records = [
    { date: "2025-09-01", slot: "Morning" },
    { date: "2025-09-02", slot: "Evening" },
  ];

  return (
    <div className={styles.history}>
      <h2>Attendance History</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Slot</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, idx) => (
            <tr key={idx}>
              <td>{rec.date}</td>
              <td>{rec.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceHistory;
