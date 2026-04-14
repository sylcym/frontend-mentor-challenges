import styles from "./BalanceCard.module.css";

export default function BalanceCard() {
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.text}>My balance</p>
        <h2 className={styles.amount}>$921.48</h2>
      </div>

      <div>●●</div> {/* placeholder logo */}
    </div>
  );
}