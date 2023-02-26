import styles from "./App.css";
import words from "./components/all-words.json";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import FlippingCard from "./components/FlippingCard/FlippingCard";

function App() {
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
    <div className={styles.App}>
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
