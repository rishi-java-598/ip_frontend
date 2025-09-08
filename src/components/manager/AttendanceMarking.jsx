import React, { useState } from "react";
import styles from "../../styles/manager/AttendanceMarking.module.css";

export default function AttendanceMarking() {
  const [marked, setMarked] = useState(false);

  return (
    <div className={styles.container}>
      <h2>📝 Attendance Marking</h2>
      <button
        className={styles.markBtn}
        onClick={() => setMarked(true)}
        disabled={marked}
      >
        {marked ? "Attendance Marked" : "Mark Attendance"}
      </button>
    </div>
  );
}
