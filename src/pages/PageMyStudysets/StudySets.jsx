import React from "react";
import words from "../../components/all-words.json";
import Card from "../../components/Card/Card";
import styles from "./StudySets.css"


export default function StudySets() {
    return (
<div className={styles.Card}>
        {words.map((word) => (
          <Card
            id={word.id}
            deutsch={word.deutsch}
            artikel={word.artikel}
            bedeutung={word.bedeutung}
            russisch={word.russisch}
            beispiele={word.beispiele}
          />
        ))}
      </div>
        );
    }