// components/user/RegistrationForm.jsx
import React, { useState } from "react";
import styles from "../../styles/user/RegistrationForm.module.css";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <select
          name="membershipType"
          value={form.membershipType}
          onChange={handleChange}
        >
          <option value="">Select Membership</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Platinum">Platinum</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
