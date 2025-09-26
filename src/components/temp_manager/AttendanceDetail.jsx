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

//part2
// import React from "react";
// import styles from "./ad.module.css";

// const AttendanceDetail = ({ record, onClose }) => {
//   if (!record) return null;

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <button className={styles.closeBtn} onClick={onClose}>
//           ×
//         </button>

//         <h2>Attendance Detail</h2>

//         <div className={styles.section}>
//           <p><strong>Date:</strong> {new Date(record.date).toISOString().slice(0, 10)}</p>
//           <p><strong>Created At:</strong> {new Date(record.createdAt).toLocaleString()}</p>
//           <p><strong>Marked By:</strong> 
//             {record.markedBy?.name 
//               ? `${record.markedBy.name} (${record.markedBy.email || "—"})`
//               : record.markedBy || "—"}
//           </p>
//           <p><strong>Total Present:</strong> {(record.presentMembers || []).length}</p>
//         </div>

//         {/* Slot Counts */}
//         <div className={styles.section}>
//           <h3>Slot Counts</h3>
//           <div className={styles.slotGrid}>
//             {(record.slotCounts || []).map((count, idx) => (
//               <div key={idx} className={styles.slotCard}>
//                 <div className={styles.slotNum}>Slot {idx + 1}</div>
//                 <div className={styles.count}>{count} present</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Present Members */}
//         <div className={styles.section}>
//           <h3>Present Members</h3>
//           <div className={styles.memberList}>
//             {(record.presentMembers || []).map((m, idx) => (
//               <div key={idx} className={styles.memberRow}>
//                 <span className={styles.name}>{m.memberName}</span>
//                 <span className={styles.type}>{m.membershipType}</span>
//                 <span className={styles.slot}>Slot {m.slot}</span>
//                 <span className={styles.uid}>ID: {m.uniqueIdCard}</span>
//                 {m.markedBy && <span className={styles.markedBy}>Marked By: {m.markedBy}</span>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceDetail;
import React, { useState, useMemo } from "react";
import styles from "./ad.module.css";

const AttendanceDetail = ({ record, onClose }) => {
  const [search, setSearch] = useState("");
  const [slotFilter, setSlotFilter] = useState("all");

  if (!record) return null;

  // Filtered Members
  const filteredMembers = useMemo(() => {
    let members = record.presentMembers || [];

    // Apply slot filter
    if (slotFilter !== "all") {
      members = members.filter((m) => String(m.slot) === String(slotFilter));
    }

    // Apply search filter
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      members = members.filter(
        (m) =>
          m.memberName.toLowerCase().includes(q) ||
          (m.membershipType || "").toLowerCase().includes(q) ||
          (m.uniqueIdCard || "").toLowerCase().includes(q)
      );
    }

    return members;
  }, [record.presentMembers, search, slotFilter]);

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
          <h3 style={{marginBottom:"10px",marginRight:"10px",display:"inline-block"}}>Present Members</h3>

          {/* Controls */}
          <div style={{display:"inline-block",marginBottom:"10px"}}>
            <input

              type="text"
              placeholder="Search by name, membership, or ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.slotSearch}            />
            <select
                          // className={styles.slotSelect}
              style={{borderRadius:"6px",padding:"6px",marginLeft:"10px",border:" 1px solid #0000002e"}}
              value={slotFilter}
              onChange={(e) => setSlotFilter(e.target.value)}
            >
              <option  value="all">All Slots</option>
              {Array.from({ length: 9 }).map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Slot {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Members */}
          <div className={styles.memberList}>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((m, idx) => (
                <div key={idx} className={styles.memberRow}>
                  <span className={styles.name}>{m.memberName}</span>
                  <span className={styles.type}>{m.membershipType}</span>
                  <span className={styles.slot}>Slot {m.slot}</span>
                  <span className={styles.uid}>ID: {m.uniqueIdCard}</span>
                  {m.markedBy && (
                    <span className={styles.markedBy}>
                      Marked By: {m.markedBy}
                    </span>
                  )}
                </div>
              ))
            ) : (
              <div className={styles.empty}>No members found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetail;
