import styles from "./FlippingCard.css";

export default function FlippingCard(props) {
  return (
    <div className={styles.Card + " " + styles.FlipCard}>
      <div className={styles.FlipCardInner}>
        <div className={styles.FlipCardFront}>
          <div className={styles.Deutsch}>{props.deutsch}</div>
          <div className={styles.Artikel}>{props.artikel}</div>
          <div className={styles.Bedeutung}>{props.bedeutung}</div>
          <div className={styles.Beispiele}>{props.beispiele}</div>
        </div>
        <div className={styles.FlipCardBack}>
          <div className={styles.Translation}>{props.russisch}</div>
        </div>
      </div>
    </div>
  );
}
