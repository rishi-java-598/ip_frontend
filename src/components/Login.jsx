import React from 'react';
import styles from '../styles/generic/Login.module.css';

const Login = () => {
  return (
    <div id="main" className={styles.container}>
      <div id="left" className={styles.left}>
        <div className={styles.loginContainer}>

          <form className={styles.loginBox}>
                                <h1 id='loghead'>Login</h1>

            <label htmlFor="email">Email</label>
            <div className={styles.inputGroup}>
              <span className={styles.icon}>@</span>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                required
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className={styles.inputGroup}>
              <span className={styles.icon}>🔒</span>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                required
              />
            </div>

            <div className={styles.options}>
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className={styles.btn}>
              Sign In
            </button>

            <p className={styles.signupText}>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
