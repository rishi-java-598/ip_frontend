import React, { useState } from "react";
import styles from "../styles/generic/Register.module.css";

const roles = [ "member"];
const membershipTypes = ["Gold", "Silver", "Platinum"];
const membershipStatuses = ["active", "inactive"];
// const statuses = ["registered", "pending"];

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "",
    membershipType: "",
    membershipStartDate: "",
    membershipEndDate: "",
    membershipStatus: "",
    uniqueIdCard: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Here, you'd typically send `form` data to your backend

    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone,
      role: form.role,
      membership: form.role === "member" ? {
        type: form.membershipType || null,
        validity: {
          startDate: form.membershipStartDate ? new Date(form.membershipStartDate) : null,
          endDate: form.membershipEndDate ? new Date(form.membershipEndDate) : null,
        },
        status: form.membershipStatus || "inactive",
      } : undefined,
      uniqueIdCard: form.uniqueIdCard,
      status: form.status,
    };

    console.log("Submitting user data:", userData);
    alert("Registration submitted! Check console.");
  };

  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <h2 className={styles.title}>Register</h2>
        <p className={styles.subtitle}>Signup now and get full access to our app.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={form.name}
              onChange={handleChange}
              required
            />
         

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (10 digits)"
            value={form.phone}
            onChange={handleChange}
            pattern="\d{10}"
            title="Phone number should be 10 digits"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
            ))}
          </select>

          {form.role === "member" && (
            <>
              <select
                name="membershipType"
                value={form.membershipType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Membership Type</option>
                {membershipTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <div className={styles.dateFields}>
                <input
                  type="date"
                  name="membershipStartDate"
                  value={form.membershipStartDate}
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  name="membershipEndDate"
                  value={form.membershipEndDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <select
                name="membershipStatus"
                value={form.membershipStatus}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Membership Status</option>
                {membershipStatuses.map((status) => (
                  <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
                ))}
              </select>
            </>
          )}

          <input
            type="text"
            name="uniqueIdCard"
            placeholder="Unique ID Card"
            value={form.uniqueIdCard}
            onChange={handleChange}
            required
          />

         

          <button type="submit">Submit</button>
        </form>

        <p className={styles.signinText}>
          Already have an account? <a href="#">Signin</a>
        </p>
      </div>
    </div>
  );
}
