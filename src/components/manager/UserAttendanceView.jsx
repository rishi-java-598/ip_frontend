import React from "react";
import styles from "../../styles/manager/UserAttendanceView.module.css";

export default function UserAttendanceView() {
  const attendance = [
    { date: "2025-09-01", slot: "Morning" },
    { date: "2025-09-02", slot: "Evening" }
  ];

  return (
    <div className={styles.container}>
      <h2>👤 User Attendance View</h2>
      {attendance.map((rec, index) => (
        <div key={index} className={styles.record}>
          {rec.date} - {rec.slot}
        </div>
      ))}
    </div>
  );
}
