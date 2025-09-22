// import React, { useEffect, useState } from 'react';
// import styles from './style.module.css';
// import { api } from './api';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(()=>{ load(); }, []);
//   const load = async ()=>{
//     setLoading(true);
//     try{
//       const res = await api.getUsers('?role=member&limit=200');
//       setUsers(res.users || res.data || []);
//     }catch(err){ console.error(err); }
//     setLoading(false);
//   };

//   const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

//   return (
//     <div className={styles.wrap}>
//       <h1>All Members</h1>
//       <div className={styles.controls}>
//         <input placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)} />
//       </div>
//       <div className={styles.list}>
//         {loading && <div>Loading...</div>}
//         {!loading && filtered.map(u => (
//           <div key={u._id} className={styles.userCard}>
//             <div>
//               <strong>{u.name}</strong>
//               <div className={styles.muted}>{u.email}</div>
//               <div className={styles.muted}>Membership: {u.membership?.type || u.membershipType || '—'}</div>
//             </div>
//             <div>
//               <a href={`#user-${u._id}`} onClick={(e)=>{ e.preventDefault(); alert('Open user attendance page — will implement navigation'); }}>View Attendance</a>
//             </div>
//           </div>
//         ))}
//         {!loading && filtered.length===0 && <div className={styles.empty}>No members</div>}
//       </div>
//     </div>
//   );
// };

// export default UserList;
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { api } from './api';
import UserAttendanceDetail from './UAdetails'; // ✅ import modal

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // ✅ track which user to view

  useEffect(() => { load(); }, []);
  
  const load = async () => {
    setLoading(true);
    try {
      const res = await api.getUsers('?role=member&limit=200');
      setUsers(res.users || res.data || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const filtered = users.filter(
    u => u.name.toLowerCase().includes(search.toLowerCase()) || 
         u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.wrap}>
      <h1 style={{marginBottom:"10px"}}> All Members</h1>
      <div className={styles.controls}>
        <input
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.list}>
        {loading && <div>Loading...</div>}

        {!loading && filtered.map(u => (
          <div key={u._id} className={styles.userCard}>
            <div>
              <strong>{u.name}</strong>
              <div className={styles.muted}>{u.email}</div>
              <div className={styles.muted}>
                Membership: {u.membership?.type || u.membershipType || '—'}
              </div>
            </div>
            <div>
              {/* ✅ open modal on click */}
              <button
                className={styles.viewUABTN}                
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedUser(u._id);
                }}
              >
                view
              </button>
              {/* <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedUser(u._id);
                }}
              >
                View Attendance
              </Link> */}
            </div>
          </div>
        ))}

        {!loading && filtered.length === 0 && (
          <div className={styles.empty}>No members</div>
        )}
      </div>

      {/* ✅ Render modal only when a user is selected */}
      {selectedUser && (
        <UserAttendanceDetail
          userId={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default UserList;
