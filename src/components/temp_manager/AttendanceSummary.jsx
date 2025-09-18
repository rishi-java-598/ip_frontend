import React, { useEffect, useMemo, useState } from 'react';
import styles from './style.module.css';
import { api } from './api';
import { subMonths, addDays, format } from 'date-fns';

const AttendanceSummary = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  // calendar range: from 3 months back up to tomorrow
  const start = useMemo(()=> subMonths(new Date(), 3), []);
  const end = useMemo(()=> addDays(new Date(), 1), []);
  const days = useMemo(()=> {
    const arr = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) arr.push(new Date(d));
    return arr;
  }, [start, end]);

  const handleClickDate = async (dt) => {
    const iso = dt.toISOString().slice(0,10);
    setSelectedDate(iso);
    setSummary(null);
    try{
      const res = await api.getAttendanceSummary(iso);
      setSummary(res);
      setError(null);
    }catch(err){
      setSummary(null);
      setError(err?.data?.message || 'No data');
    }
  };

  return (
    <div className={styles.wrap}>
      <h1>Attendance Summary by Date</h1>
      <p>Select a date within the last 3 months</p>
      <div className={styles.calendar}>
        {days.map((d,i)=> (
          <button key={i} className={styles.day} onClick={()=>handleClickDate(new Date(d))}>{format(new Date(d),'yyyy-MM-dd')}</button>
        ))}
      </div>

      <div className={styles.details}>
        {selectedDate && <h3>Selected: {selectedDate}</h3>}
        {error && <div className={styles.error}>{error}</div>}
        {summary && (
          <div>
            <div>Marked By: {summary.markedBy?.name || '—'}</div>
            <div>Total Registered Members: {summary.totalMembers}</div>
            <h4>Slot counts</h4>
            <div className={styles.slotGrid}>
              {(summary.totalPresentPerSlot || []).map((c, idx)=> (
                <div key={idx} className={styles.slotCard}>Slot {idx+1}<br/>{c} present</div>
              ))}
            </div>
            <h4>Slot details</h4>
            {Object.keys(summary.slotSummary || {}).map(s => (
              <div key={s} className={styles.slotList}>
                <h5>Slot {s}</h5>
                {(summary.slotSummary[s]||[]).map((m, i) => (
                  <div key={i} className={styles.memberRow}>{m.name} — {m.membershipType}</div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceSummary;
