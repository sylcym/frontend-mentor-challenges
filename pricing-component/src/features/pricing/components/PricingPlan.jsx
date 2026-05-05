import styles from "./PricingCard.module.css";
import PropTypes from "prop-types";

export default function PricingPlan({
  name,
  price,
  isFeatured,
}) {
  return (
    <div
      className={
        isFeatured ? styles.planFeatured : styles.plan
      }
    >
      <h3 className={styles.planName}>{name}</h3>

      <p className={styles.price}>
        <span className={styles.currency}>$</span>
        {price}
      </p>

      <ul className={styles.features}>
        <li>500 GB Storage</li>
        <li>2 Users Allowed</li>
        <li>Send up to 3 GB</li>
      </ul>

      <button className={styles.button}>
        Learn More
      </button>
    </div>
  );
}
PricingPlan.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  isFeatured: PropTypes.bool,
};