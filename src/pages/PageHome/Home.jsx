import React from "react";
import FlippingCard from "../../components/FlippingCard/FlippingCard";
import { useState } from "react";
import words from "../../components/all-words.json";
import styles from "./Home.css"


export default function Home() {

    const [count, setCount] = useState(0);

  function handlePrev() {
    setCount(count - 1);
    if (count <= 0) {
      alert("There is the first card available!");
      setCount(count);
    }
  }

  function handleNext() {
    setCount(count + 1);
    console.log(count);
    if (count >= (words.length-1)) {
      alert("There is the last card available!");
      setCount(count);
    }
  }

    return (
        <div className={styles.FlippingCard}>
        <FlippingCard
          words={words[count]} count={count}
          deutsch={words[count].deutsch}
          artikel={words[count].artikel}
          russisch={words[count].russisch}
        />
        <div className={styles.ButtonContainer}>
          <button className={styles.Button} onClick={handlePrev}>
          ←
          </button>
          <button className={styles.Button} onClick={handleNext}>
          →
          </button>
        </div>
      </div>
    );
  }