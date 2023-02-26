import styles from './FlippingCard.css';
import { useState } from "react";

export default function FlippingCard(props) {
  const [flag, setFlag] = useState(true);

  function getTranslated() {
    setFlag(false);
  }

  return (
    <div className={styles.Card+" "+styles.FlipCard}>
        <div className={styles.FlipCardInner}>
          <div className={styles.FlipCardFront}>
          <div className={styles.Deutsch}>{props.deutsch}</div>
          <div className={styles.Artikel}>{props.artikel}</div>
          <div className={styles.Bedeutung}>{props.bedeutung}</div>
          <div className={styles.Beispiele}>{props.beispiele}</div></div>
          <div className={styles.FlipCardBack}>
            {" "}
            {flag ? (
              <button onClick={getTranslated} className={styles.Button}>
                Translate
              </button>
            ) : (
              <div className={styles.Translation}>{props.russisch}</div>
            )}
          </div>
        </div>
    </div>
  );
}