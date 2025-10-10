


//part 3 code splitting added:

import { useState, useEffect, lazy, Suspense } from "react";
import styles from "./style.module.css";
import { api } from "./api";
import { FaArrowRight } from "react-icons/fa6";

// 🧩 Lazy load only when user opens a record
const AttendanceDetail = lazy(() => import("./AttendanceDetail"));

const PreviousAttendance = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    load();
  }, [page]);

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.getPreviousAttendance(`?page=${page}&limit=10`);
      setRecords(res.data || []);
      setTotalPages(res.totalPages || 1);
    } catch (err) {
      console.error(err);
      setRecords([]);
    }
    setLoading(false);
  };

  return (
    <div className={styles.wrap}>
      <h1 style={{ marginBottom: "10px" }}>Previous Attendance</h1>

      {loading && (
        <div
          style={{
            minHeight: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      )}

      {!loading && records.length === 0 && <div>No records</div>}

      <div className={styles.list}>
        {records.map((r, idx) => (
          <div key={idx} className={styles.row}>
            <div>
              <strong>{new Date(r.date).toISOString().slice(0, 10)}</strong>
            </div>
            <div>
              <button
                className={styles.viewUABTN}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedRecord(r);
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
        >
          Prev
        </button>
        <span>
          Page {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>

      {/* Lazy-loaded detail view */}
      {selectedRecord && (
        <Suspense
          fallback={
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                background: "rgba(0,0,0,0.05)",
                borderRadius: "8px",
              }}
            >
              Loading attendance details...
            </div>
          }
        >
          <AttendanceDetail
            record={selectedRecord}
            onClose={() => setSelectedRecord(null)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default PreviousAttendance;
