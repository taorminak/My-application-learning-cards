import styles from "./Card.css";
import { useState } from "react";

export default function Card(props) {
  const [isEdited, setIsEdited] = useState(true);
  const [flag, setFlag] = useState(true);

  function getTranslated() {
    setFlag(false);
  }

  function getEdited() {
    setIsEdited(false);
  }
  function getSaved() {
    setIsEdited(true);
  }

  return (
    <div className={styles.Card}>
      {isEdited ? (
        <div>
          <div className={styles.Deutsch}>{props.deutsch}</div>
          <div className={styles.Artikel}>{props.artikel}</div>
          <div className={styles.Bedeutung}>{props.bedeutung}</div>
          <div className={styles.Beispiele}>{props.beispiele}</div>
          <div>
            {" "}
            {flag ? (
              <button onClick={getTranslated} className={styles.Button}>
                Translate
              </button>
            ) : (
              <div className={styles.Translation}>{props.russisch}</div>
            )}
            <button className={styles.Button} onClick={getEdited}>
              Edit card
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.Inputs}>
          <input
            type="text"
            className={styles.Deutsch + " " + styles.Input}
            defaultValue={props.deutsch}
          />
          <input
            type="text"
            className={styles.Artikel + " " + styles.Input}
            defaultValue={props.artikel}
          />
          <input
            type="text"
            className={styles.Bedeutung + " " + styles.Input}
            defaultValue={props.bedeutung}
          />
          <input
            type="text"
            className={styles.Beispiele + " " + styles.Input}
            defaultValue={props.beispiele}
          />
          <input
            type="text"
            className={styles.Russisch + " " + styles.Input}
            defaultValue={props.russisch}
          />
          <button className={styles.Button} onClick={getSaved}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}
