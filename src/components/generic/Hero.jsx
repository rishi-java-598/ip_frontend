import styles from "../../styles/generic/generic.module.css";

export default function Hero() {
  return (<>
    <div className={styles.mainpage} id={styles.mainpage}>
      <div className={styles.leftText}>
        <span>
          <h2 >
            BUILD STRENGTH. BOOST CONFIDENCE. TRANSFORM YOUR LIFE.
          </h2>
        </span>
      </div>
      <div className={styles.rightText} id={styles.rightText}>
        <div className={styles.textBox} id={styles.textBox}>
          <p>
            Join Iron Paradise and become part of a community that pushes limits,
            smashes goals, and inspires greatness.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.bigImage} id={styles.bigImage}></div>
</>
  );
}
