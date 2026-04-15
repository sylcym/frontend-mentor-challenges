import PropTypes from "prop-types";
import styles from "./CustomTooltip.module.css";

export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className={styles.tooltip}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>${payload[0].value}</p>
    </div>
  );

}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};