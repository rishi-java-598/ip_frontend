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






import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/Authcontext";
import ProtectedRoute from "./components/Protectedroute";

// 🧩 Lazy-loaded public pages
const Home = lazy(() => import("./components/generic/Home"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

// 🧩 Lazy-loaded manager subpages
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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ---------- Manager Routes ---------- */}
            {user?.role === "manager" && (
              <>
                <Route
                  path="/dashboard/am"
                  element={
                    <ProtectedRoute>
                      <ManagerDashboard2 />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/um"
                  element={
                    <ProtectedRoute>
                      <ManagerUserManagement />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/pua"
                  element={
                    <ProtectedRoute>
                      <PendingUserApproval />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/udr"
                  element={
                    <ProtectedRoute>
                      <DeleteUserRequests />
                    </ProtectedRoute>
                  }
                />
              </>
            )}

            {/* ---------- Admin Routes ---------- */}
            {user?.role === "admin" && (
              <Route
                path="/dashboard/admin"
                element={
                  <ProtectedRoute>
                    <div style={{ padding: "20px" }}>
                      <h2>Admin Dashboard</h2>
                      <p>This is the admin control panel for managing the system.</p>
                    </div>
                  </ProtectedRoute>
                }
              />
            )}

            {/* ---------- Member Routes ---------- */}
            {user?.role === "member" && (
              <Route
                path="/dashboard/member"
                element={
                  <ProtectedRoute>
                    <div style={{ padding: "20px" }}>
                      <h2>Member Dashboard</h2>
                      <p>Welcome to your member portal.</p>
                    </div>
                  </ProtectedRoute>
                }
              />
            )}

            {/* ---------- Fallback ---------- */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}









//suspense added
// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./components/context/Authcontext";
// import ProtectedRoute from "./components/Protectedroute";
// // import './index.css'

// // 🧩 Lazy-loaded components (code splitting)
// const Home = lazy(() => import("./components/generic/Home"));
// const Login = lazy(() => import("./components/Login"));
// const Register = lazy(() => import("./components/Register"));

// // Manager Pages (lazy)
// const DeleteUserRequests = lazy(() =>
//   import("./components/manager/managerUM/DelReq")
// );
// const ManagerUserManagement = lazy(() =>
//   import("./components/manager/managerUM/ManagerUM")
// );
// const PendingUserApproval = lazy(() =>
//   import("./components/manager/managerUM/pendingReqs")
// );
// const ManagerDashboard2 = lazy(() =>
//   import("./components/manager/managerAM/MD")
// );

// // Optional Admin / Member (lazy examples)
// // const AdminDashboard = lazy(() =>
// //   import("./components/admin/AdminDashboard")
// // );
// // const MemberDashboard = lazy(() =>
// //   import("./components/member/MemberDashboard")
// // );

// export default function App() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <AuthProvider>
//       <Router>
//         {/* Suspense provides fallback while components load */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* ------------------ Manager Routes ------------------ */}
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

//             {/* ------------------ Admin Routes ------------------ */}
//             {user?.role === "admin" && (
//               <Route
//                 path="/dashboard/admin"
//                 element={
//                   <ProtectedRoute><div>Admin Dashboard</div>                  </ProtectedRoute>
//                 }
//               />
//             )}

//             {/* ------------------ Member Routes ------------------ */}
//             {user?.role === "member" && (
//               <Route
//                 path="/dashboard/member"
//                 element={
//                   <ProtectedRoute>
//                     <div>Member Dashboard</div>
//                   </ProtectedRoute>
//                 }
//               />
//             )}

//             {/* ------------------ Fallback ------------------ */}
//             <Route path="*" element={<Home />} />
//           </Routes>
//         </Suspense>
//       </Router>
//     </AuthProvider>
//   );
// }



















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
