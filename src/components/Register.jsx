import React, { useState } from "react";
import styles from "../styles/generic/Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    uniqueIdCard: "",
    role: "member",
    status: "pending",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // here you can send formData to your backend
  };

  return (
    <div id="main" className={styles.container}>
      <div id="left-side" className={styles.leftSide}>
        <div className={styles.registerContainer}>
          <div className={styles.registerBox}>
            <h2 className={styles.title}>
              <span className={styles.icon}></span>
              Register
            </h2>
            <p className={styles.subtitle}>
              Signup now and get full access to our app.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="uniqueIdCard"
                placeholder="Unique ID Card"
                value={formData.uniqueIdCard}
                onChange={handleChange}
                required
              />

              {/* Hidden fields */}
              <input type="hidden" name="role" value={formData.role} />
              <input type="hidden" name="status" value={formData.status} />

              <button type="submit">Submit</button>
            </form>

            <p className={styles.signinText}>
              Already have an account? <Link to="/login">Signin</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;