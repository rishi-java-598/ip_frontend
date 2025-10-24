// import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
// import { AuthProvider, useAuth } from "./components/context/Authcontext";

// import Home from "./components/generic/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import ProtectedRoute from "./components/Protectedroute";

// // Manager Pages
// import DeleteUserRequests from "./components/manager/managerUM/DelReq";
// import ManagerUserManagement from "./components/manager/managerUM/ManagerUM";
// import PendingUserApproval from "./components/manager/managerUM/pendingReqs";
// import ManagerDashboard2 from "./components/manager/managerAM/MD";


// export default function App() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* ------------------ Manager Routes ------------------ */}
//           {user?.role === "manager" && (
//             <>
//               <Route
//                 path="/dashboard/am"
//                 element={
//                   <ProtectedRoute>
//                     <ManagerDashboard2 />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/dashboard/um"
//                 element={
//                   <ProtectedRoute>
//                     <ManagerUserManagement />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/dashboard/pua"
//                 element={
//                   <ProtectedRoute>
//                     <PendingUserApproval />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/dashboard/udr"
//                 element={
//                   <ProtectedRoute>
//                     <DeleteUserRequests />
//                   </ProtectedRoute>
//                 }
//               />
//             </>
//           )}

//           {/* ------------------ Admin Routes ------------------ */}
//           {user?.role === "admin" && (
//             <>
//               {/* Add admin dashboard routes here */}
//               <Route path="/dashboard/admin" element={<ProtectedRoute><div>Admin Dashboard</div></ProtectedRoute>} />
//             </>
//           )}

//           {/* ------------------ Member Routes ------------------ */}
//           {user?.role === "member" && (
//             <>
//               {/* Add member dashboard routes here */}
//               <Route path="/dashboard/member" element={<ProtectedRoute><div>Member Dashboard</div></ProtectedRoute>} />
//             </>
//           )}

//           {/* Fallback: redirect unknown paths */}
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }






// import { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./components/context/Authcontext";
// import ProtectedRoute from "./components/Protectedroute";
// // import UserDashboard from "./components/member/UserDashboard";

// // 🧩 Lazy-loaded public pages

// const Header = lazy(()=>import("./components/generic/Header"))
// const Home = lazy(() => import("./components/generic/Home"));
// const Login = lazy(() => import("./components/Login"));
// const Register = lazy(() => import("./components/Register"));

// // 🧩 Lazy-loaded manager subpages


// // admin pages

// const AdminDashboard = lazy(() =>
//   import("./components/admin/admin_M_AM/AD")
// );
// const AdminUserManagement = lazy(()=>{
//   return import("./components/admin/admin_M_UM/AdminUM")
// })

// const AdminDeleteUserRequests = lazy(()=>
//   import("./components/admin/admin_M_UM/DelReq")
// )
// const AdminPendingUserApproval = lazy(()=>
//   import("./components/admin/admin_M_UM/pendingReqs")
// )

// // Manager Pages (lazy)
// const DeleteUserRequests = lazy(() =>
//   import("./components/manager/managerUM/DelReq")
// );
// const ManagerDashboard2 = lazy(() =>
//   import("./components/manager/managerAM/MD")
// );
// const ManagerUserManagement = lazy(() =>
//   import("./components/manager/managerUM/ManagerUM")
// );
// const PendingUserApproval = lazy(() =>
//   import("./components/manager/managerUM/pendingReqs")
// );
// // member pages

// const MemberPI = lazy(() => import("./components/member/MemberPI"));

