import React, { useState, useMemo } from "react";
import styles from "../../styles/admin/aum.module.css";

const ManagerUserManagement = () => {
  const [users, setUsers] = useState([
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "9876543210",
      role: "member",
      membership: {
        type: "Gold",
        validity: { startDate: "2025-01-01", endDate: "2025-12-31" },
        status: "active",
      },
      uniqueIdCard: "ID123",
      status: "registered",
      createdAt: "2025-01-15",
    },
    {
      _id: "2",
      name: "Alice Manager",
      email: "alice@example.com",
      phone: "9123456789",
      role: "manager",
      membership: {
        type: null,
        validity: { startDate: null, endDate: null },
        status: "inactive",
      },
      uniqueIdCard: "ID124",
      status: "pending",
      createdAt: "2025-02-10",
    },
  ]);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalMode, setModalMode] = useState(null);

  const rowsPerPage = 6;

  // 🔍 Search & Sort
  const filteredUsers = useMemo(() => {
    let filtered = [...users];
    if (search) {
      filtered = filtered.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase()) ||
          u.phone.includes(search) ||
          (u.uniqueIdCard &&
            u.uniqueIdCard.toLowerCase().includes(search.toLowerCase()))
      );
    }

    filtered.sort((a, b) => {
      if (order === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

    return filtered;
  }, [users, search, sortBy, order]);

  // 📑 Pagination
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // 📝 Update
  const handleUpdate = () => {
    setUsers((prev) =>
      prev.map((u) => (u._id === selectedUser._id ? selectedUser : u))
    );
    setSelectedUser(null);
    setModalMode(null);
  };

  // ❌ Delete
  const handleDelete = () => {
    setUsers((prev) => prev.filter((u) => u._id !== selectedUser._id));
    setSelectedUser(null);
    setModalMode(null);
  };

  return (
    <div className={styles.aumcontainer}>
      <h2 className={styles.mumheader}>User Management</h2>

      {/* Search + Sort */}
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="createdAt">Created At</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>
      </div>

      {/* User Cards */}
      <div className={styles.userGrid}>
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map((user) => (
            <div
              key={user._id}
              className={styles.userCard}
              onClick={() => {
                setSelectedUser({ ...user });
                setModalMode("view");
              }}
            >
              <div className={styles.cardHeader}>
                <h3>{user.name}</h3>
                <span className={styles.role}>{user.role}</span>
              </div>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p className={styles.membership}>
                {user.membership?.type || "No Membership"} •{" "}
                {user.membership?.status}
              </p>
              <div className={styles.cardActions}>
                <button
                  className={styles.editBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedUser({ ...user });
                    setModalMode("edit");
                  }}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedUser(user);
                    setModalMode("delete");
                  }}
                >
                  Request Deletion
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.empty}>No users found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          {page} / {totalPages || 1}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {modalMode === "view" && (
              <>
                <h3>User Details</h3>
                <p><b>Name:</b> {selectedUser.name}</p>
                <p><b>Email:</b> {selectedUser.email}</p>
                <p><b>Phone:</b> {selectedUser.phone}</p>
                <p><b>Role:</b> {selectedUser.role}</p>
                <p><b>Status:</b> {selectedUser.status}</p>
                <p><b>Unique ID:</b> {selectedUser.uniqueIdCard}</p>
                <p>
                  <b>Membership:</b> {selectedUser.membership?.type || "-"} (
                  {selectedUser.membership?.status})
                </p>
                <p>
                  <b>Validity:</b>{" "}
                  {selectedUser.membership?.validity?.startDate || "-"} to{" "}
                  {selectedUser.membership?.validity?.endDate || "-"}
                </p>
                <button onClick={() => setSelectedUser(null)}>Close</button>
              </>
            )}

            {modalMode === "delete" && (
              <>
                <h3>Request deletion of {selectedUser.name}?</h3>
                <div>
                  <button className={styles.deleteBtn} onClick={handleDelete}>
                    Confirm
                  </button>
                  <button onClick={() => setSelectedUser(null)}>Cancel</button>
                </div>
              </>
            )}

            {modalMode === "edit" && (
              <>
                <h3>Edit User</h3>
                <input
                  type="text"
                  placeholder="Name"
                  value={selectedUser.name}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={selectedUser.email}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={selectedUser.phone}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Unique ID"
                  value={selectedUser.uniqueIdCard || ""}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      uniqueIdCard: e.target.value,
                    })
                  }
                />

                <select
                  value={selectedUser.role}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, role: e.target.value })
                  }
                >
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="member">Member</option>
                </select>

                <select
                  value={selectedUser.status}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, status: e.target.value })
                  }
                >
                  <option value="registered">Registered</option>
                  <option value="pending">Pending</option>
                </select>

                <select
                  value={selectedUser.membership?.status || "inactive"}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      membership: {
                        ...selectedUser.membership,
                        status: e.target.value,
                      },
                    })
                  }
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>

                <select
                  value={selectedUser.membership?.type || ""}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      membership: {
                        ...selectedUser.membership,
                        type: e.target.value,
                      },
                    })
                  }
                >
                  <option value="">Select Membership</option>
                  <option value="Gold">Gold</option>
                  <option value="Silver">Silver</option>
                  <option value="Platinum">Platinum</option>
                </select>

                <label>Validity Start</label>
                <input
                  type="date"
                  value={
                    selectedUser.membership?.validity?.startDate
                      ? new Date(
                          selectedUser.membership.validity.startDate
                        ).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      membership: {
                        ...selectedUser.membership,
                        validity: {
                          ...selectedUser.membership?.validity,
                          startDate: e.target.value,
                        },
                      },
                    })
                  }
                />
                <label>Validity End</label>
                <input
                  type="date"
                  value={
                    selectedUser.membership?.validity?.endDate
                      ? new Date(
                          selectedUser.membership.validity.endDate
                        ).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      membership: {
                        ...selectedUser.membership,
                        validity: {
                          ...selectedUser.membership?.validity,
                          endDate: e.target.value,
                        },
                      },
                    })
                  }
                />

                <div>
                  <button className={styles.updateBtn} onClick={handleUpdate}>
                    Update
                  </button>
                  <button onClick={() => setSelectedUser(null)}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerUserManagement;
