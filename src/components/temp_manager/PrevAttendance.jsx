import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { api } from './api';

const PreviousAttendance = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(()=>{ load(); }, [page]);
  const load = async ()=>{
    setLoading(true);
    try{
      const res = await api.getPreviousAttendance(`?page=${page}&limit=20`);
      setRecords(res.data || res.attendanceData || res);
    }catch(err){ console.error(err); }
    setLoading(false);
  };

  return (
    <div className={styles.wrap}>
      <h1>Previous Attendance</h1>
      {loading && <div>Loading...</div>}
      {!loading && records.length===0 && <div>No records</div>}
      <div className={styles.list}>
        {records.map((r, idx)=> (
          <div key={idx} className={styles.row}>
            <div><strong>{new Date(r.date).toISOString().slice(0,10)}</strong></div>
            <div>Present: { (r.presentMembers||[]).length }</div>
            <div>Marked by: {r.markedBy? r.markedBy.name : '—'}</div>
            <div><a href="#" onClick={(e)=>{ e.preventDefault(); alert('Open detail view — TODO'); }}>View</a></div>
          </div>
        ))}
      </div>
      <div className={styles.pager}>
        <button onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</button>
        <span>Page {page}</span>
        <button onClick={()=>setPage(p=>p+1)}>Next</button>
      </div>
    </div>
  );
};

export default PreviousAttendance;