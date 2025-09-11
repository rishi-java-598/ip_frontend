import styles from "../../styles/generic/generic.module.css";

export default function Membership() {
  return (
    <section className={styles.membership}>
      {[1, 2, 3].map((i) => (
        <div className={styles.flipCard} key={i}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <p className={styles.title}>FLIP CARD</p>
              <p>Hover Me</p>
            </div>
            <div className={styles.flipCardBack}>
              <p className={styles.title}>BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
