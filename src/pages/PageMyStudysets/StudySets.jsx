import React from "react";
import words from "../../components/all-words.json";
import Card from "../../components/Card/Card";
import styles from "./StudySets.css";
import { useRef } from "react";

export default function StudySets() {
  const studiedCount = useRef(0);

  return (
    <div>
      <div className={styles.StudiedCount}>
        Studied words: {studiedCount.current}
      </div>
      <div className={styles.Card}>
        {words.map((word) => (
          <Card
            key={word.id}
            deutsch={word.deutsch}
            artikel={word.artikel}
            bedeutung={word.bedeutung}
            russisch={word.russisch}
            beispiele={word.beispiele}
            studiedCount={studiedCount}
          />
        ))}
      </div>
    </div>
  );
}
