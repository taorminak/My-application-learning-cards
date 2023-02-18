import styles from "./App.css";
import words from "./components/all-words.json";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {words.map((word, index) => (
        <Card
          key={index}
          deutsch={word.deutsch}
          artikel={word.artikel}
          bedeutung={word.bedeutung}
          russisch={word.russisch}
          beispiele={word.beispiele}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
