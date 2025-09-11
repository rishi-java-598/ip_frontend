import styles from "../../styles/generic/generic.module.css";
import { Link } from "react-router-dom";
import pic from "../../assets/Logo.png";
export default function Header() {
  return (
    <nav className={styles.nav}>
        <div className={styles.lnc}>

             <img src={pic} alt="Logo" />
             <h1 className={styles.logoText}>THE IRON <br /> PARADISE</h1>
        </div>



     
      <div className={styles.rnc}>
        <button>
          <Link to="/login">LOG IN</Link>
        </button>
      </div>
    </nav>
  );
}
