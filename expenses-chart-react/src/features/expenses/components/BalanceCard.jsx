import styles from "./BalanceCard.module.css";
import logo from "../../../assets/logo.svg";

export default function BalanceCard() {
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.text}>My balance</p>
        <h2 className={styles.amount}>$921.48</h2>
      </div>

      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
}