// export default function App() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <AuthProvider>
//       <Router>
//         <Suspense
//           fallback={
//             <div
//               style={{
//                 height: "100vh",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background: "#f7f7f7",
//               }}
//             >
//               <h2>Loading...</h2>
//             </div>
//           }
//         >
//           <Routes>
//             {/* ---------- Public Routes ---------- */}
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* ---------- Manager Routes ---------- */}
//             {user?.role === "manager" && (
//               <>
//                 <Route
//                   path="/dashboard/am"
//                   element={
//                     <ProtectedRoute>
//                       <ManagerDashboard2 />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/dashboard/um"
//                   element={
//                     <ProtectedRoute>
//                       <ManagerUserManagement />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/dashboard/pua"
//                   element={
//                     <ProtectedRoute>
//                       <PendingUserApproval />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/dashboard/udr"
//                   element={
//                     <ProtectedRoute>
//                       <DeleteUserRequests />
//                     </ProtectedRoute>
//                   }
//                 />
//               </>
//             )}

//             {/* ---------- Admin Routes ---------- */}
//             {user?.role === "admin" && (
//               // <Route
//               //   path="/dashboard/admin"
//               //   element={
//               //     <ProtectedRoute>
//               //       {/* <div style={{ padding: "20px" }}>
//               //         <h2>Admin Dashboard</h2>
//               //         <p>This is the admin control panel for managing the system.</p>
//               //       </div> */}
//               //     <></>
//               //     </ProtectedRoute>
//               //   }
//               // />
//               <>
//                 <Route
//                   path="/dashboard/am"
//                   element={
//                     <ProtectedRoute>
//                       <AdminDashboard />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/dashboard/um"
//                   element={
//                     <ProtectedRoute>
//                       <AdminUserManagement/>
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/dashboard/pua"
//                   element={
//                     <ProtectedRoute>
//                       <AdminPendingUserApproval />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/dashboard/udr"
//                   element={
//                     <ProtectedRoute>
//                       <AdminDeleteUserRequests />
//                     </ProtectedRoute>
//                   }
//                 />
//               </>
//             )}

//             {/* ---------- Member Routes ---------- */}
//             {user?.role === "member" && (<>
//               <Route
//                 path="/dashboard/member"
//                 element={
//                   <ProtectedRoute>
//                     <div style={{ padding: "20px" }}>
//                       <h2>Member Dashboard</h2>
//                         <p>Welcome to your member portal.</p>
//                         {/* <UserDashboard/> */}
//                     </div>
//                   </ProtectedRoute>
//                 }
//               />
//              <Route
//                   path="/dashboard/pi"
//                   element={
//                     <ProtectedRoute>
//                       <MemberPI />
//                     </ProtectedRoute>
//                   }
//                 />
              
//               </>

              
//             )}
             

//             {/* ---------- Fallback ---------- */}
//             <Route path="*" element={<Home />} />
//           </Routes>
//         </Suspense>
//       </Router>
//     </AuthProvider>
//   );
// }


import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/Authcontext";
import ProtectedRoute from "./components/Protectedroute";

