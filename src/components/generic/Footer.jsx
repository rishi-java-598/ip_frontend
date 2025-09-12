import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/generic/Footer.module.css'
import { IoLogoInstagram } from "react-icons/io5";
import pic from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.intofooterinner}>
        <div className={styles.footerContainer}>
          <div className={styles.entryText}>
            <img
              style={{ borderRadius: "10px" }}
              src={pic}
              width={160}
              alt=""
            />
            <p
            // style={{color:"white"}}
            >
              The Iron Paradise – Strength in motion.
Power in progress.
<br />
<br />
Address - VIT BHOPAL
            </p>
          </div>

          <div id={styles.contactus1}>
            <h2>Connect with us</h2>
            <div>
              <h3 style={{ color: "white",marginTop:"10px" }}>mail : TheIronParadise@gmail.com</h3>

              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginTop: "10px",
                  color: "white",
                }}
              >
                <IoLogoInstagram color="white" size={40} />
                Instagram
                <a
                  id={styles.linkedinbutton}
              
                  target="_blank"
                  href="https://instagram.com/"
                >
                  Follow us
                </a>
              </h4>
            </div>
          </div>
        </div>

        <div className={styles.wholeindiv}>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
            Quick Links
          </h2>

          <div className={styles.centerContainer}>
            <Link className={styles.flink} to="/">
              Home
            </Link>
            <Link className={styles.flink} to="/about">
              About Us
            </Link>
            <Link className={styles.flink} to="/accounts">
              Gym Staff
            </Link>
            <Link className={styles.flink} to="/budgets">
              Register
            </Link>
            <Link className={styles.flink} to="/userProfile">
              Profile
            </Link>
          </div>
        </div>
      </div>

      <div id={styles.contactus2}>
        <h2>Connect with us</h2>
        <div>

          <h3 style={{ color: "white",marginTop:"10px" }}>                  <br />
mail : expo.tracey@gmail.com</h3>

          <h4

            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
              color: "white",
            }}
          
          >
            <IoLogoInstagram color="white" size={40} />
            Instagram
            <a
              id={styles.linkedinbutton}
              // style={{
              //   textDecoration: "none",
              //   color: "white",
              //   padding:"2px 6px ",
              //   border:"solid 1px white",
              //   borderRadius:"10px"
              //   // marginLeft: "20px",
              // }}
              target="_blank"
              href="https://www.linkedin.com/in/rishi-raj-sharma-kdds598/"
            >
              Follow us
            </a>
          </h4>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <p style={{ textAlign: "center" }}>
          &copy; 2025 The Iron Paradise, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;