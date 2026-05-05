import { useState } from "react";
import styles from "./PricingCard.module.css";
import PricingPlan from "./PricingPlan";

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

  const plans = [
    { name: "Basic", ...pricing.basic },
    { name: "Professional", ...pricing.professional, featured: true },
    { name: "Master", ...pricing.master },
  ];

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
        {plans.map((plan) => (
          <PricingPlan
            key={plan.name}
            name={plan.name}
            price={getPrice(plan)}
            isFeatured={plan.featured}
          />
        ))}
      </div>
    </div>
  );
}