// 🧩 Lazy-loaded components
const Header = lazy(() => import("./components/generic/Header"));
const Home = lazy(() => import("./components/generic/Home"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

// Admin pages
const AdminDashboard = lazy(() => import("./components/admin/admin_M_AM/AD"));
const AdminUserManagement = lazy(() =>
  import("./components/admin/admin_M_UM/AdminUM")
);
const AdminDeleteUserRequests = lazy(() =>
  import("./components/admin/admin_M_UM/DelReq")
);
const AdminPendingUserApproval = lazy(() =>
  import("./components/admin/admin_M_UM/pendingReqs")
);

// Manager Pages
const DeleteUserRequests = lazy(() =>
  import("./components/manager/managerUM/DelReq")
);
const ManagerDashboard2 = lazy(() =>
  import("./components/manager/managerAM/MD")
);
const ManagerUserManagement = lazy(() =>
  import("./components/manager/managerUM/ManagerUM")
);
const PendingUserApproval = lazy(() =>
  import("./components/manager/managerUM/pendingReqs")
);

// Member Pages
const MemberPI = lazy(() => import("./components/member/MemberPI"));

export default function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <AuthProvider>
      <Router>
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f7f7f7",
              }}
            >
              <h2>Loading...</h2>
            </div>
          }
        >
          <Routes>
            {/* ---------- Public Routes ---------- */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <Login />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Header />
                  <Register />
                </>
              }
            />

            {/* ---------- Manager Routes ---------- */}
            {user?.role === "manager" && (
              <>
                <Route
                  path="/dashboard/am"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <ManagerDashboard2 />
                      </ProtectedRoute>
                    </>
                  }
                />
                <Route
                  path="/dashboard/um"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <ManagerUserManagement />
                      </ProtectedRoute>
                    </>
                  }
                />
                <Route
                  path="/dashboard/pua"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <PendingUserApproval />
                      </ProtectedRoute>
                    </>
                  }
                />
                <Route
                  path="/dashboard/udr"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <DeleteUserRequests />
                      </ProtectedRoute>
                    </>
                  }
                />
              </>
            )}

            {/* ---------- Admin Routes ---------- */}
            {user?.role === "admin" && (
              <>
                <Route
                  path="/dashboard/am"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    </>
                  }
                />
                <Route
                  path="/dashboard/um"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <AdminUserManagement />
                      </ProtectedRoute>
                    </>
                  }
                />
                <Route
                  path="/dashboard/pua"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <AdminPendingUserApproval />
                      </ProtectedRoute>
                    </>
                  }
                />
                <Route
                  path="/dashboard/udr"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <AdminDeleteUserRequests />
                      </ProtectedRoute>
                    </>
                  }
                />
              </>
            )}

            {/* ---------- Member Routes ---------- */}
            {user?.role === "member" && (
              <>
                <Route
                  path="/dashboard/member"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <div style={{ padding: "20px" }}>
                          <h2>Member Dashboard</h2>
                          <p>Welcome to your member portal.</p>
                        </div>
                      </ProtectedRoute>
                    </>
                  }
                />
                <Route
                  path="/dashboard/pi"
                  element={
                    <>
                      <Header />
                      <ProtectedRoute>
                        <MemberPI />
                      </ProtectedRoute>
                    </>
                  }
                />
              </>
            )}

            {/* ---------- Fallback ---------- */}
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}







































// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./components/context/Authcontext";
// import ProtectedRoute from "./components/Protectedroute";
// import "./index.css";

// // Normal imports (no lazy loading)
// import Home from "./components/generic/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";

// // Manager Pages
// import DeleteUserRequests from "./components/manager/managerUM/DelReq";
// import ManagerUserManagement from "./components/manager/managerUM/ManagerUM";
// import PendingUserApproval from "./components/manager/managerUM/pendingReqs";
// import ManagerDashboard2 from "./components/manager/managerAM/MD";

// // Optional Admin / Member (if needed)
// // import AdminDashboard from "./components/admin/AdminDashboard";
// // import MemberDashboard from "./components/member/MemberDashboard";

// export default function App() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* ------------------ Manager Routes ------------------ */}
//           {user?.role === "manager" && (
//             <>
//               <Route
//                 path="/dashboard/am"
//                 element={
//                   <ProtectedRoute>
//                     <ManagerDashboard2 />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/dashboard/um"
//                 element={
//                   <ProtectedRoute>
//                     <ManagerUserManagement />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/dashboard/pua"
//                 element={
//                   <ProtectedRoute>
//                     <PendingUserApproval />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/dashboard/udr"
//                 element={
//                   <ProtectedRoute>
//                     <DeleteUserRequests />
//                   </ProtectedRoute>
//                 }
//               />
//             </>
//           )}

//           {/* ------------------ Admin Routes ------------------ */}
//           {user?.role === "admin" && (
//             <Route
//               path="/dashboard/admin"
//               element={
//                 <ProtectedRoute>
//                   <div>Admin Dashboard</div>
//                 </ProtectedRoute>
//               }
//             />
//           )}

//           {/* ------------------ Member Routes ------------------ */}
//           {user?.role === "member" && (
//             <Route
//               path="/dashboard/member"
//               element={
//                 <ProtectedRoute>
//                   <div>Member Dashboard</div>
//                 </ProtectedRoute>
//               }
//             />
//           )}

//           {/* ------------------ Fallback ------------------ */}
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }
