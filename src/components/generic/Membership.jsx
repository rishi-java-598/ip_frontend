import styles from "../../styles/generic/generic.module.css";

export default function Membership() {
  return (
    <>
    <h1 className={styles.memHead}>Our Memberships</h1>
    <section className={styles.membership}>
      {/* {[1, 2, 3,4].map((i) => ( */}

      <div className={styles.upd}>

         <div className={styles.flipCard} key={1}>
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
        <div className={styles.flipCard} key={4}>
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


      </div>



      <div className={styles.lowd}>


  <div className={styles.flipCard} key={2}>
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
        <div className={styles.flipCard} key={3}>
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
      </div>
     
      
      {/* ))} */}
    </section></>

  );
}
