// components/user/MembershipDetails.jsx
import React from "react";
import styles from "../../styles/user/MembershipDetails.module.css";

const MembershipDetails = () => {
  const membership = {
    type: "Gold",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    status: "Active",
  };

  return (
    <div className={styles.membership}>
      <h2>Membership Details</h2>
      <p><strong>Type:</strong> {membership.type}</p>
      <p><strong>Start Date:</strong> {membership.startDate}</p>
      <p><strong>End Date:</strong> {membership.endDate}</p>
      <p><strong>Status:</strong> {membership.status}</p>
    </div>
  );
};

export default MembershipDetails;
