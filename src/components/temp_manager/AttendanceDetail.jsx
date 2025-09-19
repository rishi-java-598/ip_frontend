// import React from "react";
// import styles from "./ad.module.css";

// const AttendanceDetail = ({ record, onClose }) => {
//   if (!record) return null;

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <button className={styles.closeBtn} onClick={onClose}>×</button>
//         <h2>Attendance Detail</h2>
//         <p><strong>Date:</strong> {new Date(record.date).toISOString().slice(0, 10)}</p>
//         <p><strong>Marked by:</strong> {record.markedBy ? record.markedBy.name : "—"}</p>
//         <p><strong>Total Present:</strong> {(record.presentMembers || []).length}</p>

//         <h3>Present Members</h3>
//         <div className={styles.memberList}>
//           {(record.presentMembers || []).map((m, idx) => (
//             <div key={idx} className={styles.memberRow}>
//               <span>{m.memberName || m.name}</span>
//               <span>{m.membershipType || "—"}</span>
//               <span>Slot {m.slot || "—"}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceDetail;
import React from "react";
import styles from "./ad.module.css";

const AttendanceDetail = ({ record, onClose }) => {
  if (!record) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <h2>Attendance Detail</h2>

        <div className={styles.section}>
          <p><strong>Date:</strong> {new Date(record.date).toISOString().slice(0, 10)}</p>
          <p><strong>Created At:</strong> {new Date(record.createdAt).toLocaleString()}</p>
          <p><strong>Marked By:</strong> 
            {record.markedBy?.name 
              ? `${record.markedBy.name} (${record.markedBy.email || "—"})`
              : record.markedBy || "—"}
          </p>
          <p><strong>Total Present:</strong> {(record.presentMembers || []).length}</p>
        </div>

        {/* Slot Counts */}
        <div className={styles.section}>
          <h3>Slot Counts</h3>
          <div className={styles.slotGrid}>
            {(record.slotCounts || []).map((count, idx) => (
              <div key={idx} className={styles.slotCard}>
                <div className={styles.slotNum}>Slot {idx + 1}</div>
                <div className={styles.count}>{count} present</div>
              </div>
            ))}
          </div>
        </div>

        {/* Present Members */}
        <div className={styles.section}>
          <h3>Present Members</h3>
          <div className={styles.memberList}>
            {(record.presentMembers || []).map((m, idx) => (
              <div key={idx} className={styles.memberRow}>
                <span className={styles.name}>{m.memberName}</span>
                <span className={styles.type}>{m.membershipType}</span>
                <span className={styles.slot}>Slot {m.slot}</span>
                <span className={styles.uid}>ID: {m.uniqueIdCard}</span>
                {m.markedBy && <span className={styles.markedBy}>Marked By: {m.markedBy}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetail;
