import styles from "../../styles/generic/generic.module.css";
import { Link } from "react-router-dom";
import pic from "../../assets/Logo.png";
import { useAuth } from "../context/Authcontext";
import HamMenu from "./HamMenu";
export default function Header() {
  const {user,logout} = useAuth();
  return (
    <nav className={styles.nav}>
        <div className={styles.lnc}>

             <img src={pic} alt="Logo" />
             <h1 className={styles.logoText}>THE IRON <br /> PARADISE</h1>
        </div>



     
      <div className={styles.rnc}>
         {user?
        <button className={styles.signupBtn}  id={styles.moveLink}  onClick={logout}>Log out</button> 
        :<Link className={styles.signupBtn} 
        // id={styles.moveLink}
         to="/login">LOG IN</Link>
         }
        <HamMenu/>

     
        </div>
    </nav>
  );
}