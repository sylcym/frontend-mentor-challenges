import styles from "./PricingCard.module.css";
import { useState } from "react";

export default function PricingCard() {
  const [isYearly, setIsYearly] = useState(true);

  const getPrice = (plan) =>
    isYearly ? plan.yearly : plan.monthly;

  const pricing = {
    basic: {
      monthly: 19.99,
      yearly: 199.99,
    },
    professional: {
      monthly: 24.99,
      yearly: 249.99,
    },
    master: {
      monthly: 39.99,
      yearly: 399.99,
    },
  };

  function togglePricing() {
    setIsYearly((prev) => !prev);
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Our Pricing</h2>

      <div className={styles.toggle}>
        <span
          onClick={() => setIsYearly(true)}
          className={!isYearly ? styles.active : ""}
        >
          Annually
        </span>

        <button
          className={styles.switch}
          onClick={togglePricing}
        >
          <div
            className={`${styles.thumb} ${!isYearly ? styles.thumbRight : ""
              }`}
          />
        </button>

        <span
          onClick={() => setIsYearly(false)}
          className={isYearly ? styles.active : ""}
        >
          Monthly
        </span>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.plan}>
          <h3 className={styles.planName}>Basic</h3>

          <p className={styles.price}>
            <span className={styles.currency}>$</span>
            {getPrice(pricing.basic)}
          </p>

          <ul className={styles.features}>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>

          <button className={styles.button}>Learn More</button>
        </div>
        <div className={styles.planFeatured} >
          <h3 className={styles.planName}>Professional</h3>

          <p className={styles.price}>
            <span className={styles.currency}>$</span>
            {getPrice(pricing.basic)}
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
            {getPrice(pricing.basic)}
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