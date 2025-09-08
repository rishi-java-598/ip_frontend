// components/user/ProfilePage.jsx
import React from "react";
import styles from "../../styles/user/ProfilePage.module.css";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    uniqueIdCard: "GYM12345",
  };

  return (
    <div className={styles.profile}>
      <h2>My Profile</h2>
      <div className={styles.info}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>ID Card:</strong> {user.uniqueIdCard}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
