import React, { useState } from 'react';
import styles from './style.module.css';
import MarkAttendance from './MarkAttendance';
import UserList from './UserList';
import AttendanceSummary from './AttendanceSummary';
import PreviousAttendance from './PrevAttendance';
import DashNav from './DashNav';
import DashNav2 from './DashNav2';
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

        {/* <nav className={styles.uppernav}>
       
    <DashNav active={active} setActive={setActive}/>
    
      </nav> */}

         <nav className={styles.uppernav}>
        {/* <button className={active==='mark'?styles.active:''} onClick={()=>setActive('mark')} title="Mark Today's Attendance">Mark Attendance</button>
          <button className={active==='users'?styles.active:''} onClick={()=>setActive('users')} title='Get Users Attendance'>Get Attendance</button>
          <button className={active==='summary'?styles.active:''} onClick={()=>setActive('summary')} title='Attendance Summary By Date'>Attendance Summary</button>
          <button className={active==='previous'?styles.active:''} onClick={()=>setActive('previous')} title='Previous Attendance'>Previous Attendance</button>
     */}
    <DashNav2 active={active} setActive={setActive}/>
    
      </nav>
      
        {active === 'mark' && <MarkAttendance />}
        {active === 'users' && <UserList />}
        {active === 'summary' && <AttendanceSummary />}
        {active === 'previous' && <PreviousAttendance />}
      </main>
    </div>
  );
};

export default ManagerDashboard2;