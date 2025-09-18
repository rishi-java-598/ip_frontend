import React, { useEffect, useMemo, useState } from 'react';
import styles from './style.module.css';
import { api } from './api';

// Simple util to format date as yyyy-mm-dd
const toISODate = (d = new Date()) => d.toISOString().slice(0,10);

const MarkAttendance = () => {
  const today = toISODate(new Date());
  const [allUsers, setAllUsers] = useState([]);
  const [leftMarked, setLeftMarked] = useState([]); // already marked for today in UI
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(()=>{
    loadUsers();
    loadTodaySummary();
  },[]);

  const loadUsers = async ()=>{
    setLoading(true);
    try{
      const res = await api.getUsers('?role=member&limit=500');
      setAllUsers(res.users || res.data || []);
    }catch(err){
      console.error(err);
      setAllUsers([]);
    }finally{ setLoading(false); }
  };

  const loadTodaySummary = async ()=>{
    try{
      const res = await api.getAttendanceSummary(today);
      // transform presentMembers to leftMarked
      const arr = [];
      Object.keys(res.slotSummary || {}).forEach(slot => {
        (res.slotSummary[slot] || []).forEach(m => {
          arr.push({ memberId: m.memberId || null, memberName: m.name || m.memberName, membershipType: m.membershipType, uniqueIdCard: m.uniqueIdCard, slot: Number(slot) });
        });
      });
      setLeftMarked(arr);
    }catch(err){
      // likely 404 if no attendance exists yet
      setLeftMarked([]);
    }
  };

  // right column users = members not present in leftMarked
  const unmarkedUsers = useMemo(()=>{
    const markedIds = new Set(leftMarked.map(m => String(m.memberId)||m.uniqueIdCard));
    return allUsers.filter(u => !markedIds.has(String(u._id)) && (u.role==='member'))
      .filter(u => u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 120);
  }, [allUsers, leftMarked, query]);

  const handleMarkPresent = (user)=>{
    // prompt slot selection
    const slotStr = prompt('Enter slot number (1-9) for ' + user.name, '1');
    const slot = Number(slotStr);
    if (!slot || slot < 1 || slot > 9) return alert('Invalid slot');
    const newItem = { memberId: user._id, memberName: user.name, membershipType: user.membership?.type || user.membershipType || '', uniqueIdCard: user.uniqueIdCard||'', slot };
    setLeftMarked(prev => [...prev, newItem]);
  };

  const handleRemoveLeft = (index)=>{
    setLeftMarked(prev => prev.filter((_,i)=>i!==index));
  };

  const handleSave = async ()=>{
    if (leftMarked.length===0) return alert('No members marked');
    // group by slot and prepare members array according to backend expectation
    const members = leftMarked.map(m => ({ memberId: m.memberId, memberName: m.memberName, membershipType: m.membershipType, uniqueIdCard: m.uniqueIdCard, slot: m.slot }));
    const body = { date: today, slot: 0, members }; // slot top-level isn't needed per-member, but backend expects slot param; we set 0 as placeholder
    setSaving(true);
    try{
      const res = await api.markAttendance(body);
      alert('Saved successfully');
      // reload
      loadTodaySummary();
      loadUsers();
    }catch(err){
      console.error(err);
      alert(err?.data?.message || 'Failed to save');
    }finally{ setSaving(false); }
  };

  return (
    <div className={styles.wrap}>
      <h1>Mark Today's Attendance</h1>
      <div className={styles.cols}>
        <section className={styles.left}>
          <h3>Marked Members ({leftMarked.length})</h3>
          <div className={styles.cards}>
            {leftMarked.map((m, idx)=> (
              <div key={idx} className={styles.card}>
                <div>
                  <strong>{m.memberName}</strong>
                  <div className={styles.muted}>{m.membershipType}</div>
                  <div className={styles.slot}>Slot: {m.slot}</div>
                </div>
                <div>
                  <button className={styles.remove} onClick={()=>handleRemoveLeft(idx)}>Remove</button>
                </div>
              </div>
            ))}
            {leftMarked.length===0 && <div className={styles.empty}>No members marked for today.</div>}
          </div>
          <div className={styles.saveRow}>
            <button onClick={handleSave} disabled={saving}>{saving? 'Saving...' : 'Save Today Attendance'}</button>
          </div>
        </section>

        <aside className={styles.right}>
          <h3>Search Members</h3>
          <input placeholder="Search by name or email" value={query} onChange={e=>setQuery(e.target.value)} />
          <div className={styles.resultList}>
            {loading && <div>Loading users...</div>}
            {!loading && unmarkedUsers.length===0 && <div className={styles.empty}>No users found</div>}
            {unmarkedUsers.map(u => (
              <div className={styles.resultCard} key={u._id}>
                <div>
                  <strong>{u.name}</strong>
                  <div className={styles.muted}>{u.email}</div>
                  <div className={styles.muted}>Membership: {u.membership?.type || u.membershipType || '—'}</div>
                </div>
                <div>
                  <button onClick={()=>handleMarkPresent(u)}>Mark Present</button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MarkAttendance;
