// import styles from "./PricingCard.module.css";
import styles from "./PricingPlan.module.css";
import PropTypes from "prop-types";

export default function PricingPlan({
  name,
  price,
  isFeatured,
}) {

  const features = [
    "500 GB Storage",
    "2 Users Allowed",
    "Send up to 3 GB",
  ];

  return (
    <div
      className={
        isFeatured ? styles.planFeatured : styles.plan
      }
    >
      <h3 className={styles.planName}>{name}</h3>

      <p className={styles.price}>
        <span className={styles.currency}>$</span>
        {/* {
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)
        } */}
        {price.toFixed(2)}
      </p>

      <ul className={styles.features}>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {/* <ul className={styles.features}>
        <li>500 GB Storage</li>
        <li>2 Users Allowed</li>
        <li>Send up to 3 GB</li>
      </ul> */}

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