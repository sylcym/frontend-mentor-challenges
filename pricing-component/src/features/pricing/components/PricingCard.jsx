import styles from "./PricingCard.module.css";

export default function PricingCard() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Our Pricing</h2>

      <div className={styles.toggle}>
        <span>Annually</span>
        <button className={styles.switch}></button>
        <span>Monthly</span>
      </div>

      <div className={styles.cardsWrapper}>
        {/* <div className={styles.plan}>Basic</div> */}
        <div className={styles.plan}>
          <h3 className={styles.planName}>Basic</h3>

          <p className={styles.price}>
            <span className={styles.currency}>$</span>
            19.99
          </p>

          <ul className={styles.features}>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>

          <button className={styles.button}>Learn More</button>
        </div>
        {/* <div className={styles.planFeatured}>Professional</div> */}
        <div className={styles.planFeatured} >
          <h3 className={styles.planName}>Professional</h3>

          <p className={styles.price}>
            <span className={styles.currency}>$</span>
            19.99
          </p>

          <ul className={styles.features}>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>

          <button className={styles.button}>Learn More</button>
        </div>

        {/* <div className={styles.plan}>Master</div> */}
        <div className={styles.plan}>
          <h3 className={styles.planName}>Master</h3>

          <p className={styles.price}>
            <span className={styles.currency}>$</span>
            19.99
          </p>

          <ul className={styles.features}>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>

          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
}