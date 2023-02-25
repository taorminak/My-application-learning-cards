import style from "./App.css";
import words from "./components/all-words.json";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";


function App() {
const [count, setCount] = useState(0);

function handlePrev() {
  setCount(count - 1)
}

function handleNext() {
  setCount(count + 1)
}

console.log(words[count].deutsch)
  return (
    <div className={style.App}>
      <Header />
      <div className={style.FlippingCard}>
        <Card words={words[count].deutsch}/>
        <div className={style.ButtonContainer}>
        <button className={style.Button}  onClick={handlePrev}>Previous</button>
        <button className={style.Button}  onClick={handleNext}>Next</button></div>
      </div>
      <div className={style.Card}>
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
