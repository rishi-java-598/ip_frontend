import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import styles from "../../styles/generic/Navbar.module.css";
import styles from "../../styles/generic/Navbar.module.css";
import pic from "../../assets/Logo.png";
// import { useSelector } from "react-redux";
// import { useAuth } from "../Context/Context";
// import { signOut } from "firebase/auth";
// import { toast } from "react-toastify";
const HamMenu = () => {
  //demo
  // const demoobj = useSelector((store)=> store.fslice)
  // console.log("jj",demoobj);
//   const { auth, user, uloading } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
   console.log("logout");
   
      
    }

  return (
    <span>
            <div className={styles["menu-toggle"]} onClick={toggleMenu}>
              <span className={styles["bar"]}></span>
              <span className={styles["bar"]}></span>
              <span className={styles["bar"]}></span>
            </div>

      

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margintop: "20px",
          }}
        >
          <div className={styles["menu-toggle2"]} onClick={toggleMenu}>
            <span className={styles["bar2"]}></span>
            <span className={styles["bar2"]}></span>
            <span className={styles["bar2"]}></span>
          </div>
        </div>
        <ul className={styles["sidebar-links"]}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/accounts" onClick={toggleMenu}>
              Accounts
            </Link>
          </li>
          <li>
            <Link to="/budgets" onClick={toggleMenu}>
              Budgets
            </Link>
          </li>
          <li>
            <Link to="/userProfile" onClick={toggleMenu}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </span>
  );
};

export default HamMenu;