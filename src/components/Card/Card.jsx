import styles from "./Card.css";
import { useState } from "react";

export default function Card(props) {

  const [flag, setFlag] = useState(true);

function getTranslate() { setFlag(false)};

  return (
    <div className={styles.Card}>
      <div className={styles.Deutsch}>{props.deutsch}</div>
      <div className={styles.Artikel}>{props.artikel}</div>
      <div className={styles.Bedeutung}>{props.bedeutung}</div>
      <div className={styles.Russisch}> {flag ? <button onClick={getTranslate} className={styles.Button}>Translate</button> : <div>{props.russisch}</div>}</div>
      <div className={styles.Beispiele}>{props.beispiele}</div>
    </div>
  );
}
