import styles from "./Card.css";

export default function Card(props) {
  return (
    <div className={styles.Card}>
      <div className={styles.Deutsch}>{props.deutsch}</div>
      <div className={styles.Artikel}>{props.artikel}</div>
      <div className={styles.Bedeutung}>{props.bedeutung}</div>
      <div className={styles.Russisch}>{props.russisch}</div>
      <div className={styles.Beispiele}>{props.beispiele}</div>
    </div>
  );
}
