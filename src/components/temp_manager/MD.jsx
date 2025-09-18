import React, { useState } from 'react';
import styles from './style.module.css';
import MarkAttendance from './MarkAttendance';
import UserList from './UserList';
import AttendanceSummary from './AttendanceSummary';
import PreviousAttendance from './PrevAttendance';
const ManagerDashboard2 = () => {
  const [active, setActive] = useState('mark');

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>Manager</h2>
        <nav>
          <button className={active==='mark'?styles.active:''} onClick={()=>setActive('mark')}>Mark Today's Attendance</button>
          <button className={active==='users'?styles.active:''} onClick={()=>setActive('users')}>Get Users Attendance</button>
          <button className={active==='summary'?styles.active:''} onClick={()=>setActive('summary')}>Attendance Summary By Date</button>
          <button className={active==='previous'?styles.active:''} onClick={()=>setActive('previous')}>Previous Attendance</button>
        </nav>
      </aside>

      <main className={styles.main}>
        {active === 'mark' && <MarkAttendance />}
        {active === 'users' && <UserList />}
        {active === 'summary' && <AttendanceSummary />}
        {active === 'previous' && <PreviousAttendance />}
      </main>
    </div>
  );
};

export default ManagerDashboard2;